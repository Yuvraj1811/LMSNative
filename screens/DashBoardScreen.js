import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import * as Progress from 'react-native-progress';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Feather from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons'

const DashBoardScreen = ({route}) => {

  // const {username} = route.params
  
  // console.log({username})
   return (
    <View style={styles.container}>
      <Text style={styles.title}>ADMIN</Text>
      <View style={{alignSelf:'flex-start', marginLeft:20}}>
        <View style={{flexDirection:'row', alignItems:'center', marginTop:20}}>
        <FontAwesome5 name='desktop' size={20} color={'#07009E'}/>
        <Text style={styles.text}>TOTAL LEADS</Text>
        </View>
        <Progress.Bar progress={0.5} width={200} color='#07009E' height={30} style={{marginTop:5}} />
       
        <View style={{flexDirection:'row', alignItems:'center', marginTop:20}}>
        <Feather name='phone-call' size={20} color={'#07009E'}/>
        <Text style={styles.text}>ATTEMPTED</Text>
        </View>
        <Progress.Bar progress={0.7} width={200} color='#07009E' height={30} style={{marginTop:5}} />
        <View style={{flexDirection:'row', alignItems:'center', marginTop:20}}>
        <FontAwesome5 name='fire' size={20} color={'#07009E'}/>
        <Text style={styles.text}>FRESH</Text>
        </View>
        <Progress.Bar progress={0.6} width={200} color='#07009E' height={30} style={{marginTop:5}} />
        <View style={{flexDirection:'row', alignItems:'center', marginTop:20}}>
        <FontAwesome5 name='calendar' size={20} color={'#07009E'}/>
        <Text style={styles.text}>THIS WEEK</Text>
        </View>
        <Progress.Bar progress={0.3} width={200} color='#07009E' height={30} style={{marginTop:5}} />
        <View style={{flexDirection:'row', alignItems:'center', marginTop:20}}>
        <Ionicons name='checkmark-done-sharp' size={20} color={'#07009E'}/>
        <Text style={styles.text}>VALID</Text>
        </View>
        <Progress.Bar progress={0.9} width={200} color='#07009E' height={30} style={{marginTop:5}} />
        <View style={{flexDirection:'row', alignItems:'center', marginTop:20}}>
        <Ionicons name='warning' size={20} color={'#07009E'}/>
        <Text style={styles.text}>INVALID</Text>
        </View>
        <Progress.Bar progress={0.7} width={200} color='#07009E' height={30} style={{marginTop:5}} />
      
      </View>
     
    </View>
  )
}

export default DashBoardScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems:'center'
  },

  title:{
    color: '#07009E',
    fontSize: 20,
    fontFamily: 'Nunito-Bold',
    marginLeft: 10,
    marginTop: 20,
  },
  text:{
    color:'#07009E',
    fontSize: 15,
    fontFamily: 'Nunito-Bold',
    marginLeft:10
    
  }

})