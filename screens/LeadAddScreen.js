import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import BuilderDropDown from '../components/BuilderDropDown';
import ProjectDropDown from '../components/ProjectDropDown';
import TypeDropDown from '../components/TypeDropDown';
import VendorDropDown from '../components/VendorDropDown';
import DatePicker from '../components/DatePicker';
import StatusDropDown from '../components/StatusDropDown';

const LeadAddScreen = () => {
  

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.addcText}>ADD NEW LEADS</Text>
        <View style={{alignItems: 'center'}}>
          <Text style={styles.ctText}>SELECT BUILDER</Text>
          <BuilderDropDown />
          <Text style={styles.ctText}>SELECT PROJECT</Text>
          <ProjectDropDown />

          <Text style={styles.ctText}>SELECT TYPE</Text>
          <TypeDropDown />

          <Text style={styles.ctText}>SELECT VENDOR</Text>
          <VendorDropDown />

          <TextInput
            style={styles.textInput}
            placeholder="LOCATION"
            placeholderTextColor={'#0B02DD'}
          />

          <TextInput
            style={styles.textInput}
            placeholder="LEAD NAME"
            placeholderTextColor={'#0B02DD'}
          />

          <TextInput
            style={styles.textInput}
            placeholder="MOBILE"
            placeholderTextColor={'#0B02DD'}
          />

          <TextInput
            style={styles.textInput}
            placeholder="EMAIL ADDRESS"
            placeholderTextColor={'#0B02DD'}
          />

          <TextInput
            style={styles.textInput}
            placeholder="BUDGET"
            placeholderTextColor={'#0B02DD'}
          />

          <TextInput
            style={styles.textInput}
            placeholder="SUB LOCATION"
            placeholderTextColor={'#0B02DD'}
          />
        </View>
        <DatePicker/>
        <Text style={styles.ctText}>SELECT STATUS</Text>
        <StatusDropDown/>
        <TextInput
          multiline
          style={styles.desTextInput}
          placeholder="DESCRIPTION"
          placeholderTextColor={'#0B02DD'}
        />
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

export default LeadAddScreen;

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
    marginTop: 25,
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
