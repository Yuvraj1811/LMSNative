import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import * as Animatable from 'react-native-animatable';
import {useNavigation} from '@react-navigation/native';

const WelcomeScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.image1}
        source={require('../assets/images/Rectangle1.2.png')}
      />
      <Image
        style={styles.image2}
        source={require('../assets/images/Rectangle2.2.png')}
      />
      <View style={styles.textView}>
        <Animatable.Text
          animation={'slideInLeft'}
          duration={3000}
          style={styles.text}>
          WELCOME TO
        </Animatable.Text>
      </View>
      <Animatable.Text
        animation={'slideInLeft'}
        duration={3000}
        style={styles.text2}>
        LMS
      </Animatable.Text>

      <Image
        style={styles.image3}
        source={require('../assets/images/Rectangle3.3.png')}
      />
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Login');
        }}
        style={styles.touchView}>
        <Animatable.View
          animation={'slideInRight'}
          duration={3000}
          style={styles.btnView}>
          <Text style={styles.btnText}>GET STARTED</Text>
        </Animatable.View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  image1: {
    height: '37%',
    width: '100%',
  },
  image2: {
    height: '36%',
    width: '110%',
    position: 'absolute',
    top: 120,
  },
  image3: {
    marginTop: 100,
    height: '20%',
    width: '100%',
  },
  textView: {
    marginTop: 130,
  },
  text: {
    color: '#07009E',
    fontFamily: 'Nunito-Bold',
    fontSize: 20,
  },
  text2: {
    color: '#07009E',
    fontFamily: 'Nunito-ExtraBold',
    fontSize: 50,
  },
  touchView: {
    position: 'absolute',
    bottom: 30,
    right: 20,
  },
  btnView: {
    borderRadius: 7,
    backgroundColor: '#FFFFFF',
    height: 50,
    width: 120,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    color: '#07009E',
    fontFamily: 'Nunito-Bold',
  },
});
