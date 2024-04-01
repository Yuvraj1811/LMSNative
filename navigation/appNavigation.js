import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {DrawerActions, NavigationContainer, useNavigation} from '@react-navigation/native';
import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import DrawerNavigation from './drawerNavigation';
import Icon from 'react-native-vector-icons/FontAwesome6';




const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName='Drawer'>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Drawer" component={CustomDrawerNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const CustomDrawerNavigation = () => {

  
  
  const navigation = useNavigation()
  
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        headerTintColor:'#FFFFFF',
        headerTitleAlign:'center',
        headerStyle: {
          backgroundColor: '#2F80ED',

        },
        headerTitleStyle:{
         fontFamily:'Nunito-Bold',
         fontSize:27
        },
        headerLeft: () => {
          return <Icon name="bars" onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
           size={25} color={'#FFFFFF'} />;
        },
      }}>
      <Stack.Screen name="LMS" component={DrawerNavigation} />
    </Stack.Navigator>
  );
};

export default AppNavigation;
