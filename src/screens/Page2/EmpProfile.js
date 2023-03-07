import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Pressable, TouchableOpacity, LoadingView , FlatList} from "react-native";
import { Modal, Portal, Button, Provider } from 'react-native-paper';
import ProfileDetails from "./ProfileDetails";

import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import { Camera, useCameraDevices } from "react-native-vision-camera";
import Geolocation from '@react-native-community/geolocation';


const EmpProfile = ({route, navigation}) =>{  
  // const [data, setData]= useState();
  const { id } = route.params;

  const [position, setPosition] = useState();

  
  const [visible, setVisible] = React.useState(false);
  // const devices = useCameraDevices();
  // const device = devices.back;

  

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {backgroundColor: 'white', padding: 20, margin: 10};

  const optCamera = () =>{

    
    launchCamera();
    console.log('***EmpProfile optCamera');
  //if (device == null) return <LoadingView />
  
  // return (
  //   <View>
  //   <Camera
  //     style={StyleSheet.absoluteFill}
  //     device={device}
  //     isActive={true}
  //   />
  //   {console.log('***EmpProfile optCamera')}
  //   </View>
  //   )
    };

  const optGallery = () =>{
    console.log('***EmpProfile optGallery');
    launchImageLibrary();
  }

  
    Geolocation.getCurrentPosition(
      (pos) => {
        setPosition(JSON.stringify(pos));
      },
      (error) => Alert.alert('GetCurrentPosition Error', JSON.stringify(error)),
      { enableHighAccuracy: true }
    );
    
    
    const [fetchEmployees, setFetchEmployees] = useState();
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
        console.log('***EmpProfile useEffect id',id)
        fetch(`https://dummy.restapiexample.com/api/v1/employee/${id}`)
        .then(response => {
          console.log('*** response.status', response.status,'  response.ok', response.ok);
          return response.json();
        })
      .then(resData => {
        
          const abcd = resData.data.map( post => {
            console.log('***resdata',resData);
            return {
              id: post.id,
              age: post.employee_age,
              name: post.employee_name,
              salary: post.employee_salary,
              //image: employees.profile_image,
            };
            
          });
          
          // console.log('*** Home fetchedEmployees', fetchEmployees);
          setFetchEmployees(abcd);
          setLoading(false);
          
        })
        .catch((error)=>{
          console.error('*** Error', error.message);
          //setLoading(false);
        })
        
      }, []);
      
    // if (loading) {
    //   return <Text>Loading..</Text>;
    // }
  
    function renderEmployees({item}) {
      const emp = {
        id: item.id,
        age: item.age,
        name: item.name,
        salary: item.salary,
        image: item.image,
      };
  
      return <ProfileDetails post={emp} />;
    }
    


    return(
    <Provider>
      <Portal>
        <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
        <TouchableOpacity style={{alignItems: 'center'}}>
            <Text onPress={optCamera} style={{fontWeight: 'bold'}}>Take Picture</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={optGallery} style={{marginTop: 7, alignItems: 'center'}}>
            <Text style={{fontWeight: 'bold'}}>Upload Picture</Text>
            </TouchableOpacity>

          {/* <Button title='Take Pickture' style={{color: 'blue'}} />
          <Button title='Upload from Camera'/> */}
        </Modal>
      </Portal>
      <View style={styles.boxContainer}>
      <Pressable onPress={showModal} style={styles.profile}>
      
       
            <Text style={{fontWeight: 'bold', color: 'black' }}>Profile..</Text>
       
      </Pressable>
      
      <View>
      {!loading &&
        <FlatList
          data={fetchEmployees}
          renderItem={renderEmployees}
          keyExtractor={item => item.id}
        />
      }
      </View>
      
      <Text style={{fontWeight: 'bold', color: 'blue', marginTop: 5 }}>Location</Text>
      <Text style={{marginRight: 15, marginLeft: 15, color: 'grey'}}>{position}</Text>
      
      </View>
      
    </Provider>
    )
}

const styles = StyleSheet.create({
    boxContainer:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    
    },
    profile:{
        borderWidth: 2,
        padding: 50,
        paddingRight: 35,
        paddingLeft: 35,
        borderRadius: 100,
        borderColor: 'lightblue',
        backgroundColor: 'lightgrey',
        marginBottom: 10,
    }
    
  });

export default EmpProfile;