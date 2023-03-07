import React from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';


function ProfileDetails({post}) {

const navigation= useNavigation();


return (
  <View 
  style={{flex:1, flexDirection: 'row',
   padding: 7, margin: 7, backgroundColor: 'lightcyan' }}>
    <Text style={{fontWeight: '450'}}>{post.name}</Text>
    <Text>{post.age}</Text>
    <Text>{post.salary}</Text>
  </View>
  

);
}

export default ProfileDetails;
