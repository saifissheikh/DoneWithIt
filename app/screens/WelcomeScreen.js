import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import AppButton from '../components/AppButton';

function WelcomeScreen(props) {
    return (
        <ImageBackground
        blurRadius={10}
        style={styles.background}
        source={require('../assets/background.jpg')}>
        <View style={styles.logoContainer}>
            <Image
                style={styles.logo}
                source={require('../assets/logo-red.png')} />
            <Text style={styles.tagLine}>Sell What You Don't Need</Text>
        </View>
       
        <View style={styles.buttonsContainer}>
            <AppButton title="Login" onPress={() => console.log('Tapped')}/>
            <AppButton title="Register" color="secondary" onPress={() => console.log('Tapped')}/>
        </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center"
    },
    buttonsContainer: {
        width: "100%",
        alignItems: "center",
        padding: 10
    },
    logo: {
        width: 100,
        height: 100,
    },
    logoContainer: {
        position: "absolute",
        top: 70,
        alignItems: "center"
    },
    tagLine: {
        fontSize: 25,
        fontWeight: "600",
        paddingVertical: 10
    }
})

export default WelcomeScreen;