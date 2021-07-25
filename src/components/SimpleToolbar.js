import React from 'react';
import {Text, View, StyleSheet, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {Colors} from '../utils/Colors';

const SimpleToolbar = ({title, getShow}) => {
  return (
    <View style={styles.toolbar}>
      <Text style={styles.title}>{title}</Text>
      <Pressable onPress={() => getShow()}>
        <Icon name="filter" size={20} color={Colors.black} />
      </Pressable>
    </View>
  );
};

export default SimpleToolbar;

const styles = StyleSheet.create({
  toolbar: {
    height: 56,
    backgroundColor: Colors.white,
    elevation: 3,
    shadowColor: Colors.black,
    shadowOpacity: 0.3,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 20,
    color: Colors.black,
    fontWeight: '700',
  },
});
