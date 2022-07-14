import React, { useContext, useState } from 'react'
import { StyleSheet,View,FlatList } from 'react-native'
import {Text ,IconButton,FAB,List} from 'react-native-paper'
import Header from '../component/Header'
import {Context as FuelContext} from '../context/FuelContext'
function DeviceInfo({navigation}){
   
    
    return (
        <>
            <Header titleText='Device Info' />
            <IconButton
                icon="close"
                size={25}
                color='white'
                onPress={() => navigation.goBack()}
                style={styles.icon}
            />
            
        </>
    )
   
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#fff',
        paddingVertical: 20,
        paddingHorizontal: 10

    },
    titleContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    title: {
        fontSize: 25
    },
    listTitle: {
        fontSize: 25
    },
    icon: {
        backgroundColor: '#0782F9',
        position: 'absolute',
        right: 0,
        top: 50,
        margin: 10
    },
    fab: {
        backgroundColor: '#0782F9',
         margin: 20,
        right: 0,
        bottom: 10
    },
    fabs: {
        backgroundColor: '#0782F9',
        margin: 20,
        right: 0,
        bottom: 10
    },
   
})
 export default DeviceInfo