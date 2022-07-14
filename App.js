import React from "react";
import {Provider as PaperProvider} from 'react-native-paper'
// import { exp } from "react-native/Libraries/Animated/Easing";
import AppNavigator from './src/navigation/index'
//import {Provider as NoteProvider} from './src/context/NoteContext'
import {Provider as NoteProvider} from './src/context/FuelContext'
export default function App(){
  return(
    <NoteProvider>
    {/* <PaperProvider> */}
      <AppNavigator/>
      {/* </PaperProvider> */}
     </NoteProvider>
  
    
  )
}
