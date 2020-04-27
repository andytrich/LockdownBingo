import { bingoNumber } from './bingoNumber';
import { IbingoDictionairy } from './IbingoDictionairy';
import { gameSizeType } from './gameSizeType';

export interface IbingoGame {
  bingoNumbers: Array<bingoNumber>;
  getNextNumber(): bingoNumber;
  numbersPlayed(): Array<bingoNumber>;
}

export class bingoGame implements IbingoGame {
  bingoNumbers: Array<bingoNumber> = [];

  constructor(gameSize: gameSizeType, bingoDictionairy: IbingoDictionairy) {

    //set game size 
    switch (gameSize) {
      case gameSizeType.UKNinety:
        this.bingoNumbers = new Array<bingoNumber>(90);
        break;
      case gameSizeType.USSeventyFive:
        this.bingoNumbers = new Array<bingoNumber>(75);
        break;
      default:
        this.bingoNumbers = new Array<bingoNumber>(90);
        break;
    }

    //fill up the game board with numbers of the appropriate bingo calls
    for (let index = 0; index < this.bingoNumbers.length; index++) {
      this.bingoNumbers[index] = bingoDictionairy.bingoNumbers[index + 1];
    }
  }
  getNextNumber(): bingoNumber {
    //select a bingo number and mark it as used
    var numbersLeftToPlay = this.bingoNumbers.filter(x => x.hasNumberBeenCalled == false);
    var randomSelection = Math.floor(Math.random() * numbersLeftToPlay.length);
    var selectedNumber = numbersLeftToPlay[randomSelection];
    selectedNumber.hasNumberBeenCalled = true;
    var x = this.numbersPlayed();
    return selectedNumber;
  }
  numbersPlayed(): Array<bingoNumber> {
    return this.bingoNumbers.filter(x => x.hasNumberBeenCalled == true);
  }
}

