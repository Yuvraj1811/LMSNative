import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

const user = [
  {
    username: 'Yuvraj Singh',
    project: 'GSTPortal',
    clientcompany: 'Pytosoft',
    email: 'yuvraj@gmail.com',
    location: 'Mumbai',
    phone: 95675858585,
  },
  {
    username: 'Rocky Singh',
    project: 'GSTPortal',
    clientcompany: 'Pytosoft',
    email: 'yuvraj3838@gmail.com',
    location: 'Mumbai',
    phone: 95675858585,
  },
  {
    username: 'Tony Sharma',
    project: 'GSTPortal',
    clientcompany: 'Pytosoft',
    email: 'yuvraj83838@gmail.com',
    location: 'Mumbai',
    phone: 95675858585,
  },
  {
    username: 'Johnny Jain',
    project: 'GSTPortal',
    clientcompany: 'Pytosoft',
    email: 'yuvraj3646@gmail.com',
    location: 'Mumbai',
    phone: 95675858585,
  },
  {
    username: 'Tommy Gupta',
    project: 'GSTPortal',
    clientcompany: 'Pytosoft',
    email: 'yuvraj9876@gmail.com',
    location: 'Mumbai',
    phone: 95675858585,
  },
  {
    username: 'Rupender Adams',
    project: 'GSTPortal',
    clientcompany: 'Pytosoft',
    email: 'yuvraj009@gmail.com',
    location: 'Mumbai',
    phone: 95675858585,
  },
  {
    username: 'Steve Pandit',
    project: 'GSTPortal',
    clientcompany: 'Pytosoft',
    email: 'yuvraj373@gmail.com',
    location: 'Mumbai',
    phone: 95675858585,
  },
  {
    username: 'Ryan Singh',
    project: 'GSTPortal',
    clientcompany: 'Pytosoft',
    email: 'yuvraj78@gmail.com',
    location: 'Mumbai',
    phone: 95675858585,
  },

  {
    username: 'Travis Khandelwal',
    project: 'GSTPortal',
    clientcompany: 'Pytosoft',
    email: 'yuvraj12@gmail.com',
    location: 'Mumbai',
    phone: 95675858585,
  },
];

const ClientList = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text
        style={{
          color: '#07009E',
          fontSize: 20,
          marginTop: 20,
          marginBottom: 10,
          marginLeft: 10,
          fontFamily: 'Nunito-Bold',
        }}>
        CLIENT LIST{' '}
      </Text>
      <View style={{borderBottomWidth: 3, borderColor: '#0B02DD'}}></View>
      <FlatList
        data={user}
        keyExtractor={item => item.email}
        renderItem={({item}) => (
          <View style={{paddingLeft: 20}}>
            <View style={styles.userConatineer}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Client', {
                    username: item.username,
                    project: item.project,
                    clientcompany: item.clientcompany,
                    email: item.email,
                    location: item.location,
                    phone: item.phone,
                  });
                }}>
                <Text
                  style={{
                    color: '#FFFFFF',
                    fontSize: 25,
                    fontFamily: 'Nunito-Bold',
                  }}>
                  {item.username}
                </Text>
              </TouchableOpacity>

              <Text
                style={{
                  color: '#FFFFFF',
                  fontSize: 18,
                  fontFamily: 'Nunito-Bold',
                }}>
                {item.project}
              </Text>
              <Text
                style={{
                  color: '#FFFFFF',
                  fontSize: 15,
                  fontFamily: 'Nunito-Medium',
                }}>
                {item.clientcompany}
              </Text>
              <Text
                style={{
                  color: '#FFFFFF',
                  fontSize: 15,
                  fontFamily: 'Nunito-Medium',
                }}>
                {item.email}
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 15,
                }}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <FontAwesome6
                    name="location-dot"
                    size={15}
                    color={'#FFFFFF'}
                  />
                  <Text
                    style={{
                      color: '#FFFFFF',
                      fontSize: 15,
                      fontFamily: 'Nunito-Regular',
                      marginLeft: 3,
                    }}>
                    {item.location}
                  </Text>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    marginLeft: 90,
                    alignItems: 'center',
                  }}>
                  <Ionicons name="call" size={15} color={'#FFFFFF'} />
                  <Text
                    style={{
                      color: '#FFFFFF',
                      fontSize: 15,
                      fontFamily: 'Nunito-Medium',
                      marginLeft: 3,
                    }}>
                    {item.phone}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default ClientList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userConatineer: {
    paddingLeft: 10,
    marginTop: 20,
    marginVertical: 10,
    padding: 10,
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 20,
    width: '95%',
    backgroundColor: '#07009E',
  },
});
