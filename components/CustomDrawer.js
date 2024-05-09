import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React, {useState} from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/Octicons';
import Icon3 from 'react-native-vector-icons/FontAwesome6';
import Icon4 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon5 from 'react-native-vector-icons/FontAwesome';
import Icon6 from 'react-native-vector-icons/FontAwesome5';

const CustomDrawer = ({route, ...props}) => {

  // const {username} = route.params;

  const navigation = useNavigation();

  const [showSubMenu, setShowSubMenu] = useState(false);
  const [showClientSubMenu, setShowClientSubMenu] = useState(false);
  const [showVendorSubMenu, setShowVendorSubMenu] = useState(false);
  const [showLeadSubMenu, setShowLeadSubMenu] = useState(false);

  const [showClientIcon, setShowClientIcon] = useState(
    'arrow-right-drop-circle',
  );
  const [showIcon, setShowIcon] = useState('arrow-right-drop-circle');
  const [showVendorIcon, setShowVendorIcon] = useState(
    'arrow-right-drop-circle',
  );
  const [showLeadIcon, setShowLeadIcon] = useState(
    'arrow-right-drop-circle',
  );

  const toogleClientSubMenu = () => {
    setShowClientSubMenu(!showClientSubMenu);
    setShowClientIcon(
      showClientSubMenu ? 'arrow-right-drop-circle' : 'arrow-down-drop-circle',
    );
  };
  const toogleSubMenu = () => {
    setShowSubMenu(!showSubMenu);
    setShowIcon(
      showSubMenu ? 'arrow-right-drop-circle' : 'arrow-down-drop-circle',
    );
  };
  const toogleVendorSubMenu = () => {
    setShowVendorSubMenu(!showVendorSubMenu);
    setShowVendorIcon(
      showVendorSubMenu ? 'arrow-right-drop-circle' : 'arrow-down-drop-circle',
    );
  };
  const toogleLeadSubMenu = () => {
    setShowLeadSubMenu(!showLeadSubMenu);
    setShowLeadIcon(
      showLeadSubMenu ? 'arrow-right-drop-circle' : 'arrow-down-drop-circle',
    );
  };

  

  return (
    <View style={{flex: 1, backgroundColor:'#07009E'}}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{backgroundColor: '#07009E'}}>
        <ImageBackground
          source={require('../assets/images/Rectangle1.2.png')}
          style={{alignItems: 'center', padding: 50, height: 200}}>
          <Image
            source={{
              uri: 'https://img.freepik.com/premium-vector/young-smiling-man-avatar-man-with-brown-beard-mustache-hair-wearing-yellow-sweater-sweatshirt-3d-vector-people-character-illustration-cartoon-minimal-style_365941-860.jpg',
            }}
            style={{height: 100, width: 100, borderRadius: 10}}
          />
          <Text
            style={{
              color: '#FFFFFF',
              marginTop: 10,
              fontFamily: 'Nunito-SemiBold',
            }}>
           Yuvarj
          </Text>
        </ImageBackground>
        <View style={{borderBottomWidth:3, borderColor:'#FFFFFF'}}></View>
        <View style={{flex: 1, backgroundColor: '#07009E', paddingTop: 10}}>
          <DrawerItem
            label="Dashboard"
            labelStyle={styles.ItemText}
            onPress={() => {
              navigation.navigate('Dashboard')
            }}
            icon={({color, size, focused}) => (
              <Icon name="speedometer" color={'#FFFFFF'} size={20} />
            )}
          />
          <DrawerItem
            label={() => (
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={styles.ItemText}>Projects</Text>
                <Icon4
                  name={showIcon}
                  size={15}
                  color={'#FFFFFF'}
                  style={{marginLeft: 129.9}}
                />
              </View>
            )}
            labelStyle={styles.ItemText}
            onPress={toogleSubMenu}
            icon={({color, size, focused}) => (
              <Icon2 name="project" color={'#FFFFFF'} size={20} />
            )}
          />

          {showSubMenu && (
            <>
              <DrawerItem
                label="List"
                labelStyle={styles.SubMenuText}
                onPress={() => {
                  navigation.navigate('ProjectList');
                }}
                icon={() => (
                  <Icon3
                    name="table-list"
                    color={'#FFFFFF'}
                    size={15}
                    style={{marginLeft: 10}}
                  />
                )}
              />
              <DrawerItem
                label="Add New Project"
                labelStyle={styles.SubMenuText}
                onPress={() => {
                  navigation.navigate('ProjectAdd');
                }}
                icon={() => (
                  <Icon
                    name="add-circle"
                    color={'#FFFFFF'}
                    size={15}
                    style={{marginLeft: 10}}
                  />
                )}
              />
            </>
          )}
          <DrawerItem
            label={() => (
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={styles.ItemText}>Client</Text>
                <Icon4
                  name={showClientIcon}
                  size={15}
                  color={'#FFFFFF'}
                  style={{marginLeft: 145}}
                />
              </View>
            )}
            labelStyle={styles.ItemText}
            onPress={toogleClientSubMenu}
            icon={({color, size, focused}) => (
              <Icon5 name="users" color={'#FFFFFF'} size={20} />
            )}
          />

          {showClientSubMenu && (
            <>
              <DrawerItem
                label="List"
                labelStyle={styles.SubMenuText}
                onPress={() => {
                  navigation.navigate('ClientList');
                }}
                icon={() => (
                  <Icon3
                    name="table-list"
                    color={'#FFFFFF'}
                    size={15}
                    style={{marginLeft: 10}}
                  />
                )}
              />
              <DrawerItem
                label="Add New Client"
                labelStyle={styles.SubMenuText}
                onPress={() => {
                  navigation.navigate('ClientAdd');
                }}
                icon={() => (
                  <Icon
                    name="add-circle"
                    color={'#FFFFFF'}
                    size={15}
                    style={{marginLeft: 10}}
                  />
                )}
              />
            </>
          )}
          <DrawerItem
            label={() => (
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={styles.ItemText}>Vendor</Text>
                <Icon4
                  name={showVendorIcon}
                  size={15}
                  color={'#FFFFFF'}
                  style={{marginLeft: 136}}
                />
              </View>
            )}
            labelStyle={styles.ItemText}
            onPress={toogleVendorSubMenu}
            icon={({color, size, focused}) => (
              <Icon3 name="list-check" color={'#FFFFFF'} size={20} />
            )}
          />

          {showVendorSubMenu && (
            <>
              <DrawerItem
                label="List"
                labelStyle={styles.SubMenuText}
                onPress={() => {
                  navigation.navigate('VendorList');
                }}
                icon={() => (
                  <Icon3
                    name="table-list"
                    color={'#FFFFFF'}
                    size={15}
                    style={{marginLeft: 10}}
                  />
                )}
              />
              <DrawerItem
                label="Add New Vendor"
                labelStyle={styles.SubMenuText}
                onPress={() => {
                  navigation.navigate('VendorAdd');
                }}
                icon={() => (
                  <Icon
                    name="add-circle"
                    color={'#FFFFFF'}
                    size={15}
                    style={{marginLeft: 10}}
                  />
                )}
              />
            </>
          )}
          <DrawerItem
            label={() => (
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={styles.ItemText}>Leads</Text>
                <Icon4
                  name={showLeadIcon}
                  size={15}
                  color={'#FFFFFF'}
                  style={{marginLeft: 140.9}}
                />
              </View>
            )}
            labelStyle={styles.ItemText}
            onPress={toogleLeadSubMenu}
            icon={({color, size, focused}) => (
              <Icon6 name="project-diagram" color={'#FFFFFF'} size={20} />
            )}
          />

          {showLeadSubMenu && (
            <>
              <DrawerItem
                label="List"
                labelStyle={styles.SubMenuText}
                onPress={() => {
                  navigation.navigate('LeadList');
                }}
                icon={() => (
                  <Icon3
                    name="table-list"
                    color={'#FFFFFF'}
                    size={15}
                    style={{marginLeft: 10}}
                  />
                )}
              />
              <DrawerItem
                label="Add New Leads"
                labelStyle={styles.SubMenuText}
                onPress={() => {
                  navigation.navigate('LeadAdd');
                }}
                icon={() => (
                  <Icon
                    name="add-circle"
                    color={'#FFFFFF'}
                    size={15}
                    style={{marginLeft: 10}}
                  />
                )}
              />
            </>
          )}
           <DrawerItem
            label="Auto Assign"
            labelStyle={styles.ItemText}
            onPress={() => {
              navigation.navigate('AutoAssign')}}
            icon={({color, size, focused}) => (
              <Icon6 name="handshake" color={'#FFFFFF'} size={20} />
            )}
          />
          
        </View>
      </DrawerContentScrollView>
      <View style={{padding: 20, borderTopWidth: 3, borderTopColor: '#FFFFFF' }}>
        <TouchableOpacity style={{flexDirection:'row', alignItems:'center'}}>
          <Icon5 name='sign-out' color={'#FFFFFF'} size={20}/>
          <Text style={{color:'#FFFFFF', fontFamily: 'Nunito-Bold', marginLeft:10}}>Sign Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  ItemText: {
    color: '#FFFFFF',
    fontFamily: 'Nunito-Bold',
    fontSize: 16,
    marginLeft: -20,
  },
  SubMenuText: {
    color: '#FFFFFF',
    fontFamily: 'Nunito-Regular',
    fontSize: 15,
    marginLeft: -20,
  },
});
