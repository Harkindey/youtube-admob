import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TabNavigator} from 'react-navigation';
import AboutScreen from './src/AboutScreen';
import VideoScreen from './src/VideoScreen';
import WEBVIEW from './src/WebView'

const MainNavigator = TabNavigator({
  Home : { screen: WEBVIEW },
  About : { screen: AboutScreen }
},{
  navigationOptions: {
    tabBarVisible: false
  }
})

export default class App extends React.Component {
  render() {
    return (
          <MainNavigator />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#324323',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
