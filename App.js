import React from 'react';
import Expo,{ Notifications } from 'expo';
import { StyleSheet, Text, View, Alert } from 'react-native';
import { StackNavigator} from 'react-navigation';
import AboutScreen from './src/AboutScreen';
import VideoScreen from './src/VideoScreen';
import WEBVIEW from './src/WebView'
import registerForNotifications from './services/push_notifications';

const MainNavigator = StackNavigator({
  Home : { screen: VideoScreen },
  WebView : { screen: WEBVIEW }
})

export default class App extends React.Component {
  componentDidMount() {
    registerForNotifications();
    Notifications.addListener((notification) => {
      const { data: { text }, origin} = notification;

      if(origin === 'recieved' && text){
        Alert.alert(
          'Dharianwale kirtan online',
          text,
          [{ text: 'OK.' }]
        );
      }
    });
  }
  
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
