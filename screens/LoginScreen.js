import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
  ImageBackground,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import TextDynamic from '../components/TextDynamic';
import {TextInput} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Entypo';
import CheckBox from '@react-native-community/checkbox';
import {useNavigation} from '@react-navigation/native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const data = [
  {username: 'Yuvraj', password: '1234'},
  {username: 'Rocky', password: '1234'},
  {username: 'Johnny', password: '1234'},
];

const LoginScreen = () => {
  const navigation = useNavigation();

  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const checkCredentials = async () => {
    try {
      const user = data.find(
        cred => cred.username === username && cred.password === password,
      );

      if (user) {
        Alert.alert('Login Successful!');
        navigation.navigate('Drawer',{ screen:'LMS', params:{username:username}});
      } else {
        Alert.alert('Invalid username or password');
      }
    } catch (error) {
      console.log('Error reading file:', error);
    }
  };

  return (
    <KeyboardAwareScrollView>
      <SafeAreaView style={styles.container}>
        <ImageBackground
          style={styles.image1}
          source={require('../assets/images/Rectangle1.png')}
        />
        <Text style={styles.text}>LMS</Text>
        <TextDynamic />
        <Text style={styles.login}>Login</Text>
        <View style={styles.textInputView}>
          <TextInput
            style={styles.textInput}
            placeholderTextColor={'#2F80ED'}
            mode="outlined"
            label={'Email'}
            activeOutlineColor="#2F80ED"
            outlineColor="#2F80ED"
            textColor="black"
            left={<TextInput.Icon name="mail" size={30} color="black" />}
            onChangeText={setUserName}
          />
          <Icon
            name="mail"
            size={30}
            color="#2F80ED"
            style={{bottom: 47, right: 125}}
          />
          <TextInput
            style={styles.textInput}
            placeholderTextColor={'#2F80ED'}
            mode="outlined"
            label={'Password'}
            activeOutlineColor="#2F80ED"
            outlineColor="#2F80ED"
            textColor="black"
            left={<TextInput.Icon name="lock" size={30} color="black" />}
            onChangeText={setPassword}
            secureTextEntry={true}
          />
          <Icon
            name="lock"
            size={30}
            color="#2F80ED"
            style={{bottom: 47, right: 120}}
          />
        </View>
        <View style={styles.frView}>
          <CheckBox
            disabled={false}
            value={toggleCheckBox}
            onValueChange={newValue => setToggleCheckBox(newValue)}
            tintColors={{true: '#2F80ED', false: '#2F80ED'}}
          />
          <Text style={styles.remText}>Remember Me</Text>
          <Text style={styles.forText}>Forget Password?</Text>
        </View>
        <ImageBackground
          style={styles.image3}
          source={require('../assets/images/Rectangle3.png')}>
          <TouchableOpacity onPress={checkCredentials} style={styles.btn}>
            <Text style={styles.btnText}>LOGIN</Text>
          </TouchableOpacity>
        </ImageBackground>
      </SafeAreaView>
    </KeyboardAwareScrollView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
  },
  image1: {
    bottom: 70,
    height: 250,
    width: '100%',
  },
  text: {
    fontFamily: 'Nunito-ExtraBold',
    fontSize: 35,
    color: '#2F80ED',
    bottom: 110,
  },
  login: {
    fontFamily: 'Nunito-Bold',
    color: '#2F80ED',
    fontSize: 25,
    bottom: 70,
  },
  textInput: {
    backgroundColor: 'white',
    borderColor: '#2F80ED',
    width: 300,
    marginBottom: 7,
    flexDirection: 'row',
  },
  textInputView: {
    alignItems: 'center',
    bottom: 40,
  },
  frView: {
    flexDirection: 'row',
    alignItems: 'center',
    bottom: 70,
  },
  remText: {
    color: '#2F80ED',
    fontFamily: 'Nunito-Bold',
    marginRight: 70,
  },
  forText: {
    color: '#2F80ED',
    fontFamily: 'Nunito-Bold',
  },
  btnText: {
    color: '#2F80ED',
    fontFamily: 'Nunito-Bold',
  },
  image3: {
    height: 145,
    width: '100%',
  },
  btn: {
    borderRadius: 7,
    backgroundColor: '#FFFFFF',
    height: 50,
    width: 120,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 220,
    marginTop: 40,
  },
});
