export class Model {
  constructor(public id: number) {
  }

  static newId() {
    return Date.now() + Math.ceil(Math.random() * 10000);
  }

  static merge<T extends Model>(value: T, params: { [key: string]: any }): T {
    for (let k of Object.keys(params)) {
      value[k] = params[k];
    }

    return value;
  }

  assign(params: { [key: string]: any }) {
    return Model.merge(this, params);
  }
}
