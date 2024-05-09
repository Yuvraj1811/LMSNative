import {View, Text, StyleSheet} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Picker} from '@react-native-picker/picker';

const VendorDropDown = () => {
  const data = [
    {label: 'Project1', value: 0},
    {label: 'Project2', value: 1},
    {label: 'Project3', value: 2},
    {label: 'Project4', value: 3},
    {label: 'Project5', value: 4},
    {label: 'Project6', value: 5},
    {label: 'Project7', value: 6},
    {label: 'Project8', value: 7},
    {label: 'Project9', value: 8},
    {label: 'Project10', value: 9},
    {label: 'Project11', value: 10},
    {label: 'Project12', value: 11},
    {label: 'Project13', value: 12},
    {label: 'Project14', value: 13},
    {label: 'Project15', value: 14},
    {label: 'Project16', value: 15},
    {label: 'Project17', value: 16},
    {label: 'Project18', value: 17},
    {label: 'Project19', value: 18},
  ];
  const [selectedVendor, setSelectedVendor] = useState();

  return (
    <View
      style={{
        marginTop:20,
        alignItems: 'center',
        borderWidth: 1.5,
        height: 57.5,
        width: 303,
        alignSelf: 'center',
        borderColor: '#07009E',
      }}>
      <Picker
        dropdownIconColor="#FFFFFF"
        style={{height: 50, width: 300, backgroundColor: '#07009E'}}
        selectedValue={selectedVendor}
        onValueChange={(itemValue, itemIndex) =>
          setSelectedVendor(itemValue)
        }>
        {data.map((item, index) => (
          <Picker.Item
            style={styles.textStyle}
            label={item.label}
            value={item.value}
            key={index}
          />
        ))}
      </Picker>
    </View>
  );
};

export default VendorDropDown;

const styles = StyleSheet.create({
  textStyle: {
    color: '#07009E',
    fontFamily: 'Nunito-Medium',
    backgroundColor: 'white',
  },
});
