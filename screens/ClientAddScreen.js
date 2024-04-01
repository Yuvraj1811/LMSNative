import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';

const ClientAddScreen = () => {

  //Client Type
  const [selectClientType, setClientType] = useState(0);
  const [selectClientText, setselectClientText] = useState(false);

  //Send SMS
  const [selectSMS, setSMS] = useState(0);
  const [selectSMSText, setSelectSMSText] = useState(false)

  //Client Status
  const [selectClientStatus, setClientStatus] = useState(0)
  const [selectClientStatusText, setClientStatusText] = useState(false) 

  const clientType = [
    {lable: 'BROKER', value: 0},
    {lable: 'BUILDER', value: 1},
    {lable: 'OTHER', value: 2},
  ];

  const sendSMS = [
    {lable: 'YES', value: 0},
    {lable: 'NO', value: 1},
  ];

  const enableStatus = [
    {lable:'ENABLED', value:0},
    {lable:'DISABLED', value:1}
  ]


  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.addcText}>ADD NEW CLIENT</Text>
        <Text style={styles.cText}>CLIENT INFORMATION</Text>
        <View style={{alignItems: 'center'}}>
          <TextInput
            style={styles.textInput}
            placeholder="CLIENT COMPANY"
            placeholderTextColor={'#66A0EE'}
          />
          <TextInput
            style={styles.textInput}
            placeholder="EMAIL"
            placeholderTextColor={'#66A0EE'}
          />
          <TextInput
            style={styles.textInput}
            placeholder="CLIENT LEAD EMAIL"
            placeholderTextColor={'#66A0EE'}
          />
          <TextInput
            style={styles.textInput}
            placeholder="CONTACT PERSON"
            placeholderTextColor={'#66A0EE'}
          />
          <TextInput
            style={styles.textInput}
            placeholder="CONTACT NUMBER"
            placeholderTextColor={'#66A0EE'}
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
          {clientType.map((item, key) => (
            <TouchableOpacity key={key}
              onPress={() => {
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
                    borderColor: '#2F80ED',
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
            <TouchableOpacity key={key}
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
                    borderColor: '#2F80ED',
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
            <TouchableOpacity key={key}
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
                    borderColor: '#2F80ED',
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
      </View>
    </ScrollView>
  );
};

export default ClientAddScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  addcText: {
    color: '#2F80ED',
    fontFamily: 'Nunito-Bold',
    marginLeft: 10,
    marginTop: 20,
  },
  cText: {
    color: '#2F80ED',
    fontFamily: 'Nunito-Medium',
    fontSize: 13,
    marginTop: 30,
    marginLeft: 10,
  },
  textInput: {
    borderRadius: 1,
    borderWidth: 1.5,
    width: '80%',
    height: 45,
    marginTop: 20,
    borderColor: '#2F80ED',
    color: 'black',
    paddingLeft: 10,
  },
  ctText: {
    color: '#2F80ED',
    fontFamily: 'Nunito-Bold',
    marginTop: 20,
    marginLeft: 35,
  },
  radioBtnBg: {
    backgroundColor: '#2F80ED',
    height: 15,
    width: 14,
    borderRadius: 30,
    bottom: 0.4,
  },
  radioBtnBg2: {
    backgroundColor: '#2F80ED',
    height: 15,
    width: 14,
    borderRadius: 30,
    bottom: 0.4,
  },
  clientTypeText: {
    color: '#2F80ED',
    marginLeft: 5,
    fontWeight: '800',
  },

  clientTypeText2: {
    color: '#2F80ED',
    marginLeft: 5,
  },
  sms:{
    color:'#2F80ED'
  }
});
