//import { useNavigation } from '@react-navigation/core'
import { useNavigation } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
} from "react-native";
import { auth, fireDB } from "../firebase";
import { UserDetails, UserDetailsCollectionRef } from "../models/userDetails";

const HomeScreen = ({ navigation}) => {
  const [userDetails, setUserDetails] = useState([]);
  //const navigation = useNavigation();

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
    });
  }, []);

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("LoginScreen");
      })
      .catch((error) => alert(error.message));
  };

  const handleAddItems = async () => {
    const currentUserId = auth.currentUser.uid;
    const dataObj = { uid: currentUserId, name: `some name`, completed: false };
    const detailInstance = new UserDetails(dataObj);
    await detailInstance.addUserDetails();
  };

  const handleDelete = async (id) => {
    const ref = fireDB.collection("userDetails").doc(id); // we are fetching value with id function
    // basically this call return promise. which we are handling and removing those entry below.
    try {
      await ref.delete();
    } catch (error) {
      console.log("inside error ==", { error });
    }
  };

  const handleEditItems = async (id) => {
    const detailInstance = new UserDetails({ uid: id });
    detailInstance.updateUserDetails({
      completed: true,
    });
  };

  return (
    <View style={styles.container}>
      <Text>Email: {auth.currentUser?.email}</Text>

      {userDetails.map((data) => (
        <Text
          style={{
            color: data.completed ? "green" : "red",
          }}
          key={data.id}
          onPress={() => handleEditItems(data.id)}
        >
          {data?.name}
        </Text>
      ))}
      <TouchableOpacity
        onPress={() => navigation.navigate("ViewFuel")}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Add items</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleSignOut} style={styles.button}>
        <Text style={styles.buttonText}>Sign out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#0782F9",
    width: "60%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 40,
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
});
