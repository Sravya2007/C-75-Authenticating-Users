import * as React from 'react'
import {Text, View, StyleSheet, Button, TouchableOpacity} from 'react-native';
import * as Permissions from 'expo-permissions';
import {BarCodeScanner} from 'expo-barcode-scanner';

export default class TransactionScreen extends React.Component {
    constructor() {
        super();
        this.state = {
            hasCameraPermissions: null,
            scanned: false,
            scannedData: '',
            buttonState: 'normal'
        }
    }

    getCameraPermission = async() => {
        const {status} = await Permissions.askAsync(Permissions.CAMERA)
        //gives true if user has granted permission false if user has not granted permission
        this.setState({
            hasCameraPermissions: status === 'granted',
            scanned: false,
            buttonState: 'clicked'
        })
    }

    handleBarcodeScanned = async({type, data}) => {
        this.setState({
            scanned: true,
            scannedData: data,
            buttonState: 'normal'
        })
    }

    render() {
        const hasCameraPermissions = this.state.hasCameraPermissions;
        const scanned = this.state.scanned;
        const buttonState = this.state.buttonState;
        if(buttonState === 'clicked' && hasCameraPermissions) {
            return (
                <BarCodeScanner onBarCodeScanned = {scanned ? undefined : this.handleBarcodeScanned}
                style = {StyleSheet.absoluteFillObject}/>
            );
        } else if(buttonState === 'normal'){
            return (
                <View style = {styles.container}>
                <Text style = {styles.displayText}>{hasCameraPermissions === true ? this.state.scannedData : "Request camera permission"}</Text>

                <TouchableOpacity style = {styles.scanButton} onPress = {this.getCameraPermission}>
                    <Text style = {styles.buttonText}>Scan QR Code</Text>
                </TouchableOpacity>
                </View>
            );
        }
    }
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    displayText: {
        fontSize: 15,
        textDecorationLine: 'underline'
    },
    scanButton: {
        backgroundColor: 'red',
        padding: 10,
        margin: 10
    }
})