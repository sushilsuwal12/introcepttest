import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

import UserInputScreen from './screens/UserInputScreen'; 

export default function App() {

  return (
    <View style={styles.container}>
      <UserInputScreen />
    </View> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
