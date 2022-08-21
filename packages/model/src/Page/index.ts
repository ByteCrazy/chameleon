import { Emitter } from 'mitt';
import { checkComplexData } from '../util/dataCheck';
import { CPageDataType, CPageDataTypeDescribe } from '../types/page';
import { DataModelEmitter } from '../util/modelEmitter';
import { CSchema } from './Schema';
import { ExportType } from '../const/schema';

export const checkPage = (data: any): CPageDataType => {
  checkComplexData({
    data: data,
    dataStruct: CPageDataTypeDescribe,
    throwError: true,
  });

  return data;
};

export const parsePage = (data: CPageDataType) => {
  return {
    ...data,
    componentsTree: new CSchema(data.componentsTree),
  };
};

export type CPpageDataModelType = Omit<CPageDataType, 'componentsTree'> & {
  componentsTree: CSchema;
};
export class CPage {
  rawData: CPageDataType;
  emitter = DataModelEmitter;
  data: CPpageDataModelType;
  parent: null | undefined;
  constructor(
    data: any,
    options?: {
      emitter?: Emitter<any>;
    }
  ) {
    checkPage(data);
    this.rawData = JSON.parse(JSON.stringify(data));
    this.data = parsePage(data);
    if (options?.emitter) {
      // todo
      this.emitter = options?.emitter as any;
    }
  }

  get value() {
    return this.data;
  }

  // TODO
  export(mode: ExportType = ExportType.SAVE) {
    const res = {
      ...this.data,
      componentsTree: this.data.componentsTree.export(mode),
    };

    return JSON.parse(JSON.stringify(res));
  }
}