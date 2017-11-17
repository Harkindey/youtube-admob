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
        const video = {
            0:{
            "title":'9ICE-Photocopy(Official Version- Naija Beats)',
            "imageurl": 'http://facebook.github.io/react/img/logo_og.png',
            "duration": '4:22',
            "id" : 'xsX1scbJnDc'
          },
          1:{
              "title":'9ICE-Photocopy(Official Version- Naija Beats)',
              "imageurl": 'http://facebook.github.io/react/img/logo_og.png',
              "duration": '4:22',
              "id" : 'xsX1scbJnDc'
          }};
          return video
      }
  }