import React from 'react';
import {Text, View, StyleSheet, Pressable} from 'react-native';
import {Navigation} from 'react-native-navigation';
import Icon from 'react-native-vector-icons/AntDesign';
import {Colors} from '../utils/Colors';

const BackToolbar = ({title, componentId}) => {
  const goBack = () => {
    Navigation.pop(componentId);
  };
  return (
    <View style={styles.toolbar}>
      <Pressable onPress={goBack}>
        <Icon name="arrowleft" size={20} color={Colors.black} />
      </Pressable>
      <View style={{width: 30}} />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default BackToolbar;

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
  },
  title: {
    fontSize: 20,
    color: Colors.black,
    fontWeight: '700',
  },
});
