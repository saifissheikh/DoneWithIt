import React from 'react';
import { View } from 'react-native';

import Card from './app/components/Card';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import MyAccountScreen from './app/screens/MyAccountScreen';

export default function App() {
  return (

      <MyAccountScreen />
      // <View style={{
      //   backgroundColor: '#f8f4f4',
      //   padding: 20,
      //   paddingTop: 100
      // }}>
      //   <Card
      //   image={require('./app/assets/jacket.jpg')}
      //   title="Red Jacket For Sale"
      //   subtitle="$100"
      //   ></Card>
      // </View>

  );
}
