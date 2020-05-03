import * as React from 'react';
import { View, StyleSheet, Text, ImageBackground } from 'react-native';
import { Button, Card, Title, Paragraph, Headline, Surface, Snackbar } from 'react-native-paper';
import { FAB } from 'react-native-paper';
import { bingoCaller } from '../services/bingoCaller';
import { bingoNumber } from '../services/bingoNumber';
import { bingoSlangType } from '../services/bingoSlangType';
import { gameSizeType } from '../services/gameSizeType';

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    alignSelf:'center',
    marginTop:630,
    backgroundColor: '#c92c54',
  },
  heading: {
    paddingTop: 70,
    paddingBottom: 25,
    fontSize: 35,
    textAlign: "center",
  },
  bingoBall: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center'
  },
  bingoBallNumber: {
    fontSize: 65,
    paddingTop: 50,

  },
  bingoCall: {
    elevation: 5,
    shadowOffset: { width: 5, height: 5 },
    shadowColor: "gray",
    shadowOpacity: 0.5,
    shadowRadius: 10,
    marginTop: 10,
    paddingBottom: 15,
    paddingTop: 15,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    alignItems: 'center'
  },
  explaination:{
    padding: 5,
    fontSize:18
  }
})

export interface HomeProps {
}

export interface HomeState {
  currentNumber: bingoNumber | undefined,
  numbersPlayed: Array<bingoNumber> | undefined
}

export default class HomeComponent extends React.Component<HomeProps, HomeState> {
  myBingoGame: bingoCaller | undefined
  constructor(props: HomeProps) {
    super(props);
    this.state = {
      currentNumber: undefined,
      numbersPlayed: undefined
    };
  }

  componentDidMount(){
    this.initGame();
  }

  private initGame() {
    this.myBingoGame = new bingoCaller(bingoSlangType.CockneySlang1950s, gameSizeType.UKNinety);
    this.GetNextNumber();
  }

  GetNextNumber() {
    var nextNumber = this.myBingoGame?.getNextNumber();
    this.setState({ currentNumber: nextNumber });
    var numbersCalled = this.myBingoGame?.listNumbersCalled();
    this.setState({ numbersPlayed: numbersCalled });
  }

  BallNumber = ()=>{
    return(
    <Title style={styles.bingoBallNumber}>{this.state.currentNumber?.numberToBeCalled ?? 'Press to start'}</Title>
    );
  }

  public render() {
    return (
      <View>
        <FAB
          style={styles.fab}
          label='Start a new Game'
          small
          icon="plus"
          onPress={() => {this.initGame();}}
        />
        <Headline style={styles.heading}>It's Bingo Night</Headline>
        <Card onPress={() => { this.GetNextNumber() }} >
          <Card.Content style={{ height: 220 }}>
            <ImageBackground source={require('../assets/BingoBall.gif')} style={{ width: 200, height: 200, alignContent: 'center', alignSelf: 'center', alignItems: 'center' }}>
              <View style={styles.bingoBall}>
                {this.BallNumber()}
              </View>
            </ImageBackground>
            <Surface style={styles.bingoCall}>
              <Headline >{this.state.currentNumber?.amusingSlang}</Headline>
            </Surface>
            <Surface style={styles.bingoCall}>
              <Paragraph style={styles.explaination}>{this.state.currentNumber?.explaination}</Paragraph>
            </Surface>
            <Surface style={{...styles.bingoCall, ...{flexDirection: 'row', flexWrap:'wrap'}} }>
              {this.state.numbersPlayed?.map((i, k) => (<Text key={k}>{i.numberToBeCalled}, </Text>))}
            </Surface>
          </Card.Content>
        </Card>

      </View>
    );
  }
}
