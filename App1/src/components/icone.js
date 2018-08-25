import React, { Component } from 'react';
import {Text,View,Image,StyleSheet} from 'react-native';

class Icone extends Component {
    render(){
      let pathIcone = ''    
      if(this.props.escolha == 'Pedra'){
        return(
          <View style={styles.icone}>
              <Text>Escolha do computador:{this.props.jogador}</Text>
              <Image source={require('../../img/pedra.png')} />
          </View>
        )
       }else if(this.props.escolha == 'Papel'){
       return(
         <View style={styles.icone}>
             <Text>Escolha do computador:{this.props.jogador}</Text>
             <Image source={require('../../img/papel.png')} />
         </View>
       )
      }else if(this.props.escolha == 'Tesoura'){
        return(
          <View style={styles.icone}>
              <Text>Escolha do computador:{this.props.jogador}</Text>
              <Image source={require('../../img/tesoura.png')} />
          </View>
        )
       }
      else{
        return false 
      }
      
    }
  }

  const styles = StyleSheet.create({
    icone:{
      alignItems: 'center'
    }
  })
  


export default Icone  