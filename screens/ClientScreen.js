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

const ClientScreen = () => {
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
            {route.params.username}
          </Text>
          <Text
            style={{color: '#07009E', fontSize: 20, fontFamily: 'Nunito-Bold'}}>
            {route.params.project}
          </Text>
          <Text
            style={{
              color: '#07009E',
              fontSize: 15,
              fontFamily: 'Nunito-Medium',
            }}>
            {route.params.clientcompany}
          </Text>
          <Text
            style={{
              color: '#07009E',
              fontSize: 15,
              fontFamily: 'Nunito-Medium',
            }}>
            {route.params.email}
          </Text>
          <View
            style={{flexDirection: 'row', alignItems: 'center', marginTop: 25}}>
            <View style={{flexDirection: 'row'}}>
              <FontAwesome6 name="location-dot" size={15} color={'#07009E'} />
              <Text
                style={{
                  color: '#07009E',
                  fontSize: 15,
                  fontFamily: 'Nunito-Medium',
                  marginLeft: 3,
                }}>
                {route.params.location}
              </Text>
            </View>
            <View style={{flexDirection: 'row', marginLeft: 70}}>
              <Ionicons
                name="call"
                size={15}
                color={'#07009E'}
                style={{marginTop: 2.5}}
              />
              <Text
                style={{
                  color: '#07009E',
                  fontSize: 15,
                  fontFamily: 'Nunito-Medium',
                  marginLeft: 3,
                }}>
                {route.params.phone}
              </Text>
            </View>
          </View>

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
              CLIENT INFORMATION
            </Text>
            <Text style={styles.userInfo}>
              Client Lead Email: abcd@gmail.com
            </Text>
            <Text style={styles.userInfo}>Contact Person: ABCD </Text>
            <Text style={styles.userInfo}>Client Type: Broker </Text>
            <Text style={styles.userInfo}>Send SMS: Yes </Text>
            <Text style={styles.userInfo}>Client Status: Enable </Text>
            <Text style={styles.userInfo}>Address Line 1:</Text>
            <Text style={styles.userInfo}>Vaishali Nagr </Text>
            <Text style={styles.userInfo}>Address Line 2:</Text>
            <Text style={styles.userInfo}>Gandi Path , Chitarkoot, Jaipur</Text>
            <Text style={styles.userInfo}>Area: Vaishali Nagar</Text>
            <Text style={styles.userInfo}>City: Jaipur</Text>
            <Text style={styles.userInfo}>ZipCode: 303030</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default ClientScreen;

const styles = StyleSheet.create({
  userInfo: {
    color: '#07009E',
    fontSize: 15,
    fontFamily: 'Nunito-Bold',
    marginTop: 15,
  },
});
