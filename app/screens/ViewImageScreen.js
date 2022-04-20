import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

import colors from '../config/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons'

function ViewImageScreen(props) {
    return (
        <View style={styles.container}>
            <MaterialCommunityIcons style={styles.closeIcon} name="close" color="white" size={35} />
            <MaterialCommunityIcons style={styles.deleteIcon} name="trash-can-outline" color="white" size={35} />
            <Image
                resizeMode="contain"
                style={styles.image}
                source={require("../assets/chair.jpg")} />
        </View>
    );
}

const styles = StyleSheet.create({
    closeIcon: {
        position: 'absolute',
        top: 40,
        left: 30,
    },
    container: {
        flex: 1,
        backgroundColor: colors.black
    },
    deleteIcon: {
        top: 40,
        right: 30,
        position: 'absolute'
    },
    image: {
        width: '100%',
        height: '100%',
    }
})

export default ViewImageScreen;