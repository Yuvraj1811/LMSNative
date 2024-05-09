import {View, Text, StyleSheet} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Picker} from '@react-native-picker/picker';

const StatusDropDown = () => {
  const data = [
    {label: 'VALID', value: 0},
    {label: 'INVALID', value: 1},
    
  ];
  const [selectedStatus, setSelectedStatus] = useState();

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
        selectedValue={selectedStatus}
        onValueChange={(itemValue, itemIndex) =>
          setSelectedStatus(itemValue)
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

export default StatusDropDown;

const styles = StyleSheet.create({
  textStyle: {
    color: '#07009E',
    fontFamily: 'Nunito-Medium',
    backgroundColor: 'white',
  },
});
