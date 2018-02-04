import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, CardSection, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    state = { loggedIn: null };
    componentWillMount() {
        firebase.initializeApp({
                apiKey: "AIzaSyBkvMJEQw5tbEUo_etYW6RBsnG41H-NfCs",
                authDomain: "auth-5395c.firebaseapp.com",
                databaseURL: "https://auth-5395c.firebaseio.com",
                projectId: "auth-5395c",
                storageBucket: "auth-5395c.appspot.com",
                messagingSenderId: "232366328797"
                          
        });

        firebase.auth().onAuthStateChanged( (user) => {
            if(user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
        });
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return (
                    <CardSection>
                        <Button onPress={() => firebase.auth().signOut()}>
                            Log out
                        </Button>
                    </CardSection>
                );
            case false:
                return <LoginForm />;
            default:
                return (
                    <CardSection>
                        <Spinner size="large" />
                    </CardSection>
                );

        }
    }

    render () {
        return (
            <View>
                <Header headerText="Authentication" />
                {this.renderContent()}            
            </View>
        );
    }
}

export default App;
