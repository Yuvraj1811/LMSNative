import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import StateDropdownComponent from '../components/StateDropDown';
import ProjectDropDown from '../components/ProjectDropDown';
import {axios} from 'axios';

const ClientAddScreen = () => {
  const [clientData, setClientData] = useState({
    clientName: '',
    contactPerson: '',
    contactNumber: '',
    email: '',
    address: {
      addressLine1: '',
      addressLine2: '',
      area: '',
      state: '',
      city: '',
      zipCode: '',
    },
    clientLeadEmail: '',
    sendSms: false,
    clientStatus: false,
    clientType: '',
    projects: [],
    icon: '',
  });

  const handelSubmit = async () => {
    try {
      const response = await axios.post(
        'http://103.224.246.93:9092/api/v1/client/save',
        clientData,
      );
      console.log('Response:', response.data);
      Alert.alert('Success', 'Client added successfully');
    } catch (error) {
      console.log('Error:', error);
      Alert.alert('Failed', 'Failed to add client.Please try again later');
    }
  };

  const handelChange = (key, value) => {
    if(key === 'clientType'){
      setClientType(value)
    }
    setClientData(prevState => ({
      ...prevState,
      [key]: value,
    }));
  };
  //Client Type
  const [selectClientType, setClientType] = useState('');
  const [selectClientText, setselectClientText] = useState(false);

  //Send SMS
  const [selectSMS, setSMS] = useState(false);
  const [selectSMSText, setSelectSMSText] = useState(false);

  //Client Status
  const [selectClientStatus, setClientStatus] = useState(false);
  const [selectClientStatusText, setClientStatusText] = useState(false);

  const ClientTypes = [
    {lable: 'BROKER', value: 0},
    {lable: 'BUILDER', value: 1},
    {lable: 'OTHER', value: 2},
  ];

  const sendSMS = [
    {lable: 'YES', value: 0},
    {lable: 'NO', value: 1},
  ];

  const enableStatus = [
    {lable: 'ENABLED', value: 0},
    {lable: 'DISABLED', value: 1},
  ];

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.addcText}>ADD NEW CLIENT</Text>
        <Text style={styles.cText}>CLIENT INFORMATION</Text>
        <View style={{alignItems: 'center'}}>
          <TextInput
            style={styles.textInput}
            placeholder="CLIENT COMPANY"
            placeholderTextColor={'#0B02DD'}
            onChangeText={text => handelChange('clientName', text)}
          />

          <TextInput
            style={styles.textInput}
            placeholder="EMAIL"
            placeholderTextColor={'#0B02DD'}
            onChangeText={text => handelChange('email', text)}
          />

          <TextInput
            style={styles.textInput}
            placeholder="CLIENT LEAD EMAIL"
            placeholderTextColor={'#0B02DD'}
            onChangeText={text => handelChange('clientLeadEmail', text)}
          />

          <TextInput
            style={styles.textInput}
            placeholder="CONTACT PERSON"
            placeholderTextColor={'#0B02DD'}
            onChangeText={text => handelChange('contactPerson', text)}
          />

          <TextInput
            style={styles.textInput}
            placeholder="CONTACT NUMBER"
            placeholderTextColor={'#0B02DD'}
            onChangeText={text => handelChange('contactNumber', text)}
          />
        </View>
        <Text style={styles.ctText}>CLIENT TYPE</Text>
        <View
          style={{
            alignItems: 'center',
            flexDirection: 'row',
            marginTop: 1,
            marginLeft: 24,
          }}>
          {ClientTypes.map((item, key) => (
            <TouchableOpacity
              key={key}
              onPress={() => {
                handelChange('clientType', item.lable)
                setClientType(item.value);
                setselectClientText(item.lable);
                
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  margin: 10,
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    borderRadius: 20,
                    borderWidth: 3,
                    borderColor: '#07009E',
                    height: 20,
                    width: 20,
                  }}>
                  {selectClientType == item.value ? (
                    <View style={styles.radioBtnBg}></View>
                  ) : null}
                </View>
                {selectClientText == item.lable ? (
                  <Text style={styles.clientTypeText}>{item.lable}</Text>
                ) : (
                  <Text style={styles.clientTypeText2}>{item.lable}</Text>
                )}
              </View>
            </TouchableOpacity>
          ))}
        </View>
        <Text style={styles.ctText}>SEND SMS</Text>
        <View
          style={{
            alignItems: 'center',
            flexDirection: 'row',
            marginTop: 1,
            marginLeft: 24,
          }}>
          {sendSMS.map((item, key) => (
            <TouchableOpacity
              key={key}
              onPress={() => {
                setSMS(item.value);
                setSelectSMSText(item.lable);
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  margin: 10,
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    borderRadius: 20,
                    borderWidth: 3,
                    borderColor: '#07009E',
                    height: 20,
                    width: 20,
                  }}>
                  {selectSMS == item.value ? (
                    <View style={styles.radioBtnBg}></View>
                  ) : null}
                </View>
                {selectSMSText == item.lable ? (
                  <Text style={styles.clientTypeText}>{item.lable}</Text>
                ) : (
                  <Text style={styles.clientTypeText2}>{item.lable}</Text>
                )}
              </View>
            </TouchableOpacity>
          ))}
        </View>
        <Text style={styles.ctText}>CLIENT STATUS</Text>
        <View
          style={{
            alignItems: 'center',
            flexDirection: 'row',
            marginTop: 1,
            marginLeft: 24,
          }}>
          {enableStatus.map((item, key) => (
            <TouchableOpacity
              key={key}
              onPress={() => {
                setClientStatus(item.value);
                setClientStatusText(item.lable);
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  margin: 10,
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    borderRadius: 20,
                    borderWidth: 3,
                    borderColor: '#07009E',
                    height: 20,
                    width: 20,
                  }}>
                  {selectClientStatus == item.value ? (
                    <View style={styles.radioBtnBg}></View>
                  ) : null}
                </View>
                {selectClientStatusText == item.lable ? (
                  <Text style={styles.clientTypeText}>{item.lable}</Text>
                ) : (
                  <Text style={styles.clientTypeText2}>{item.lable}</Text>
                )}
              </View>
            </TouchableOpacity>
          ))}
        </View>
        <Text style={styles.ctText}>SELECT PROJECT</Text>
        <ProjectDropDown />
        <View style={styles.textView}>
          <Text style={styles.cText}>ADDRESS INFORMATION</Text>
        </View>

        <View style={{alignItems: 'center'}}>
          <TextInput
            style={styles.textInput}
            placeholder="ADDRESS LINE 1"
            placeholderTextColor={'#0B02DD'}
            onChangeText={text => handelChange('addressLine1', text)}
          />
          <TextInput
            style={styles.textInput}
            placeholder="ADDRESS LINE 2"
            placeholderTextColor={'#0B02DD'}
            onChangeText={text => handelChange('addressLine2', text)}
          />
          <TextInput
            style={styles.textInput}
            placeholder="AREA"
            placeholderTextColor={'#0B02DD'}
            onChangeText={text => handelChange('area', text)}
          />
          <StateDropdownComponent />

          <TextInput
            style={styles.textInput}
            placeholder="ZIP CODE"
            placeholderTextColor={'#0B02DD'}
            onChangeText={text => handelChange('zipcode', text)}
          />
        </View>
        <View style={styles.saveView}>
          <TouchableOpacity style={styles.canBtn}>
            <Text style={styles.saveText}>CANCEL</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.saveBtn} onPress={handelSubmit}>
            <Text style={styles.saveText}>SAVE</Text>
          </TouchableOpacity>
        </View>
        <View style={{marginTop: 20}}></View>
      </View>
    </ScrollView>
  );
};

export default ClientAddScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  addcText: {
    color: '#07009E',
    fontSize: 20,
    fontFamily: 'Nunito-Bold',
    marginLeft: 10,
    marginTop: 20,
  },
  cText: {
    color: '#FFFFFF',
    fontFamily: 'Nunito-Bold',
    fontSize: 13,
    marginTop: 30,
    backgroundColor: '#07009E',
    width: 170,
    height: 25,
    textAlign: 'center',
    alignSelf: 'center',
    paddingTop: 3,
  },

  textInput: {
    borderRadius: 1,
    borderWidth: 1.5,
    width: '80%',
    height: 45,
    marginTop: 20,
    borderColor: '#07009E',
    color: '#07009E',
    paddingLeft: 10,
  },
  ctText: {
    color: '#07009E',
    fontFamily: 'Nunito-Bold',
    marginTop: 20,
    marginLeft: 35,
  },
  radioBtnBg: {
    backgroundColor: '#07009E',
    height: 15,
    width: 14,
    borderRadius: 30,
    bottom: 0.4,
  },
  radioBtnBg2: {
    backgroundColor: '#07009E',
    height: 15,
    width: 14,
    borderRadius: 30,
    bottom: 0.4,
  },
  clientTypeText: {
    color: '#07009E',
    marginLeft: 5,
    fontWeight: '800',
  },

  clientTypeText2: {
    color: '#07009E',
    marginLeft: 5,
  },
  sms: {
    color: '#07009E',
  },
  saveView: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  saveBtn: {
    marginLeft: 130,
    justifyContent: 'center',
    marginTop: 40,
    borderRadius: 1,
    borderWidth: 2,
    height: 40,
    width: 100,
    borderColor: '#07009E',
    backgroundColor: '#07009E',
  },

  canBtn: {
    marginLeft: 15,
    justifyContent: 'center',
    marginTop: 40,
    borderRadius: 1,
    borderWidth: 2,
    height: 40,
    width: 100,
    borderColor: '#F90C0C',
    backgroundColor: '#F90C0C',
  },
  saveText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'Nunito-Bold',
  },
});
