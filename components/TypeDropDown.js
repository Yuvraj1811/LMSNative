import {View, Text, StyleSheet} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Picker} from '@react-native-picker/picker';

const TypeDropDown = () => {
  const data = [
    {label: 'RESIDENTIAL', value: 0},
    {label: 'COMMERCIAL', value: 1},
   
  ];
  const [selectedType, setSelectedType] = useState();

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
        selectedValue={selectedType}
        onValueChange={(itemValue, itemIndex) =>
          setSelectedType(itemValue)
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

export default TypeDropDown;

const styles = StyleSheet.create({
  textStyle: {
    color: '#07009E',
    fontFamily: 'Nunito-Medium',
    backgroundColor: 'white',
  },
});
