import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  FlatList,
  Pressable,
} from 'react-native';
import {Navigation} from 'react-native-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useDispatch, useSelector} from 'react-redux';
import BrandFilter from '../components/BrandFilter';
import SimpleToolbar from '../components/SimpleToolbar';
import {deleteItem, filterPhone} from '../redux/actions/phoneAction';
import {Colors} from '../utils/Colors';

const HomeScreen = props => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const phones = useSelector(state => state.phone.phones);
  const goToForm = () => {
    Navigation.push(props.componentId, {
      component: {
        name: 'form',
      },
    });
  };

  const getBrand = brand => {
    dispatch(filterPhone(brand));
    setShow(false);
  };

  const getShow = () => {
    setShow(true);
  };

  const deleteOne = id => {
    dispatch(deleteItem(id));
  };

  const renderItem = ({item}) => {
    return (
      <Pressable onPress={() => deleteOne(item.id)}>
        <View style={styles.row}>
          <View style={{flex: 1.5}}>
            <Text>{item.name}</Text>
          </View>
          <View style={{flex: 1}}>
            <Text>{item.country}</Text>
          </View>
          <View style={{flex: 1}}>
            <Text>{item.brand}</Text>
          </View>
          <View style={{flex: 1.5}}>
            <Text>{item.number}</Text>
          </View>
          <View style={{flex: 0.5}}>
            <Icon name="delete" size={20} color={Colors.black} />
          </View>
        </View>
      </Pressable>
    );
  };

  return (
    <>
      <SafeAreaView style={styles.main}>
        <SimpleToolbar title="Phone App" getShow={getShow} />
        <View style={styles.body}>
          <View style={styles.row}>
            <View style={{flex: 1.5}}>
              <Text>Name</Text>
            </View>
            <View style={{flex: 1}}>
              <Text>Country</Text>
            </View>
            <View style={{flex: 1}}>
              <Text>Brand</Text>
            </View>
            <View style={{flex: 1.5}}>
              <Text>Number</Text>
            </View>
            <View style={{flex: 0.5}}>
              <Text>Action</Text>
            </View>
          </View>
          <View style={{flex: 1}}>
            <FlatList
              data={phones}
              renderItem={renderItem}
              keyExtractor={item => item.id.toString()}
            />
          </View>
          <View style={styles.abs}>
            <Pressable onPress={goToForm}>
              <View style={styles.circle}>
                <Icon name="add" size={40} color={Colors.white} />
              </View>
            </Pressable>
          </View>
        </View>
      </SafeAreaView>
      {show && <BrandFilter getBrand={getBrand} />}
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  body: {
    flex: 1,
    padding: 16,
  },
  abs: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    zIndex: 999,
    elevation: 3,
  },
  circle: {
    height: 60,
    width: 60,
    backgroundColor: Colors.primaryColor,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: Colors.borderColor,
  },
});
