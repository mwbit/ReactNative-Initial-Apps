import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

class BarraNavegacao extends Component {
  render() {
    return (
      <View style={styles.barraTitulo}>
        <Text style={styles.titulo}>MW Consultoria</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create( {
    barraTitulo: {
      backgroundColor : '#CCC',
      padding: 10,
      height : 60
     },
    titulo:{
      flex: 1,
      fontSize: 18,
      marginTop: 10,
      textAlign: 'center',
      color: "#000"
  
    }
  })
  
  
export default BarraNavegacao