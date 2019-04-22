import React, { Component } from 'react'
import { Text, StyleSheet, View , TouchableOpacity} from 'react-native'

export default class Step1 extends Component {
  render() {
    return (
      <View style={styles.container} >
        <Text> Step1 Page </Text>
        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Step2')} ><Text>go Step2</Text></TouchableOpacity>
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
