import { createContext } from "react";
// import { exp } from "react-native/Libraries/Animated/Easing";
import createDataContext from "./createDataContext";
export const ADD_FUEL = 'ADD_FUEL'
export const DELETE_FUEL = 'DELETE_FUEL'
const initialState = []
const fuelReducer = (state = initialState, action) =>{
  switch(action.type)  {
      case ADD_FUEL:
          return[...state, action.payload]

        case DELETE_FUEL:
            return state.filter(fuel => fuel.id !== action.payload)
       default:
           return state
  }
}
const addfuel = dispatch => async(fuel) => {
    dispatch ({type: ADD_FUEL,payload:fuel})
}
const deletefuel = dispatch => async(id) =>{
    dispatch({type: DELETE_FUEL,payload:id})
}
export const {Provider,Context} = createDataContext(fuelReducer,{addfuel,deletefuel}, [])