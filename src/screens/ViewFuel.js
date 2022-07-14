import React, { useContext, useState } from 'react'
import { StyleSheet,View,FlatList } from 'react-native'
import {Text ,IconButton,FAB,List} from 'react-native-paper'
import Header from '../component/Header'
import {Context as FuelContext} from '../context/FuelContext'
function ViewFuel({navigation}){
   //const [notes, setNotes] = useState([])
    const {state,addfuel,deletefuel} = useContext(FuelContext)
    const addFuel= fuel => {
        fuel.id = state.length + 1
        addfuel(fuel)
   // note.id = notes.length + 1
    //setNotes([...notes, note])
    }
    return (
        <>
            <Header titleText='Fuel Details' />
            <IconButton
                icon="close"
                size={25}
                color='white'
                onPress={() => navigation.goBack()}
                style={styles.icon}
            />
            <View style={styles.container}>
                {state.length === 0 ? (
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>You do not have any Record</Text>
                    </View>
                ) : (
                    <FlatList
                    ListHeaderComponent={()=><Text>Fuel Type</Text>}
                    //data ={data}
                     data={state}
                            renderItem={({ item }) => (
                                <List.Item
                                
                                    title={item.fuelTitle}
                                    description={item.fuelDescription}
                                    descriptionNumberOfLines={1}
                                    titleStyle={styles.listTitle}
                                    onPress = {() => deletefuel(item.id)}
                                />
                            )}
                            keyExtractor={item => item.id.toString()}
                        />
                    )}
                         

                
                <FAB
                    style={styles.fab}
                    small
                    icon='plus'
                    label='Create List'
                    onPress={() => navigation.navigate('AddFuel', {
                        addFuel })
                    }
                />
                <FAB
                    style={styles.fabs}
                    small
                    icon='plus'
                    label='Show Device INFO'
                    onPress={() => navigation.navigate('DeviceInfo')
                    }
                />
                
            </View>
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
 export default ViewFuel