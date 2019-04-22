

import {createAppContainer , createBottomTabNavigator , createDrawerNavigator , createStackNavigator , createSwitchNavigator} from 'react-navigation'

import About from '../pages/About'
import Dashboard from '../pages/Dashboard'
import Forget from '../pages/Forget'
import Setting from '../pages/Setting'
import Signin from '../pages/Signin'
import Signup from '../pages/Signup'
import Transactions from '../pages/Transactions'
import Transfer from '../pages/Transfer'

import Step1  from  '../pages/Step1'
import Step2 from '../pages/Step2'
import CustomDrawer from '../components/CustomDrawer'

const BottomTabNavigator = createBottomTabNavigator(
    {
        Dashboard,
        Transactions,
        Transfer,
    }
)
const RootStack = createStackNavigator(
    {
        BottomTabNavigator,
        About,
        Setting,
        
    }
)
const DrawerNavigator= createDrawerNavigator(
    {
        RootStack,
        
    },
{
    contentComponent:CustomDrawer,
 navigationOptions: ({ navigation }) => {
            return {
             drawerLockMode: 'locked-closed'
 
         }
   }
}
)

const StepSwitch = createSwitchNavigator(
    {
        Step1,
        Step2
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
        StepSwitch
    }
)

export default  AppContainer = createAppContainer(RootSwitch) 