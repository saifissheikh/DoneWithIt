import React from 'react';
import { Image, StyleSheet, View, TouchableHighlight } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import colors from '../config/colors';
import AppText from './AppText';

function ListItem({image, title, subTitle, onPress, renderRightActions}) {
    return (
        <Swipeable renderRightActions={renderRightActions}>
            <TouchableHighlight onPress={onPress} underlayColor={colors.light}>
                <View style={styles.container}>
                <Image source={image} style={styles.image}></Image>
                <View>
                    <AppText style={styles.title}>{title}</AppText>
                    <AppText style={styles.subTitle}>{subTitle}</AppText>
                </View>
                </View>
            </TouchableHighlight>
        </Swipeable>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        padding: 15
    },
    image: {
        borderRadius: 35,
        marginRight: 10,
        width: 70,
        height: 70
    },
    title: {
        fontWeight: "500"
    },
    subTitle: {
        color: colors.medium
    }
})

export default ListItem;