import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import DatePicker from '../components/DatePicker';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';

const ProjectAddScreen = () => {

  const navigation = useNavigation()
  

  const [formData, setFormData] = useState({
    projectTitle: '',
    projectLocation: '',
    landingPageURL: '',
    startDate: '',
    endDate: '',
    priceCostFrom: '',
    priceCostTo: '',
    description: '',
    icon:''
  });

  const handelSubmit = async () => {
    try {
      const response = await axios.post(
        'http://103.224.246.93:9092/api/v1/project',
        formData,
      );
      console.log('Response:', response.data);
      Alert.alert('Success', 'Project added successfully');
      navigation.navigate('ProjectList')
      
    } catch (error) {
      console.log('Erro:', error);
      Alert.alert('Failed', 'Failed to add project.Please try again later');
    }
  };

  const handelChange = (key, value) => {
    setFormData(prevState => ({
      ...prevState,
      [key]: value,
    }));
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.addcText}>ADD NEW Project</Text>
        <View style={{alignItems: 'center'}}>
          <TextInput
            style={styles.textInput}
            placeholder="PROJECT NAME"
            placeholderTextColor={'#0B02DD'}
            onChangeText={text => handelChange('projectTitle', text)}
          />

          <TextInput
            style={styles.textInput}
            placeholder="PROJECT LOCATION"
            placeholderTextColor={'#0B02DD'}
            onChangeText={text => handelChange('projectLocation', text)}
          />

          <TextInput
            style={styles.textInput}
            placeholder="LANDING PAGE URL"
            placeholderTextColor={'#0B02DD'}
            onChangeText={text => handelChange('landingPageURL', text)}
          />

          <DatePicker
            initialDate={formData.startDate}
            placeholder="START DATE"
            onChange={data => handelChange('startDate', data)}
          />

          <DatePicker
            initialDate={formData.endDate}
            placeholder="END DATE"
            onChange={data => handelChange('endDate', data)}
          />

          <TextInput
            style={styles.textInput}
            placeholder="PRICE FROM"
            placeholderTextColor={'#0B02DD'}
            onChangeText={text => handelChange('priceCostFrom', text)}
          />

          <TextInput
            style={styles.textInput}
            placeholder="PRICE TO"
            placeholderTextColor={'#0B02DD'}
            onChangeText={text => handelChange('priceCostTo', text)}
          />
        </View>
        <TextInput
          multiline
          style={styles.desTextInput}
          placeholder="DESCRIPTION"
          placeholderTextColor={'#0B02DD'}
          onChangeText={text => handelChange('description', text)}
        />

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

export default ProjectAddScreen;

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
