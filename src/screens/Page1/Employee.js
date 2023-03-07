import { PreventRemoveContext } from '@react-navigation/native';
import React from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';


function Employee({employees}) {

const navigation= useNavigation();
const id = employees.id;

return (
  <Pressable 
  style={{flex:1, flexDirection: 'row',
   padding: 7, margin: 7, backgroundColor: 'lightcyan' }} 
   onPress={()=> navigation.navigate('profile',{id})}>
    <Text>{id}.</Text>
    <Text style={{fontWeight: '450'}}>{employees.name}</Text>
    {/* <Text>{employees.age}</Text>
    <Text>{employees.salary}</Text> */}
  </Pressable>
  

);
}

export default Employee;
