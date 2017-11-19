import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCGziM8ZF5AUvrJKPy2gB5Y5Hm2fSYa-SM",
    authDomain: "ads-186107.firebaseapp.com",
    databaseURL: "https://ads-186107.firebaseio.com",
    projectId: "youtubeads-186107",
    storageBucket: "youtubeads-186107.appspot.com",
    messagingSenderId: "796180200883"
  };
  firebase.initializeApp(config);

  module.exports = {
      getVideos : () => {
        firebase.database().ref('/students/')
        .once('value', snapshot => {
          return snapshot;
        })
      }
  }