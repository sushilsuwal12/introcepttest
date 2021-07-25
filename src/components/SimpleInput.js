import React from 'react';
import {Text, View, StyleSheet, TextInput} from 'react-native';
import {Colors} from '../utils/Colors';

const SimpleInput = props => {
  return (
    <View style={{marginBottom: 10}}>
      <Text style={styles.label}>{props.label}</Text>
      <View style={{height: 2}} />
      <View style={styles.box}>
        <TextInput
          {...props}
          style={styles.input}
          underlineColorAndroid="transparent"
        />
      </View>
    </View>
  );
};

export default SimpleInput;

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    color: Colors.grayColor,
    lineHeight: 24,
  },
  box: {
    height: 50,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: Colors.borderColor,
    borderRadius: 4,
    justifyContent: 'center',
  },
  input: {
    flex: 1,
    padding: 0,
    margin: 0,
    fontSize: 18,
  },
});
