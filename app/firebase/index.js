import firebase from 'firebase';

try {
  const firebaseConfig = {
    apiKey: 'AIzaSyCKQVidJcjgamQoM1xV-clQLN4qdw1qOfA',
    authDomain: 'todo-app-44702.firebaseapp.com',
    databaseURL: 'https://todo-app-44702.firebaseio.com',
    projectId: 'todo-app-44702',
    storageBucket: 'todo-app-44702.appspot.com',
    messagingSenderId: '949399823097',
    appId: '1:949399823097:web:bd74751b358480a231f828'
  };
  
  firebase.initializeApp(firebaseConfig);
} catch (e) {

}

export const firebaseRef = firebase.database().ref();
export default firebase;
