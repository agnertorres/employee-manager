import React, { Component } from 'react';
import { View , Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from '@firebase/app';
import reducers from './reducers';

class App extends Component {

  componentWillMount() {
    const config = {
      apiKey: "AIzaSyDYYi5zSp6Mpbr51Z5V7D9msZsWQiQVjnA",
      authDomain: "manager-b9f6d.firebaseapp.com",
      databaseURL: "https://manager-b9f6d.firebaseio.com",
      projectId: "manager-b9f6d",
      storageBucket: "manager-b9f6d.appspot.com",
      messagingSenderId: "508544189345"
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Text>Hello</Text>
        </View>
      </Provider>
    );
  }
}

export default App;