import { ExportType } from '../../const/schema';
import { CSchemaDataType, CSchemaDataTypeDescribe } from '../../types/schema';
import { checkComplexData } from '../../util/dataCheck';
import { isArray } from '../../util/lodash';
import { DataModelEmitter } from '../../util/modelEmitter';
import { CNode } from './Node';

export const checkSchema = (data: any): CSchemaDataType => {
  checkComplexData({
    data: data,
    dataStruct: CSchemaDataTypeDescribe,
    throwError: true,
  });
  return data;
};

export const parseSchema = (data: CSchemaDataType, parent: CSchema) => {
  let res = [];
  if (isArray(data.children)) {
    res = data.children.map((el: any) => {
      return new CNode(el, { parent });
    });
  } else {
    res.push(new CNode(data.children, { parent }));
  }
  return {
    ...data,
    children: res,
  };
};

export class CSchema {
  private rawData: CSchemaDataType;
  emitter = DataModelEmitter;
  private data;
  constructor(data: any) {
    this.rawData = JSON.parse(JSON.stringify(data));
    this.data = parseSchema(data, this);
  }

  get value() {
    return this.data;
  }

  export(mode: ExportType = ExportType.SAVE): CSchemaDataType {
    return this.rawData;
  }
}