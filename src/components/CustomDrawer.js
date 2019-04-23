import React, { Component } from 'react'
import { Text, StyleSheet, View ,TouchableOpacity} from 'react-native'

export default class CustomDrawer extends Component {
  render() {
    return (
      <View style={styles.container} >
      <Text> CustomDrawer </Text>
        <TouchableOpacity onPress={()=>{this.props.navigation.closeDrawer(); this.props.navigation.navigate('About')}} ><Text>go About</Text></TouchableOpacity>
        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Setting')} ><Text>go Setting</Text></TouchableOpacity>
        
      </View>
    )
  }
}

const styles = StyleSheet.create({

    container:{
        flex:1,
        position:'relative',
        zIndex: 100,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

