import {uniqueId} from 'lodash';

export class Ingredient {
  constructor(public name: string, public amount: number, public id: number) {
  }

  static createInstance(name: string, amount: number) {
    return new Ingredient(name, amount, uniqueId());
  }
}
