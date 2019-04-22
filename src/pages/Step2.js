import React, { Component } from 'react'
import { Text, StyleSheet, View , TouchableOpacity} from 'react-native'

export default class Step2 extends Component {
  render() {
    return (
      <View style={styles.container} >
        <Text> Step2 Page </Text>
        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Signin')} ><Text>go Login</Text></TouchableOpacity>
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
