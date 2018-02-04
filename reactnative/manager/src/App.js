import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';
import Router from './Router';

class App extends Component {
    componentWillMount() {
        const config = {
            apiKey: 'AIzaSyAn6OL_PWP8Elux4_uAbe6lUPPed7Q7nec',
            authDomain: 'manager-df6e4.firebaseapp.com',
            databaseURL: 'https://manager-df6e4.firebaseio.com',
            projectId: 'manager-df6e4',
            storageBucket: 'manager-df6e4.appspot.com',
            messagingSenderId: '474187130030'
          };
          firebase.initializeApp(config);
    }
    
    render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    
    return (  
        <Provider store={store}>
            <Router />
        </Provider>
      );
    }
}
export default App;
