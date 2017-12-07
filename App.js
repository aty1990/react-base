import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';


export default class App extends Component<{}> {
  render() {
    return (
        <View style={styles.container}>
            <View style={styles.child1}>
                <Text>12</Text>
            </View>
            <View style={styles.child2}>
            </View>
        </View>
    );
  }
}


var styles = StyleSheet.create({
    container:{
        margin:30,
        width:300,
        height:500,
        backgroundColor:"yellow",
        
    },
    child1:{
        width:100,
        height:100,
        height:500,
        backgroundColor:"green",
    },
    child2:{
        width:100,
        height:100,
        backgroundColor:"blue",
    }
})

