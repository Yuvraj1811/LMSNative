import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {
  createDrawerNavigator,
  
} from '@react-navigation/drawer';
import CustomDrawer from '../components/CustomDrawer';
import DashBoardScreen from '../screens/DashBoardScreen';
import ProjectList from '../screens/ProjectList';
import ProjectAddScreen from '../screens/ProjectAddScreen';
import ClientList from '../screens/ClientList';
import ClientAddScreen from '../screens/ClientAddScreen';
import VendorList from '../screens/VendorList';
import VendorAddScreen from '../screens/VendorAddScreen';
import LeadList from '../screens/LeadList';
import LeadAddScreen from '../screens/LeadAddScreen';
import AutoAssignScreen from '../screens/AutoAssignScreen';

const Drawer = createDrawerNavigator();

const DrawerNavigation = ({route}) => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} route={route} />}
      screenOptions={{
        headerShown: false,
      }}>
          {/* initialParams={{username: route.params.username}} */}
      <Drawer.Screen name="Dashboard" component={DashBoardScreen} />
      <Drawer.Screen name="ProjectList" component={ProjectList} />
      <Drawer.Screen name="ProjectAdd" component={ProjectAddScreen} />
      <Drawer.Screen name="ClientList" component={ClientList} />
      <Drawer.Screen name="ClientAdd" component={ClientAddScreen} />
      <Drawer.Screen name="VendorList" component={VendorList} />
      <Drawer.Screen name="VendorAdd" component={VendorAddScreen} />
      <Drawer.Screen name="LeadList" component={LeadList} />
      <Drawer.Screen name="LeadAdd" component={LeadAddScreen} />
      <Drawer.Screen name="AutoAssign" component={AutoAssignScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
