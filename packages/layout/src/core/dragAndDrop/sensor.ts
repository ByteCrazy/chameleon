import { BaseDragAndDropEventType } from '../../types/dragAndDrop';
import { addEventListenerReturnCancel } from '../../utils';
import { Pointer } from './common';
import { DEmitter } from './emitter';

/* eslint-disable @typescript-eslint/no-empty-function */
export type SensorOffsetType = {
  x: number;
  y: number;
};

export type SensorEventObjType<T extends Record<string, any> = any> = {
  sensor: Sensor<T>;
  pointer: Pointer;
  event: MouseEvent;
  extraData?: T;
};

export type SensorClickEventObjType = Omit<SensorEventObjType, 'pointer'>;

export type SensorEventType<E extends Record<string, any> = any> = {
  onLeave: SensorEventObjType<E>;
  onEnter: SensorEventObjType<E>;
  onMouseChange: SensorEventObjType<E>;
  onMouseUp: SensorEventObjType<E>;
  onMouseDown: SensorEventObjType<E>;
  onMouseMove: SensorEventObjType<E>;
  onClick: SensorEventObjType<E>;
} & BaseDragAndDropEventType<E>;

export type SensorEventNameType = keyof SensorEventType<any>;

export class Sensor<E extends Record<string, any> = any> extends DEmitter<SensorEventType<E>> {
  // TODO: 用于处理感应区重叠时，事件触发的优先级, 暂时未实现相关功能
  eventPriority = 0;
  private offset: SensorOffsetType = {
    x: 0,
    y: 0,
  };

  container: HTMLElement;
  offsetDom?: HTMLElement | null;

  canDrag: (params: SensorEventObjType<E>) => Promise<SensorEventObjType<E> | null | undefined | boolean> = (params) =>
    Promise.resolve(params);
  canDrop: (params: SensorEventObjType<E>) => Promise<SensorEventObjType<E> | null | undefined | boolean> = (params) =>
    Promise.resolve(params);

  private eventDisposeQueue: (() => void)[] = [];
  name: string;
  constructor(options: {
    name: string;
    container: Sensor['container'];
    offset?: Sensor['offset'];
    offsetDom?: Sensor['offsetDom'];
    eventPriority?: number;
  }) {
    super();
    this.name = options.name;
    this.eventPriority = options.eventPriority || this.eventPriority;
    this.container = options.container;
    if (options.offset) {
      this.offset = options.offset || { x: 0, y: 0 };
    }

    this.offsetDom = options.offsetDom;

    this.registerEvent();
    this.registerSyncOffsetEvent();
  }

  registerSyncOffsetEvent() {
    const container = this.offsetDom;
    if (!container) {
      return;
    }
    const handle = window.setInterval(() => {
      const rect = container.getBoundingClientRect();
      this.offset = {
        x: rect.x,
        y: rect.y,
      };
    }, 250);

    this.eventDisposeQueue.push(() => {
      clearInterval(handle);
    });
  }

  registerEvent() {
    const container = this.container as unknown as HTMLElement;
    this.eventDisposeQueue.push(
      addEventListenerReturnCancel(container, 'mouseenter', (e) => {
        this.emitter.emit('onEnter', {
          sensor: this,
          event: e,
          pointer: this.getPointer(e),
        });
      })
    );
    this.eventDisposeQueue.push(
      addEventListenerReturnCancel(container, 'mouseleave', (e) => {
        this.emitter.emit('onLeave', {
          sensor: this,
          event: e,
          pointer: this.getPointer(e),
        });
      })
    );
    this.eventDisposeQueue.push(
      addEventListenerReturnCancel(
        container,
        'mousedown',
        (e) => {
          this.emitter.emit('onMouseChange', {
            sensor: this,
            pointer: this.getPointer(e),
            event: e,
          });

          this.emitter.emit('onMouseDown', {
            sensor: this,
            pointer: this.getPointer(e),
            event: e,
          });
        },
        true
      )
    );
    this.eventDisposeQueue.push(
      addEventListenerReturnCancel(
        container,
        'mouseup',
        (e) => {
          this.emitter.emit('onMouseChange', {
            sensor: this,
            pointer: this.getPointer(e),
            event: e,
          });
          this.emitter.emit('onMouseUp', {
            sensor: this,
            pointer: this.getPointer(e),
            event: e,
          });
        },
        true
      )
    );

    this.eventDisposeQueue.push(
      addEventListenerReturnCancel(
        container,
        'mousemove',
        (e) => {
          this.emitter.emit('onMouseMove', {
            sensor: this,
            pointer: this.getPointer(e),
            event: e,
          });
          this.emitter.emit('onMouseChange', {
            sensor: this,
            pointer: this.getPointer(e),
            event: e,
          });
        },
        true
      )
    );

    this.eventDisposeQueue.push(
      addEventListenerReturnCancel(
        container,
        'click',
        (e) => {
          this.emitter.emit('onClick', {
            sensor: this,
            event: e,
            pointer: this.getPointer(e),
          });
        },
        true
      )
    );
  }

  getPointer(e: MouseEvent) {
    return {
      x: this.offset.x + e.clientX,
      y: this.offset.y + e.clientY,
    };
  }

  updateOffset(offset: SensorOffsetType) {
    this.offset = offset;
  }

  getOffset() {
    return this.offset;
  }

  setCanDrag(cb: typeof this.canDrag) {
    this.canDrag = cb;
  }

  setCanDrop(cb: typeof this.canDrop) {
    this.canDrop = cb;
  }

  destroy() {
    this.eventDisposeQueue.forEach((el) => el());
  }
}
