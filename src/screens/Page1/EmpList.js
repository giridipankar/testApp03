//import { useNavigation, Link } from "@react-navigation/native";

import React from "react";

import { StyleSheet, View, Text, Pressable, ScrollView, FlatList } from "react-native";
import Employee from "./Employee";

 const EmpList = (props) => {
  
//const navigation = useNavigation();


return (


<ScrollView>
<Text>Employee List</Text>
{props.emp.map(item => (
        <Employee
          key={item.id}
          name={item.name}
        />
      ))}

     
</ScrollView>


);

}

export default EmpList;