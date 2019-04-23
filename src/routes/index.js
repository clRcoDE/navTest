

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

const DashboardStack = createStackNavigator(
    {
        Dashboard
    }
)

const BottomTabNavigator = createBottomTabNavigator(
    {
        DashboardStack,
        Transactions,
        Transfer,
    },
    {
       
    }
)


// const RootStack = createStackNavigator(
//     {
//         BottomTabNavigator,
//         About:{
//             screen:About,
//             navigationOptions: ({ navigation }) => {
//                 return {
//                  drawerLockMode:'locked-closed' 
     
//              }
//        }
//         },
        
        
//     }
// )


const DrawerNavigator= createDrawerNavigator(
    {
        BottomTabNavigator,
        
    },
{
    contentComponent:CustomDrawer,
    // headerMode:'none',
    // defaultNavigationOptions: ({ navigation }) => {
    //     return {
    //      drawerLockMode:'locked-closed' 

    //  }
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


const MainSwitch = createSwitchNavigator(
    {
        DrawerNavigator
    }
)
const MainStack = createStackNavigator(
    {
        MainSwitch,
        About
    },
    {
        defaultNavigationOptions:({navigation})=>{
            return{
                headerTransparent:true,
                headerStyle:{
                    height:100,
                    // backgroundColor:'transparent'
                }
            }
        }   // headerMode:'none'
       
    }
)
const RootSwitch = createSwitchNavigator(
    {
        LoginStack ,
        StepSwitch,
        MainStack   
     }
)

export default  AppContainer = createAppContainer(RootSwitch) 