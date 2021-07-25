import React from 'react';
import {Text, View, StyleSheet, FlatList, Pressable} from 'react-native';
import {Colors} from '../utils/Colors';

const brands = ['Samsung', 'Apple', 'Xiaomi', 'Huawei', 'One Plus'];

const BrandFilter = props => {
  const renderItem = ({item}) => {
    return (
      <Pressable onPress={() => props.getBrand(item)}>
        <View style={styles.box}>
          <Text style={styles.text}>{item}</Text>
        </View>
      </Pressable>
    );
  };
  return (
    <View style={styles.main}>
      <Text style={styles.text}>Select a Phone Brand</Text>
      <View style={{flex: 1}}>
        <FlatList
          data={brands}
          renderItem={renderItem}
          keyExtractor={item => item}
          contentContainerStyle={{paddingTop: 50}}
        />
      </View>
    </View>
  );
};

export default BrandFilter;

const styles = StyleSheet.create({
  main: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.7)',
    zIndex: 9999,
    padding: 16,
  },
  box: {
    paddingVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: Colors.white,
    fontSize: 20,
    fontWeight: 'bold',
  },
});
