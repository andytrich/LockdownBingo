export interface IbingoNumber {
  numberToBeCalled : number;
  amusingSlang : string;
  explaination : string;
  hasNumberBeenCalled : boolean;
}

export class bingoNumber implements IbingoNumber {
  numberToBeCalled: number = 0;
  amusingSlang: string = '';
  explaination: string = '';
  hasNumberBeenCalled : boolean = false;
  constructor(init: bingoNumber) {
    Object.assign(this, init);
  }
}

