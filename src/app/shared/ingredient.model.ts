import { Model } from "./model";

export class Ingredient extends Model {
  constructor(public id: number = Model.newId(),
              public name?: string,
              public amount?: number,) {
    super(id);
  }
}
