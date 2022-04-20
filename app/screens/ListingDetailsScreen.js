import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import AppText from '../components/AppText';
import colors from '../config/colors';
import ListItem from '../components/ListItem';

function ListingDetailsScreen(props) {
    return (
    <View>
        <Image style={styles.image} source={require("../assets/jacket.jpg")}></Image>
        <View style={styles.detailsContainer}>
            <AppText style={styles.title}>Red Jacket For Sale</AppText>
            <AppText style={styles.price}>$100</AppText>
            <View style={styles.userContainer}>
                <ListItem image={require("../assets/mosh.jpg")}
                        title="Saif Sheikh" subTitle="5 Listings" />
            </View>
        </View>
    </View>
    );
}

const styles = StyleSheet.create({
    detailsContainer: {
        padding: 20,
    },
    image: {
        width: "100%",
        height: 300
    },
    price: {
        color: colors.secondary,
        fontWeight: 'bold',
        fontSize: 20,
        marginVertical: 10
    },
    title: {
        fontWeight: "500",
        fontSize: 24

    },
    userContainer: {
        marginVertical: 50
    }
})

export default ListingDetailsScreen;