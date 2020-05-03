import { bingoNumber } from './bingoNumber';

export interface Dictionary {
  [numberToBeCalled: number]: bingoNumber;
}
/* let keys: keyof Dictionary<number>; // string | number
let value: Dictionary<number>['foo']; // number */
export interface IbingoDictionairy {
  bingoNumbers: Dictionary;
}


