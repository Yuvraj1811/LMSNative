import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

const user = [
  {
    project: 'GSTPortal',
    landinpageurl:'http//ww.google.com',
    startDate:'20/11/2014',
    endDate:'30/12/2014',
    location: 'Mumbai',
    pricefrom:300,
    priceto:400
  },
  {
    project: 'GSTPortal',
    landinpageurl:'http//ww.google.com',
    startDate:'20/11/2014',
    endDate:'30/12/2014',
    location: 'Mumbai',
    pricefrom:300,
    priceto:400
  },
  {
    project: 'GSTPortal',
    landinpageurl:'http//ww.google.com',
    startDate:'20/11/2014',
    endDate:'30/12/2014',
    location: 'Mumbai',
    pricefrom:300,
    priceto:400
  },
  {
    project: 'GSTPortal',
    landinpageurl:'http//ww.google.com',
    startDate:'20/11/2014',
    endDate:'30/12/2014',
    location: 'Mumbai',
    pricefrom:300,
    priceto:400
  },
  {
    project: 'GSTPortal',
    landinpageurl:'http//ww.google.com',
    startDate:'20/11/2014',
    endDate:'30/12/2014',
    location: 'Mumbai',
    pricefrom:300,
    priceto:400
  },
  {
    project: 'GSTPortal',
    landinpageurl:'http//ww.google.com',
    startDate:'20/11/2014',
    endDate:'30/12/2014',
    location: 'Mumbai',
    pricefrom:300,
    priceto:400
  },
  {
    project: 'GSTPortal',
    landinpageurl:'http//ww.google.com',
    startDate:'20/11/2014',
    endDate:'30/12/2014',
    location: 'Mumbai',
    pricefrom:300,
    priceto:400
  },
  {
    project: 'GSTPortal',
    landinpageurl:'http//ww.google.com',
    startDate:'20/11/2014',
    endDate:'30/12/2014',
    location: 'Mumbai',
    pricefrom:300,
    priceto:400
  },
  {
    project: 'GSTPortal',
    landinpageurl:'http//ww.google.com',
    startDate:'20/11/2014',
    endDate:'30/12/2014',
    location: 'Mumbai',
    pricefrom:300,
    priceto:400
  },

];

const VendorList = () => {
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
        VENDOR LIST{' '}
      </Text>
      <View style={{borderBottomWidth: 10, borderColor: '#0B02DD'}}></View>
      <FlatList
        data={user}
        keyExtractor={item => item.email}
        renderItem={({item}) => (
          <View style={{paddingLeft: 20}}>
            <View style={styles.userConatineer}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Lead',{
                    project: item.project,
                    landinpageurl:item.landinpageurl,
                    startDate:item.startDate,
                    endDate:item.endDate,
                    location:item.location,
                    pricefrom:item.pricefrom,
                    priceto:item.priceto
                  });
                }}>
                <Text
                  style={{
                    color: '#07009E',
                    fontSize: 25,
                    fontFamily: 'Nunito-Bold',
                  }}>
                  {item.project}
                </Text>
              </TouchableOpacity>

              <Text
                style={{
                  color: '#07009E',
                  fontSize: 18,
                  fontFamily: 'Nunito-Bold',
                }}>
                {item.landinpageurl}
              </Text>
              <View style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop:2
                }}>
              <Text
                style={{
                  color: '#07009E',
                  fontSize: 15,
                  fontFamily: 'Nunito-Medium',
                }}>
                {item.startDate}
              </Text>
              <Text
                style={{
                  color: '#07009E',
                  fontSize: 15,
                  fontFamily: 'Nunito-Medium',
                  marginLeft:100
                }}>
                {item.endDate}
              </Text>
              </View>
              <Text
                style={{
                  color: '#07009E',
                  fontSize: 15,
                  fontFamily: 'Nunito-Medium',
                }}>
                {item.location}
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 15,
                }}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <FontAwesome6
                    name="indian-rupee-sign"
                    size={15}
                    color={'#07009E'}
                  />
                  <Text
                    style={{
                      color: '#07009E',
                      fontSize: 15,
                      fontFamily: 'Nunito-Regular',
                      marginLeft: 3,
                    }}>
                    {item.pricefrom}
                  </Text>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    marginLeft: 180,
                    alignItems: 'center',
                  }}>
                   <FontAwesome6
                    name="indian-rupee-sign"
                    size={15}
                    color={'#07009E'}
                   />
                  <Text
                    style={{
                      color: '#07009E',
                      fontSize: 15,
                      fontFamily: 'Nunito-Medium',
                      marginLeft: 3,
                    }}>
                    {item.priceto}
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

export default VendorList;

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
    borderColor: '#07009E',
    borderRadius: 5,
    width: '90%',
  },
});
