import React, { Component } from 'react'
import { Text, StyleSheet, View , TouchableOpacity} from 'react-native'

export default class Signin extends Component {
  render() {
    return (
      <View style={styles.container} >
        <Text> Signin Page </Text>
        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Signup')} ><Text>Signup</Text></TouchableOpacity>
        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Dashboard')} ><Text>Dashboard</Text></TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({

    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})
