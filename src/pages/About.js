import React, { Component } from 'react'
import { Text, StyleSheet, View , TouchableOpacity} from 'react-native'

export default class About extends Component {
  static navigationOptions=({navigation})=>{
    return{
     headerStyle:{
      //  height:100,
       backgroundColor:'#fff'
     }
    }
  }
  // static navigationOptions = ({navigation})=>({
  //     headerLeft:(<TouchableOpacity  style={{backgroundColor:'red'}} onPress={()=>navigation.openDrawer()} ><Text>drawer</Text></TouchableOpacity>)
  //   })

  render() {
    return (
      <View style={styles.container} >
        <Text> About </Text>
        <TouchableOpacity onPress={()=>this.props.navigation.openDrawer()}><Text>Open Drawer</Text></TouchableOpacity>

      </View>
    )
  }
}

const styles = StyleSheet.create({

    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'steelblue'
    }
})
