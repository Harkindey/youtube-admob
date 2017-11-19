import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator} from 'react-navigation';
import AboutScreen from './src/AboutScreen';
import VideoScreen from './src/VideoScreen';
import WEBVIEW from './src/WebView'

const MainNavigator = StackNavigator({
  Home : { screen: VideoScreen },
  WebView : { screen: WEBVIEW }
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
