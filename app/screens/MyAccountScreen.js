import React from 'react';
import ListItem from '../components/ListItem';
import Screen from '../components/Screen';

function MyAccountScreen(props) {
    return (
        <Screen>
            <ListItem image={require("../assets/mosh.jpg")} title="Saif Sheikh" subTitle="saifisshaik@gmail.com" />
        </Screen>
    );
}

const styles = StyleSheet.create({
    
})

export default MyAccountScreen;