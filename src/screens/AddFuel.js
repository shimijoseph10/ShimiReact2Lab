import React, { useState } from 'react'
import { StyleSheet, View,TouchableOpacity } from 'react-native'
import { Text, IconButton, TextInput, FAB, Button } from 'react-native-paper'
import Header from '../component/Header'
function AddFuel({ navigation }) {
    const [fuelTitle, setFuelTitle] = useState('')
    const [fuelDescription, setFuelDescription] = useState('')

    function onSaveFuel() {
        navigation.state.params.addFuel({ fuelTitle, fuelDescription })
        navigation.goBack()
    }

    return (
        <>
            <Header titleText='Create List' />
            <IconButton
                icon="close"
                size={25}
                color='white'
                onPress={() => navigation.goBack()}
                style={styles.icon}
            />

            <View style={styles.container}>
                <TextInput
                    label="Fuel Type"
                    value={fuelTitle}
                    mode='outlined'
                    onChangeText={setFuelTitle}
                    style={styles.title}
                />
                <TextInput
                    label="Enter Litres/charge unit here"
                    value={fuelDescription}
                    onChangeText={setFuelDescription}
                    mode="outlined"
                   style={styles.title}
                    
                />
                <TouchableOpacity
         
          style={styles.button}
          onPress={() => onSaveFuel()}
        >
          <Text style={styles.buttonText}>Create</Text>
          
        </TouchableOpacity>
                {/* <FAB
                    style={styles.fab}
                    small
                    icon="check"
                    disabled={noteTitle == '' ? true : false}
                    onPress={() => onSaveNote()}
                /> */}
            </View>
        </>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingVertical: 20,
        paddingHorizontal: 10
    },
    icon: {
        backgroundColor: '#0782F9',
        position: 'absolute',
        right: 0,
        top: 40,
        margin: 10
    },
    titleContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    title: {
        fontSize: 24,
        marginBottom: 16
    },
    text: {
        height: 300,
        fontSize: 16
    },
    buttonContainer: {
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
      },
      button: {
        backgroundColor: '#0782F9',
        width: '100%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
      },
      buttonOutline: {
        backgroundColor: 'white',
        marginTop: 5,
        borderColor: '#0782F9',
        borderWidth: 2,
      },
      buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
      },
      buttonOutlineText: {
        color: '#0782F9',
        fontWeight: '700',
        fontSize: 16,
      },
    fab: {
        position: 'absolute',
        margin: 20,
        right: 0,
        bottom: 0,
        backgroundColor: '#219653'
    }

})

export default AddFuel