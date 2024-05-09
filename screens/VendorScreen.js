import {
    View,
    Text,
    ScrollView,
    Image,
    TouchableOpacity,
    ImageBackground,
    StyleSheet,
  } from 'react-native';
  import React from 'react';
  import Ionicons from 'react-native-vector-icons/Ionicons';
  import {useNavigation, useRoute} from '@react-navigation/native';
  import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
  
  const VendorScreen = () => {
    const navigation = useNavigation();
  
    const route = useRoute();
    return (
      <ScrollView style={{flex: 1}}>
        <View style={{alignItems: 'center'}}>
          <ImageBackground
            source={require('../assets/images/Rectangle1.2.png')}
            style={{height: 250, width: 380}}
          />
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}>
            <Ionicons
              name="arrow-back-circle"
              size={45}
              color={'white'}
              style={{bottom: 230, left: -150}}
            />
          </TouchableOpacity>
          <View
            style={{
              borderRadius: 100,
              height: 120,
              width: 120,
              alignItems: 'center',
              bottom: 150,
            }}>
            <Image
              source={{
                uri: 'https://img.freepik.com/premium-vector/young-smiling-man-avatar-man-with-brown-beard-mustache-hair-wearing-yellow-sweater-sweatshirt-3d-vector-people-character-illustration-cartoon-minimal-style_365941-860.jpg',
              }}
              style={{height: 130, width: 130, borderRadius: 100}}
            />
          </View>
          <View style={{alignItems: 'center', bottom: 125}}>
            <Text
              style={{color: '#07009E', fontSize: 25, fontFamily: 'Nunito-Bold'}}>
              {route.params.project}
            </Text>
            <Text
              style={{color: '#07009E', fontSize: 20, fontFamily: 'Nunito-Bold'}}>
              {route.params.landinpageurl}
            </Text>
            <Text
              style={{color: '#07009E', fontSize: 12, fontFamily: 'Nunito-Regular'}}>
              abcd dhc hd hdhd hc h ch dc chd chdchdcbhdbchbchcbhbchcbhcbhbchbchbchcbhdchcchcjbcjdcjbcjdj
            </Text>
            <View style={{alignItems: 'flex-start', marginTop: 20}}>
              <Text
                style={{
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
                }}>
                PROJECT INFORMATION
              </Text>
              <Text style={styles.userInfo}>
                Project Location: Mumbai
              </Text>
              <Text style={styles.userInfo}>Start Date: ABCD </Text>
              <Text style={styles.userInfo}>End Date: Broker </Text>
              <Text style={styles.userInfo}>Price From: Yes </Text>
              <Text style={styles.userInfo}>Price To: Enable </Text>
              
            </View>
          </View>
        </View>
      </ScrollView>
    );
  };
  
  export default VendorScreen;
  
  const styles = StyleSheet.create({
    userInfo: {
      color: '#07009E',
      fontSize: 15,
      fontFamily: 'Nunito-Bold',
      marginTop: 15,
    },
  });
  