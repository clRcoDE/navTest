import React, { Component } from 'react'
import { Text, StyleSheet, View , TouchableOpacity} from 'react-native'

export default class Dashboard extends Component {

  static navigationOptions = ({navigation})=>({
    headerLeft:(<TouchableOpacity onPress={()=>navigation.openDrawer()} ><Text>drawer</Text></TouchableOpacity>)
  })
  render() {
    return (
      <View style={styles.container} >
        <Text> Dashboard </Text>
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
