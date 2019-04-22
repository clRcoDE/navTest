

import {createAppContainer , createBottomTabNavigator , createDrawerNavigator , createStackNavigator , createSwitchNavigator} from 'react-navigation'

import About from '../pages/About'
import Dashboard from '../pages/Dashboard'
import Forget from '../pages/Forget'
import Setting from '../pages/Setting'
import Signin from '../pages/Signin'
import Signup from '../pages/Signup'
import Transactions from '../pages/Transactions'
import Transfer from '../pages/Transfer'




const BottomTabNavigator = createBottomTabNavigator(
    {
        Dashboard,
        Transactions,
        Transfer,
    }
)
const DrawerNavigator= createDrawerNavigator(
    {
        BottomTabNavigator,
        About,
        Setting
    },
{
 navigationOptions: ({ navigation }) => {
            return {
             drawerLockMode: 'locked-closed'
 
         }
   }
}
)
const LoginStack = createStackNavigator(
    {
        Signin,
        Signup,
        Forget
    }
)

const RootSwitch = createSwitchNavigator(
    {
        LoginStack ,
        DrawerNavigator,
    }
)

export default  AppContainer = createAppContainer(RootSwitch) 