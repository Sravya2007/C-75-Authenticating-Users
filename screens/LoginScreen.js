import * as React from 'react'
import {Text, View, StyleSheet, Button, TouchableOpacity, Image, TextInput, KeyboardAvoidingView} from 'react-native';
import * as firebase from 'firebase';
import TransactionScreen from './BookTransactionScreen';

export default class LoginScreen extends React.Component {
    constructor() {
        super();
        this.state = {
            emailId: '',
            password: ''
        }
    }

    login = async(email, password) =>{
        if(email && password) {
            try {
                const response = await firebase.auth().signInWithEmailAndPassword(email, password)
                if(response) {
                    this.props.navigation.navigate('Transaction')
                }
            }
            catch(error) {
                console.log(error.code);
                switch(error.code) {
                    case 'auth/user-not-found':
                        alert('User does not exist')
                        console.log('User does not exist')
                        break;
                    case 'auth/invalid-email':
                        alert('Incorrect email or password')
                        console.log('Invalid')
                        break;
                    case 'auth/invalid-password':
                        alert('Incorrect email or password')
                        console.log('Invalid')
                        break;
                    case 'auth/wrong-password':
                        alert('Incorrect email or password')
                        console.log('Invalid')
                        break;
                }
            }
        }
        else {
            alert('Enter email or password')
        }
    }

    render() {
        return(
            <KeyboardAvoidingView style = {{
                alignItems:'center',
                marginTop: 50
                }}>
                <View>
                    <Image
                    source = {require('../assets/booklogo.jpg')}
                    style = {{width: 200, height: 200}}/>
                    <Text style = {{
                        textAlign: 'center',
                        fontSize: 30
                    }}>Wily</Text>
                </View>
                <View>
                    <TextInput
                    style = {styles.loginBox}
                    placeholder = "abc@example.com"
                    keyboardType = "email-address"
                    onChangeText = {(text) => {
                        this.setState({
                            emailId: text
                        })
                    }}/>
                    <TextInput
                    style = {styles.loginBox}
                    secureTextEntry = {true}
                    placeholder = "Enter Password"
                    onChangeText = {(text) => {
                        this.setState({
                            password: text
                        })
                    }}/>
                </View>
                <View>
                    <TouchableOpacity style = {{
                        height: 40,
                        width: 100,
                        borderWidth: 1,
                        marginTop: 20,
                        paddingTop: 10,
                        borderRadius: 20,
                        backgroundColor: 'turquoise'
                    }}
                    onPress = {() =>{
                        this.login(this.state.emailId, this.state.password)
                    }}>
                        <Text style = {{
                            textAlign: 'center'
                        }}>Login</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    loginBox :{
        width: 300,
        height: 40,
        borderWidth: 1.5,
        fontSize: 20,
        margin: 10,
        paddingLeft: 10
    }
})