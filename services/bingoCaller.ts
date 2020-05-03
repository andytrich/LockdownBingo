import { bingoNumber } from './bingoNumber';
import { IbingoDictionairy } from './IbingoDictionairy';
import { UKCockneyBingoDictionairy } from './UKCockneyBingoDictionairy';
import { IbingoGame, bingoGame } from './bingoGame';
import { bingoSlangType } from './bingoSlangType';
import { gameSizeType } from './gameSizeType';

export interface IbingoCaller {
  listNumbersCalled(): Array<bingoNumber>;
  getNextNumber(): bingoNumber;
}

export class bingoCaller implements IbingoCaller {
  currentBingoGame: IbingoGame;
  constructor(bingoSlang: bingoSlangType, gameSize: gameSizeType) {
    //create game array of specified bingo dictionairy
    var bingoCallsDictionairy: IbingoDictionairy;

    switch (bingoSlang) {
      case bingoSlangType.CockneySlang1950s:
        bingoCallsDictionairy = new UKCockneyBingoDictionairy();
        break;
      case bingoSlangType.WorkSafe:
        throw new Error('bingoSlangType not implemented.');
        break;
      case bingoSlangType.Custom:
        throw new Error('bingoSlangType not implemented.');
        break;
      default:
        throw new Error('bingoSlangType not implemented.');
        break;
    }
    this.currentBingoGame = new bingoGame(gameSize, bingoCallsDictionairy);
  }

  listNumbersCalled(): bingoNumber[] {
    return this.currentBingoGame.numbersPlayed();
  }
  getNextNumber(): bingoNumber {
    return this.currentBingoGame.getNextNumber();
  }
}

