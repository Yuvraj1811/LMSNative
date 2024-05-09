import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const DatePicker = ({initialDate, placeholder, onChange}) => {
  const [date, setDate] = useState(initialDate || new Date());
  const [show, setShow] = useState(false);

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    onChange(currentDate);
  };

  const showDatePicker = () => {
    setShow(true);
  };

  const formatDate = (date) => {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day < 10 ? '0' + day : day}/${month < 10 ? '0' + month : month}/${year}`;

  }; 
  

  return (
    <View>
      <TouchableOpacity onPress={showDatePicker}>
        <View
          style={{
            borderRadius: 1,
            borderWidth: 1.5,
            height: 50,
            width: 284,
            alignItems: 'center',
            marginTop: 15,
            justifyContent: 'center',
            borderColor: '#07009E',
          }}>
          <Text
            style={{
              color: 'black',
              color: '#0B02DD',

              fontFamily: 'Nunito-Medium',
            }}>
            {date ? formatDate(date): placeholder}
          </Text>
        </View>
      </TouchableOpacity>
      {show && (
        <DateTimePicker
          value={date}
          mode="date"
          is24Hour={true}
          display="default"
          onChange={handleDateChange}
        />
      )}
    </View>
  );
};

export default DatePicker;
