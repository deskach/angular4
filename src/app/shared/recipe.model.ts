import { Model } from './model';

export class Recipe extends Model {
  constructor(public id: number = Model.newId(),
              public name?: string,
              public description?: string,
              public imagePath?: string,
              public ingredients?: Model[],) {
    super(id);
  }
}
