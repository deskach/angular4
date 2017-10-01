import {uniqueId} from 'lodash';

export class Ingredient {
  constructor(public name: string, public amount: number, public id: number = uniqueId()) {
  }
}
