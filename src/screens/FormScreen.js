import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Button,
  ToastAndroid,
} from 'react-native';
import {Navigation} from 'react-native-navigation';
import {useDispatch} from 'react-redux';
import BackToolbar from '../components/BackToolbar';
import SimpleInput from '../components/SimpleInput';
import {addPhone} from '../redux/actions/phoneAction';
import {Colors} from '../utils/Colors';

const FormScreen = props => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [country, setCountry] = useState('');
  const [brand, setBrand] = useState('');
  const [phone, setPhone] = useState('');

  const addNew = () => {
    // input validation
    if (name != '' && country != '' && brand != '' && phone != '') {
      const item = {
        id: new Date().getTime(),
        name: name,
        country: country,
        brand: brand,
        number: phone,
      };
      dispatch(addPhone(item));
      Navigation.pop(props.componentId);
      ToastAndroid.show('Successfully added', ToastAndroid.SHORT);
    } else {
      ToastAndroid.show('Please fill all the fields', ToastAndroid.SHORT);
    }
  };

  return (
    <SafeAreaView style={styles.main}>
      <BackToolbar title="Form" componentId={props.componentId} />
      <ScrollView style={{flex: 1, padding: 16}}>
        <SimpleInput
          value={name}
          label="Name"
          onChangeText={text => setName(text)}
        />
        <SimpleInput
          value={country}
          label="Country"
          onChangeText={text => setCountry(text)}
        />
        <SimpleInput
          value={brand}
          label="Phone's Brand"
          onChangeText={text => setBrand(text)}
        />
        <SimpleInput
          value={phone}
          label="Phone Numer"
          onChangeText={text => setPhone(text)}
        />
        <View style={{height: 20}} />
        <Button title="Add" color={Colors.primaryColor} onPress={addNew} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default FormScreen;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: Colors.white,
  },
});
