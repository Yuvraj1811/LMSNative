import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import React, {useState} from 'react';
import ProjectDropdownComponent from '../components/ProjectDropDown';
import StateDropdownComponent from '../components/StateDropDown';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const VendorAddScreen = () => {
  const [showCheck, setShowCheck] = useState(false);

  const checkHandelPress = () => {
    setShowCheck(!showCheck);
  };

  //Vendor Status Status
  const [selectVendorStatus, setVendorStatus] = useState(0);
  const [selectVendorStatusText, setVendorStatusText] = useState(false);

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
    {lable: 'ENABLED', value: 0},
    {lable: 'DISABLED', value: 1},
  ];

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.addcText}>ADD NEW VENDOR</Text>
        <Text style={styles.cText}>VENDOR INFORMATION</Text>
        <View style={{alignItems: 'center'}}>
          <TextInput
            style={styles.textInput}
            placeholder="VENDOR OWNER"
            placeholderTextColor={'#0B02DD'}
          />

          <TextInput
            style={styles.textInput}
            placeholder="VENDOR NAME"
            placeholderTextColor={'#0B02DD'}
          />

          <TextInput
            style={styles.textInput}
            placeholder="PHONE"
            placeholderTextColor={'#0B02DD'}
          />

          <TextInput
            style={styles.textInput}
            placeholder="EMAIL"
            placeholderTextColor={'#0B02DD'}
          />

          <TextInput
            style={styles.textInput}
            placeholder="WEBSITE"
            placeholderTextColor={'#0B02DD'}
          />

          <TextInput
            style={styles.textInput}
            placeholder="CATEGORY"
            placeholderTextColor={'#0B02DD'}
          />
          <Text style={styles.ctText}>SELECT PROJECT</Text>
          <ProjectDropdownComponent />
        </View>
        <Text style={styles.ctText}>VENDOR STATUS</Text>
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
                setVendorStatus(item.value);
                setVendorStatusText(item.lable);
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
                  {selectVendorStatus == item.value ? (
                    <View style={styles.radioBtnBg}></View>
                  ) : null}
                </View>
                {selectVendorStatusText == item.lable ? (
                  <Text style={styles.clientTypeText}>{item.lable}</Text>
                ) : (
                  <Text style={styles.clientTypeText2}>{item.lable}</Text>
                )}
              </View>
            </TouchableOpacity>
          ))}
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginLeft: 35,
            marginTop: 20,
          }}>
          <Text style={{color: '#07009E', fontFamily: 'Nunito-Bold'}}>
            EMAIL OPT OUT
          </Text>
          <TouchableWithoutFeedback onPress={checkHandelPress}>
            <View
              style={{
                borderRadius: 1,
                borderWidth: 1,
                height: 20,
                width: 20,
                flexDirection: 'row',
                alignItems: 'center',
                alignSelf: 'center',
                marginLeft: 10,
                borderColor: '#07009E',
              }}>
              {showCheck && (
                <FontAwesome5
                  name="check-square"
                  size={19}
                  color={'#07009E'}
                  style={{bottom: 1, left: 1}}
                />
              )}
            </View>
          </TouchableWithoutFeedback>
        </View>
        <View style={styles.textView}>
          <Text style={styles.cText}>ADDRESS INFORMATION</Text>
        </View>

        <View style={{alignItems: 'center'}}>
          <TextInput
            style={styles.textInput}
            placeholder="ADDRESS LINE 1"
            placeholderTextColor={'#0B02DD'}
          />
          <TextInput
            style={styles.textInput}
            placeholder="ADDRESS LINE 2"
            placeholderTextColor={'#0B02DD'}
          />
          <TextInput
            style={styles.textInput}
            placeholder="AREA"
            placeholderTextColor={'#0B02DD'}
          />
          <StateDropdownComponent />

          <TextInput
            style={styles.textInput}
            placeholder="ZIP CODE"
            placeholderTextColor={'#0B02DD'}
          />

          <TextInput
            multiline
            style={styles.desTextInput}
            placeholder="DESCRIPTION"
            placeholderTextColor={'#0B02DD'}
          />
        </View>
        <View style={styles.saveView}>
          <TouchableOpacity style={styles.canBtn}>
            <Text style={styles.saveText}>CANCEL</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.saveBtn}>
            <Text style={styles.saveText}>SAVE</Text>
          </TouchableOpacity>
        </View>
        <View style={{marginTop: 20}}></View>
      </View>
    </ScrollView>
  );
};

export default VendorAddScreen;

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
  desTextInput: {
    borderRadius: 1,
    borderWidth: 1.5,
    width: '80%',
    minHeight: 100,
    marginTop: 20,
    borderColor: '#07009E',
    color: '#07009E',
    paddingLeft: 10,
    alignSelf: 'center',
    textAlignVertical: 'top',
  },
});
