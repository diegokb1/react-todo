import firebase from 'firebase';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyCKQVidJcjgamQoM1xV-clQLN4qdw1qOfA',
  authDomain: 'todo-app-44702.firebaseapp.com',
  databaseURL: 'https://todo-app-44702.firebaseio.com',
  projectId: 'todo-app-44702',
  storageBucket: 'todo-app-44702.appspot.com',
  messagingSenderId: '949399823097',
  appId: '1:949399823097:web:bd74751b358480a231f828'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const firebaseRef = firebase.database().ref();

firebaseRef.set({
  app: {
    name: 'TodoApp',
    version: '1.0.0'
  },
  isRunning: true,
  user: {
    name: 'Diego',
    age: 30
  }
});

const todosRef = firebaseRef.child('todos');

todosRef.on('child_added', snapshot => {
  console.log('child_added', snapshot.key, snapshot.val());
})

todosRef.push({
  text: 'Walk the dog!!'
});

todosRef.push({
  text: 'Watch tv'
});

