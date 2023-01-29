import { BaseDragAndDropEventType } from '../../types/dragAndDrop';
import { addEventListenerReturnCancel } from '../../utils';
import { Pointer } from './common';
import { DEmitter } from './emitter';

/* eslint-disable @typescript-eslint/no-empty-function */
export type SensorOffsetType = {
  x: number;
  y: number;
};

export type SensorEventObjType = {
  sensor: Sensor;
  pointer: Pointer;
  event: MouseEvent;
  extraData?: Record<string, any>;
};

export type SensorEventType = {
  onLeave: Omit<SensorEventObjType, 'pointer'>;
  onEnter: Omit<SensorEventObjType, 'pointer'>;
  onMouseChange: SensorEventObjType;
  onMouseUp: SensorEventObjType;
  onMouseDown: SensorEventObjType;
  onMouseMove: SensorEventObjType;
  onClick: Omit<SensorEventObjType, 'pointer'>;
} & BaseDragAndDropEventType;

export type SensorEventNameType = keyof SensorEventType;

export class Sensor extends DEmitter<SensorEventType> {
  private offset: SensorOffsetType = {
    x: 0,
    y: 0,
  };

  container: HTMLElement;
  offsetDom?: HTMLElement | null;

  canDrag: (
    params: SensorEventObjType
  ) => SensorEventObjType | null | undefined = (params) => params;
  canDrop: (
    params: SensorEventObjType
  ) => SensorEventObjType | null | undefined = (params) => params;

  private eventDisposeQueue: (() => void)[] = [];
  name: string;
  constructor(options: {
    name: string;
    container: Sensor['container'];
    offset?: Sensor['offset'];
    offsetDom?: Sensor['offsetDom'];
  }) {
    super();
    this.name = options.name;
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
    const handle = setInterval(() => {
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
        });
      })
    );
    this.eventDisposeQueue.push(
      addEventListenerReturnCancel(container, 'mouseleave', (e) => {
        this.emitter.emit('onLeave', {
          sensor: this,
          event: e,
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

  setCanDrag(cb: Sensor['canDrag']) {
    this.canDrag = cb;
  }

  setCanDrop(cb: Sensor['canDrop']) {
    this.canDrop = cb;
  }

  destroy() {
    this.eventDisposeQueue.forEach((el) => el());
  }
}
