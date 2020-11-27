import * as React from 'react'
import {Text, View, StyleSheet, Button, TouchableOpacity} from 'react-native';

export default class TransactionScreen extends React.Component {
    render() {
        return (
            <Text style = {{
                alignSelf: 'center',
                marginTop: 200
            }}>Issue or Return</Text>
        );
    }
}