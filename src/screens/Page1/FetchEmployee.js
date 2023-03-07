import React, {useEffect, useState} from 'react';
import {Alert, FlatList, StyleSheet, Text, View} from 'react-native';
//import FetchedEmployees from '../component/FetchedEmployees';
// import Login from '../component/Login';
import Employee from './Employee';

function FetchEmployee() {
  const [fetchEmployees, setFetchEmployees] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://dummy.restapiexample.com/api/v1/employees')
      .then(response => {
        console.log(
          '*** response.status',
          response.status,
          '  response.ok',
          response.ok,
        );
        return response.json();
      })
      .then(resData => {
        // return console.log(resData);
        const fetchedEmployees = resData.data.map(employees => {
          return {
            id: employees.id,
            //age: employees.employee_age,
            name: employees.employee_name,
            //salary: employees.employee_salary,
            //image: employees.profile_image,
          };
        });
        // console.log('*** Home fetchedEmployees', fetchEmployees);
        setFetchEmployees(fetchedEmployees);
        setLoading(false);
      })
      .catch(error => {
        console.log('*** Error', error.message);
        //setLoading(false);
      });
  }, []);

  if (loading) {
    return <Text>Loading..</Text>;
  }

  function renderEmployees({item}) {
    const emp = {
      id: item.id,
      age: item.age,
      name: item.name,
      salary: item.salary,
      image: item.image,
    };

    return <Employee employees={emp} />;
  }

  return (
    <View style={styles.root}>
      <View>
        {!loading && (
          <FlatList
            data={fetchEmployees}
            renderItem={renderEmployees}
            keyExtractor={item => item.id}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    //alignItems: 'center'
  },
  rootContainer: {
    flex: 1,
  },
});

export default FetchEmployee;
