//import { useNavigation } from '@react-navigation/core'
import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text,TextInput, TouchableOpacity, View, FlatList } from 'react-native'
import { auth, fireDB } from '../firebase'
import { UserDetails, UserDetailsCollectionRef } from '../models/userDetails';

const AddList = () => {
  const [userDetails, setUserDetails] = useState([]);
  const navigation = useNavigation();

  // Instead of defining multiple instance of firedb collection ref
  // i only initiate only one instance in model and referring here
  useEffect(() => {
    //const ref = fireDB.collection('userDetails');
    UserDetailsCollectionRef.onSnapshot((query) => {
      const objs = [];
      //console.log("after snapshot query ==", {query});
      query.forEach((doc) => {
        //console.log("inside for each loop value =", {doc})
        objs.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      //console.log({objs})
      setUserDetails(objs);
    })
  }, []);

  const handleSignOut = () => {
    auth.signOut()
      .then(() => {
        navigation.replace("Login");
      })
      .catch(error => alert(error.message));
  }

  const handleAddItems = async () => {
    // const currentUserId = auth.currentUser.uid;
    // const dataObj = { uid: currentUserId, name: `some name`, completed: false};
    // const detailInstance = new UserDetails(dataObj);
    // await detailInstance.addUserDetails();
    navigation.replace("ListCreate")
  }


  const handleDelete = async (id) => {
    const ref = fireDB.collection('userDetails').doc(id); // we are fetching value with id function
    // basically this call return promise. which we are handling and removing those entry below.
    try {
      await ref.delete()
    } catch (error) {
      console.log("inside error ==", {error});
    }
  }

  const handleEditItems = async (id) => {
    const detailInstance = new UserDetails({uid: id});
    detailInstance.updateUserDetails({
      completed: true
    });
  }

  return (
    <View style={styles.container}>
     <View>
     <Text  style={styles.texts}>Enter Fuel Type</Text>
        <TextInput
          style={styles.textInput}
           placeholder="Fuel Type"
        />
      </View>
      <View>
        <Text>Enter Litres / charge unit here  </Text>
        <TextInput
          style={styles.textInput}
         placeholder="Enter details of fuel used"
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          
          style={styles.button}
        >
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
       
      </View>
    </View>
  )
}

export default AddList

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    justifyContent: 'center',
    padding: 15,
    //alignItems: 'center'
  },
   button: {
    backgroundColor: '#00008b',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 40,
  },
  inputContainer: {
    width: '80%'
  },
  input: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  
  textInput: {
    height : 40,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    borderLeftWidth :1,
    borderRightWidth:1,
    borderTopWidth:1,
    marginBottom: 15,
    paddingVertical: 4,
    paddingHorizontal: 2,
    textAlignVertical: 'top'
},
})
