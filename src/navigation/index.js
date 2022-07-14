import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import HomeScreen from '../screens/HomeScreen'
import LoginScreen from '../screens/LoginScreen'
import AddFuel  from '../screens/AddFuel'
import ViewFuel  from '../screens/ViewFuel'
import DeviceInfo from '../screens/DeviceInfo'
//import { fireDB } from "./firebase";
const StackNavigator = createStackNavigator({

HomeScreen:{
    screen: HomeScreen

},
LoginScreen:{
    screen: LoginScreen
},
AddFuel:{
    screen: AddFuel
},
ViewFuel:{
    screen: ViewFuel
},
DeviceInfo :{
screen: DeviceInfo
},

},
{
     //initialRouteName: 'ViewNotes',
   initialRouteName: 'LoginScreen',
    headerMode : 'none',
    mode: 'modal'
}
)

export default createAppContainer(StackNavigator)


