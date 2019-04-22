import React, { Component } from 'react'
import { Text, StyleSheet, View ,TouchableOpacity} from 'react-native'

export default class Signup extends Component {
  render() {
    return (
      <View style={styles.container} >
        <Text> Signup </Text>
        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Step1')} ><Text>Step1</Text></TouchableOpacity>
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
