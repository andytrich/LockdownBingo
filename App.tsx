import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer, createSwitchNavigator, NavigationInjectedProps } from "react-navigation";
import HomeComponent from './screens/home';
import { AppLoading } from 'expo';
import { Provider as PaperProvider } from 'react-native-paper';


const AppStack = createStackNavigator({ Home: HomeComponent }, { headerMode: 'none' });
const Main = createAppContainer(
  createSwitchNavigator(
    {
      //AuthLoading: AuthLoadingComponent,
      App: AppStack,
      // Auth: AuthStack,
    },
    {
      initialRouteName: 'App',
    }
  )
);

//const AppContainer = createAppContainer(Main);

export interface AppProps {
}

export interface AppState {
  isReady: boolean
}

export default class App extends React.Component<NavigationInjectedProps<{}> & AppProps, AppState> {
  constructor(props: NavigationInjectedProps<{}> & AppProps) {
    super(props);
    this.state = {
      isReady: false,
    };
  }
  async componentDidMount() {
    this.setState({ isReady: true });
  }
  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }
    return (
      <PaperProvider>
        <Main></Main>
      </PaperProvider>
    );
  }
}