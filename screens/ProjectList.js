import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

const ProjectList = () => {
  const navigation = useNavigation();

  const [projects, setprojects] = useState([]);

  useEffect(() => {
    fetch('http://103.224.246.93:9092/api/v1/project')
      .then(response => response.json())
      .then(data => {
        setprojects(data.data);
      })
      .catch(error => console.log('Error fetching data:', error));
  }, []);

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
        PROJECT LIST{' '}
      </Text>
      <View style={{borderBottomWidth: 3, borderColor: '#0B02DD'}}></View>
      <FlatList
        data={projects}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <View style={{paddingLeft: 20}}>
            <View style={styles.userConatineer}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Project', {});
                }}>
                <Text
                  style={{
                    color: '#FFFFFF',
                    fontSize: 25,
                    fontFamily: 'Nunito-Bold',
                  }}>
                  {item.projectTitle}
                </Text>
              </TouchableOpacity>

              <Text
                style={{
                  color: '#FFFFFF',
                  fontSize: 18,
                  fontFamily: 'Nunito-Bold',
                }}>
                {item.clientName}
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 10,
                }}>
                <Text
                  style={{
                    color: '#FFFFFF',
                    fontSize: 16,
                    fontFamily: 'Nunito-Bold',
                  }}>
                  Price From:
                </Text>
                <Text
                  style={{
                    color: '#FFFFFF',
                    fontSize: 16,
                    fontFamily: 'Nunito-Bold',
                    marginLeft: 128,
                  }}>
                  Price To:
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 2,
                }}>
                <Text
                  style={{
                    color: '#FFFFFF',
                    fontSize: 15,
                    fontFamily: 'Nunito-Medium',
                    marginLeft: 20,
                  }}>
                  {item.priceCostFrom}
                </Text>
                <Text
                  style={{
                    color: '#FFFFFF',
                    fontSize: 15,
                    fontFamily: 'Nunito-Medium',
                    marginLeft: 180,
                  }}>
                  {item.priceCostTo}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 10,
                }}>
                <Text
                  style={{
                    color: '#FFFFFF',
                    fontSize: 16,
                    fontFamily: 'Nunito-Bold',
                  }}>
                  Start Date:
                </Text>
                <Text
                  style={{
                    color: '#FFFFFF',
                    fontSize: 16,
                    fontFamily: 'Nunito-Bold',
                    marginLeft: 120,
                  }}>
                  End Date:
                </Text>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 2,
                }}>
                <Text
                  style={{
                    color: '#FFFFFF',
                    fontSize: 15,
                    fontFamily: 'Nunito-Medium',
                  }}>
                  {item.startDate}
                </Text>
                <Text
                  style={{
                    color: '#FFFFFF',
                    fontSize: 15,
                    fontFamily: 'Nunito-Regular',
                    marginLeft: 110,
                  }}>
                  {item.endDate}
                </Text>
              </View>
              <View style={{marginTop: 10}}>
                <Text
                  style={{
                    color: '#FFFFFF',
                    fontSize: 16,
                    fontFamily: 'Nunito-Bold',
                  }}>
                  Created On:
                </Text>
                <Text
                  style={{
                    color: '#FFFFFF',
                    fontSize: 15,
                    fontFamily: 'Nunito-Medium',
                  }}>
                  {item.createdOn}
                </Text>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default ProjectList;

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
    width: '90%',
    backgroundColor: '#07009E',
  },
});
