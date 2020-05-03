import { IbingoDictionairy, Dictionary } from './IbingoDictionairy';
import { bingoNumber } from './bingoNumber';

export class UKCockneyBingoDictionairy implements IbingoDictionairy {
  bingoNumbers: Dictionary = [];

  constructor() {
    this.bingoNumbers = {
      1: new bingoNumber({
        numberToBeCalled: 1, amusingSlang: 'Kelly\s Eye', explaination: 'The pun is military slang; possibly a reference to Ned Kelly, from Ned Kelly\'s helmet, the eye slot resembling the number 1. Also after the Valiant comic strip "Kelly\'s Eye" where the eponymous Kelly possessed a magic amulet.'
      , hasNumberBeenCalled: false}),
      2: new bingoNumber({ numberToBeCalled: 2, amusingSlang: 'One little duck.', explaination: 'From the resemblance of the number 2 to a duck' , hasNumberBeenCalled: false}),
      3: new bingoNumber({ numberToBeCalled: 3, amusingSlang: 'Cup of tea', explaination: 'Rhymes with "Three"' , hasNumberBeenCalled: false}),
      4: new bingoNumber({ numberToBeCalled: 4, amusingSlang: 'Knock at the door', explaination: 'Rhymes with "Four"' , hasNumberBeenCalled: false}),
      5: new bingoNumber({ numberToBeCalled: 5, amusingSlang: 'Man alive', explaination: 'Rhymes with "Five"' , hasNumberBeenCalled: false}),
      6: new bingoNumber({ numberToBeCalled: 6, amusingSlang: 'Tom Mix', explaination: 'Rhymes with "Six". After Tom Mix, a star of silent-era Westerns' , hasNumberBeenCalled: false}),
      7: new bingoNumber({ numberToBeCalled: 7, amusingSlang: 'Lucky', explaination: '7 is considered a lucky number in some cultures' , hasNumberBeenCalled: false}),
      8: new bingoNumber({ numberToBeCalled: 8, amusingSlang: 'Garden gate', explaination: 'Rhymes with "Eight"' , hasNumberBeenCalled: false}),
      9: new bingoNumber({
        numberToBeCalled: 9, amusingSlang: 'Doctor\'s Orders', explaination: 'Number 9 was a laxative pill given out by army doctors in WWII.'
      , hasNumberBeenCalled: false}),
      10: new bingoNumber({ numberToBeCalled: 10, amusingSlang: '(Boris\'s) Den', explaination: 'The name refers to whoever currently resides at Number 10 Downing Street.' , hasNumberBeenCalled: false}),
      11: new bingoNumber({ numberToBeCalled: 11, amusingSlang: 'Legs eleven', explaination: 'A reference to the shape of the number resembling a pair of legs, often chicken legs specifically. The players often wolf whistle in response.' , hasNumberBeenCalled: false}),
      12: new bingoNumber({ numberToBeCalled: 12, amusingSlang: 'One dozen', explaination: 'A reference to there being 12 units in one dozen.' , hasNumberBeenCalled: false}),
      13: new bingoNumber({ numberToBeCalled: 13, amusingSlang: 'Unlucky for some', explaination: 'A reference to 13 being an unlucky number.' , hasNumberBeenCalled: false}),
      14: new bingoNumber({ numberToBeCalled: 14, amusingSlang: 'The Lawnmower', explaination: 'The original lawnmower had a 14-inch blade.' , hasNumberBeenCalled: false}),
      15: new bingoNumber({ numberToBeCalled: 15, amusingSlang: 'Young and Keen', explaination: 'Fifteen rhymes with keen' , hasNumberBeenCalled: false}),
      16: new bingoNumber({ numberToBeCalled: 16, amusingSlang: 'Never been kissed', explaination: 'After the song Sweet Sixteen and Never Been Kissed' , hasNumberBeenCalled: false}),
      17: new bingoNumber({
        numberToBeCalled: 17, amusingSlang: 'Dancing Queen', explaination: 'ABBA\'s song Dancing Queen has the number mentioned in the lyrics.'
      , hasNumberBeenCalled: false}),
      18: new bingoNumber({ numberToBeCalled: 18, amusingSlang: 'Coming of Age', explaination: 'Eighteen is the age of maturity in the UK.' , hasNumberBeenCalled: false}),
      19: new bingoNumber({ numberToBeCalled: 19, amusingSlang: 'Goodbye Teens', explaination: 'Nineteen is the age after which people stop being teenagers.' , hasNumberBeenCalled: false}),
      20: new bingoNumber({ numberToBeCalled: 20, amusingSlang: 'Getting Plenty', explaination: 'Rhymes with "Twenty"' , hasNumberBeenCalled: false}),
      21: new bingoNumber({ numberToBeCalled: 21, amusingSlang: 'Key of the Door', explaination: 'The traditional age of majority.' , hasNumberBeenCalled: false}),
      22: new bingoNumber({ numberToBeCalled: 22, amusingSlang: 'Two little ducks', explaination: 'The numeral 22 resembles the profile of two ducks. Response is often "quack, quack, quack".' , hasNumberBeenCalled: false}),
      23: new bingoNumber({ numberToBeCalled: 23, amusingSlang: 'The Lord is My Shepherd', explaination: 'The first words of Psalm 23 of the Old Testament' , hasNumberBeenCalled: false}),
      24: new bingoNumber({ numberToBeCalled: 24, amusingSlang: 'Double dozen', explaination: '12 × 2 = 24. Refer to 12 above' , hasNumberBeenCalled: false}),
      25: new bingoNumber({ numberToBeCalled: 25, amusingSlang: 'Duck and dive', explaination: 'Rhymes with "(Twenty) Five", and is made up of a "2" - resembles a duck, and a "5" - resembles an upside-down "2".' , hasNumberBeenCalled: false}),
      26: new bingoNumber({ numberToBeCalled: 26, amusingSlang: 'Two and six, half a crown', explaination: 'Pre-decimalised currency in the UK. (See half crown)' , hasNumberBeenCalled: false}),
      27: new bingoNumber({ numberToBeCalled: 27, amusingSlang: 'Duck and a crutch.', explaination: 'The number 2 looks like a duck' , hasNumberBeenCalled: false}),
      28: new bingoNumber({ numberToBeCalled: 28, amusingSlang: 'In a state.', explaination: '"Two and eight" is rhyming slang for "state".' , hasNumberBeenCalled: false}),
      29: new bingoNumber({ numberToBeCalled: 29, amusingSlang: 'Rise and Shine', explaination: 'Rhymes with "(Twenty) Nine"' , hasNumberBeenCalled: false}),
      30: new bingoNumber({ numberToBeCalled: 30, amusingSlang: 'Dirty Gertie', explaination: 'Common rhyme derived from the given name Gertrude, used as a nickname for the statue La Delivrance installed in North London in 1927. The usage was reinforced by Dirty Gertie from Bizerte, a bawdy song sung by Allied soldiers in North Africa during the Second World War.' , hasNumberBeenCalled: false}),
      31: new bingoNumber({ numberToBeCalled: 31, amusingSlang: 'Get Up and Run', explaination: 'Rhymes with "(Thirty) One"' , hasNumberBeenCalled: false}),
      32: new bingoNumber({ numberToBeCalled: 32, amusingSlang: 'Buckle My Shoe', explaination: 'Rhymes with "(Thirty) Two"' , hasNumberBeenCalled: false}),
      33: new bingoNumber({ numberToBeCalled: 33, amusingSlang: 'Fish, chips and peas', explaination: ' ' , hasNumberBeenCalled: false}),
      34: new bingoNumber({ numberToBeCalled: 34, amusingSlang: 'Ask for More', explaination: 'Rhymes with "(Thirty) Four"' , hasNumberBeenCalled: false}),
      35: new bingoNumber({ numberToBeCalled: 35, amusingSlang: 'Jump and Jive', explaination: 'A dance step' , hasNumberBeenCalled: false}),
      36: new bingoNumber({ numberToBeCalled: 36, amusingSlang: 'Triple dozen', explaination: '3 x 12 = 36. Refer to 12 above' , hasNumberBeenCalled: false}),
      37: new bingoNumber({ numberToBeCalled: 37, amusingSlang: '', explaination: '' , hasNumberBeenCalled: false}),
      38: new bingoNumber({ numberToBeCalled: 38, amusingSlang: 'Christmas cake', explaination: 'Cockney rhyming slang' , hasNumberBeenCalled: false}),
      39: new bingoNumber({ numberToBeCalled: 39, amusingSlang: 'Steps', explaination: 'From the 39 Steps' , hasNumberBeenCalled: false}),
      40: new bingoNumber({ numberToBeCalled: 40, amusingSlang: 'Life Begins', explaination: 'refers to the proverb \'life begins at forty\'' , hasNumberBeenCalled: false}),
      41: new bingoNumber({ numberToBeCalled: 41, amusingSlang: '', explaination: '' , hasNumberBeenCalled: false}),
      42: new bingoNumber({ numberToBeCalled: 42, amusingSlang: '', explaination: '' , hasNumberBeenCalled: false}),
      43: new bingoNumber({ numberToBeCalled: 43, amusingSlang: 'down on your knees', explaination: 'This was a phrase that was made popular during wartime by soldiers.' , hasNumberBeenCalled: false}),
      44: new bingoNumber({ numberToBeCalled: 44, amusingSlang: 'Droopy drawers', explaination: 'Rhyme that refers to sagging trousers.[citation neede' , hasNumberBeenCalled: false}),
      45: new bingoNumber({ numberToBeCalled: 45, amusingSlang: 'Halfway there', explaination: 'Being halfway towards 90' , hasNumberBeenCalled: false}),
      46: new bingoNumber({ numberToBeCalled: 46, amusingSlang: 'up to tricks', explaination: 'rhyming' , hasNumberBeenCalled: false}),
      47: new bingoNumber({ numberToBeCalled: 47, amusingSlang: '', explaination: '' , hasNumberBeenCalled: false}),
      48: new bingoNumber({ numberToBeCalled: 48, amusingSlang: 'Four Dozen', explaination: '4 x 12 = 48. Refer to 12 above.' , hasNumberBeenCalled: false}),
      49: new bingoNumber({ numberToBeCalled: 49, amusingSlang: '', explaination: '' , hasNumberBeenCalled: false}),
      50: new bingoNumber({
        numberToBeCalled: 50, amusingSlang: 'It\'s a bullseye!', explaination: 'Referring to the darts score.'
      , hasNumberBeenCalled: false}),
      51: new bingoNumber({ numberToBeCalled: 51, amusingSlang: '', explaination: '' , hasNumberBeenCalled: false}),
      52: new bingoNumber({ numberToBeCalled: 52, amusingSlang: 'Chicken vindaloo', explaination: 'Introduced by Butlins in 2003.' , hasNumberBeenCalled: false}),
      53: new bingoNumber({ numberToBeCalled: 53, amusingSlang: 'Here comes Herbie', explaination: '53 is the racing number of Herbie the VW Beetle. Players may reply "beep beep"!' , hasNumberBeenCalled: false}),
      54: new bingoNumber({ numberToBeCalled: 54, amusingSlang: 'Man at the door', explaination: 'Rhymes with "(Fifty) Four"' , hasNumberBeenCalled: false}),
      55: new bingoNumber({ numberToBeCalled: 55, amusingSlang: 'All the fives', explaination: ' ' , hasNumberBeenCalled: false}),
      56: new bingoNumber({ numberToBeCalled: 56, amusingSlang: 'Shotts Bus', explaination: 'Refers to the former number of the bus from Glasgow to Shotts.' , hasNumberBeenCalled: false}),
      57: new bingoNumber({ numberToBeCalled: 57, amusingSlang: 'Heinz Varieties', explaination: 'Refers to "Heinz 57", the "57 Varieties" slogan of the H. J. Heinz Company.' , hasNumberBeenCalled: false}),
      58: new bingoNumber({ numberToBeCalled: 58, amusingSlang: '', explaination: '' , hasNumberBeenCalled: false}),
      59: new bingoNumber({ numberToBeCalled: 59, amusingSlang: 'The Brighton Line', explaination: 'Quote from The Importance of Being Earnest.' , hasNumberBeenCalled: false}),
      60: new bingoNumber({
        numberToBeCalled: 60, amusingSlang: 'Grandma\'s getting frisky', explaination: 'Pretty close to a rhyme with \'sixty\''
      , hasNumberBeenCalled: false}),
      61: new bingoNumber({ numberToBeCalled: 61, amusingSlang: '', explaination: '' , hasNumberBeenCalled: false}),
      62: new bingoNumber({ numberToBeCalled: 62, amusingSlang: 'Tickety-boo', explaination: 'Rhymes with "(Sixty) Two"' , hasNumberBeenCalled: false}),
      63: new bingoNumber({ numberToBeCalled: 63, amusingSlang: '', explaination: '' , hasNumberBeenCalled: false}),
      64: new bingoNumber({ numberToBeCalled: 64, amusingSlang: 'Almost retired', explaination: 'A reference to the former British male age of mandatory retirement - specifically being one year away from it.' , hasNumberBeenCalled: false}),
      65: new bingoNumber({ numberToBeCalled: 65, amusingSlang: 'Retirement age, Stop work', explaination: 'A reference to the former male British age of mandatory retirement.' , hasNumberBeenCalled: false}),
      66: new bingoNumber({ numberToBeCalled: 66, amusingSlang: 'Clickety click', explaination: 'Rhymes with "(Sixty) Six"' , hasNumberBeenCalled: false}),
      67: new bingoNumber({ numberToBeCalled: 67, amusingSlang: 'Stairway to Heaven', explaination: 'Coined by Andrew "CIP" Lavelle' , hasNumberBeenCalled: false}),
      68: new bingoNumber({ numberToBeCalled: 68, amusingSlang: 'Pick a Mate', explaination: 'Coined by Edward James Mackey II' , hasNumberBeenCalled: false}),
      69: new bingoNumber({ numberToBeCalled: 69, amusingSlang: 'Anyway up, Meal for Two, A Favourite of mine', explaination: 'A reference to the 69 sex position.' , hasNumberBeenCalled: false}),
      70: new bingoNumber({ numberToBeCalled: 70, amusingSlang: '', explaination: '' , hasNumberBeenCalled: false}),
      71: new bingoNumber({ numberToBeCalled: 71, amusingSlang: 'Bang on the Drum', explaination: 'Rhymes with "(Seventy) One"' , hasNumberBeenCalled: false}),
      72: new bingoNumber({ numberToBeCalled: 72, amusingSlang: 'Danny La Rue', explaination: 'Rhymes with "(Seventy) Two"' , hasNumberBeenCalled: false}),
      73: new bingoNumber({ numberToBeCalled: 73, amusingSlang: 'Queen Bee. Under The Tree. Lucky 3', explaination: 'Rhymes with "(Seventy) Three"' , hasNumberBeenCalled: false}),
      74: new bingoNumber({ numberToBeCalled: 74, amusingSlang: 'Hit the Floor', explaination: 'Coined by Ann Fitzsimons' , hasNumberBeenCalled: false}),
      75: new bingoNumber({ numberToBeCalled: 75, amusingSlang: '', explaination: '' , hasNumberBeenCalled: false}),
      76: new bingoNumber({ numberToBeCalled: 76, amusingSlang: 'Trombones', explaination: '"Seventy-Six Trombones" is a popular marching song, from the musical The Music Man.' , hasNumberBeenCalled: false}),
      77: new bingoNumber({ numberToBeCalled: 77, amusingSlang: 'Two little crutches', explaination: ' ' , hasNumberBeenCalled: false}),
      78: new bingoNumber({ numberToBeCalled: 78, amusingSlang: '39 more steps', explaination: '39 + 39 = 78. Refer to 39 being "39 steps" above.' , hasNumberBeenCalled: false}),
      79: new bingoNumber({ numberToBeCalled: 79, amusingSlang: '', explaination: '' , hasNumberBeenCalled: false}),
      80: new bingoNumber({
        numberToBeCalled: 80, amusingSlang: 'Gandhi\'s Breakfast', explaination: '"Ate nothing"'
      , hasNumberBeenCalled: false}),
      81: new bingoNumber({ numberToBeCalled: 81, amusingSlang: 'Fat Lady with a walking stick', explaination: 'The number 8 is supposed to visually represent a lady with ample bosom and hips, while the number 1 is supposed to visually represent a walking stick' , hasNumberBeenCalled: false}),
      82: new bingoNumber({
        numberToBeCalled: 82, amusingSlang: 'I\'m gonna get more right than you', explaination: 'Coined by The Dark Destroyer, Shaun Wallace, on the Gala Bingo adverts sponsoring the UK game show The Chase'
      , hasNumberBeenCalled: false}),
      83: new bingoNumber({ numberToBeCalled: 83, amusingSlang: 'Time for Tea', explaination: 'Rhymes and scans' , hasNumberBeenCalled: false}),
      84: new bingoNumber({ numberToBeCalled: 84, amusingSlang: 'Seven dozen', explaination: '7 x 12 = 84. Refer to 12 being "a dozen" above' , hasNumberBeenCalled: false}),
      85: new bingoNumber({ numberToBeCalled: 85, amusingSlang: 'Staying alive', explaination: 'Rhymes with "(Eighty) Five"' , hasNumberBeenCalled: false}),
      86: new bingoNumber({ numberToBeCalled: 86, amusingSlang: 'Between the sticks', explaination: 'Rhymes with "(Eighty) Six". Refers to the position of goalkeeper in football.' , hasNumberBeenCalled: false}),
      87: new bingoNumber({ numberToBeCalled: 87, amusingSlang: 'Torquay in Devon', explaination: 'Rhymes with "(Eighty) Seven". Torquay which is in the county of Devon, rather than one of several other Torquays which were elsewhere in the British Empire.' , hasNumberBeenCalled: false}),
      88: new bingoNumber({ numberToBeCalled: 88, amusingSlang: 'Two Fat Ladies', explaination: 'The number 88 visually represents a lady next to another lady. Refer to 81 above. Players can reply with \'Wobble, wobble.\'' , hasNumberBeenCalled: false}),
      89: new bingoNumber({ numberToBeCalled: 89, amusingSlang: 'Nearly there', explaination: '89 is one away from 90 (the end of the bingo numbers).' , hasNumberBeenCalled: false}),
      90: new bingoNumber({ numberToBeCalled: 90, amusingSlang: 'Top of the shop', explaination: '90 is the highest(top) number in bingo.Shop refers to the entire game of bingo(and also rhymes with "top").' , hasNumberBeenCalled: false}),
    };
  }


}

