import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-paper';
import { bingoCaller } from '../services/bingoCaller';
import { bingoNumber } from '../services/bingoNumber';
import { bingoSlangType } from '../services/bingoSlangType';
import { gameSizeType } from '../services/gameSizeType';

export interface HomeProps {
}

export interface HomeState {
  currentNumber: bingoNumber | undefined,
  numbersPlayed: Array<bingoNumber> | undefined
}

export default class HomeComponent extends React.Component<HomeProps, HomeState> {
  myBingoGame: bingoCaller
  constructor(props: HomeProps) {
    super(props);
    this.myBingoGame = new bingoCaller(bingoSlangType.CockneySlang1950s, gameSizeType.UKNinety);
    this.state = {
      currentNumber: undefined,
      numbersPlayed: undefined
    };
  }

  test() {
    //this.myBingoGame = new bingoCaller(bingoSlangType.CockneySlang1950s, gameSizeType.UKNinety);
    var nextNumber = this.myBingoGame.getNextNumber();
    //var nextNumber = new bingoNumber({numberToBeCalled:1, amusingSlang:'slang', explaination:'some explaination', hasNumberBeenCalled:false})
    this.setState({ currentNumber: nextNumber });
    var numbersCalled = this.myBingoGame.listNumbersCalled();
    this.setState({ numbersPlayed: numbersCalled });
  }

  public render() {
    return (
      <View>
        <Text style={{ paddingTop: 200 }}>Home Component</Text>
        <Button onPress={() => { this.test() }}>Get number!!!!!</Button>
        <Text>{this.state.currentNumber?.numberToBeCalled}</Text>
        <Text>{this.state.currentNumber?.amusingSlang}</Text>
        <Text>{this.state.currentNumber?.explaination}</Text>
        <Text>TEST!!!</Text>
        <Text>{this.state.numbersPlayed?.map((i) => { i.numberToBeCalled })}</Text>
      </View>
    );
  }
}
