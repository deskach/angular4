export enum SECModelType { SERVER = 1, BLUE_PRINT = 2, }

export class SECModel {
  constructor(public type: SECModelType,
              public name: string,
              public content: string) {
  }

  isServer = () => this.type === SECModelType.SERVER;
  isBluePrint = () => this.type === SECModelType.BLUE_PRINT;
}

