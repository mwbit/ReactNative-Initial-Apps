
import React, { Component } from 'react';
import {
  Text,
  View,
  Button,
  Image,
  StyleSheet
} from 'react-native'

import Topo from './src/components/topo'
import Icone from './src/components/icone'

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {escolhaUsuario:'', escolhaComputador:'',resultado:''}
  }

  jokenPo(escolhaUsuario) {
    let escolhaComp=''
    let numRandom = Math.floor(Math.random() * 3)
    
    switch (numRandom) {
      case 0: escolhaComp = 'Pedra';  break;
      case 1: escolhaComp = 'Papel';  break;
      case 2: escolhaComp = 'Tesoura';  break;
    }

    let resultado = ''

    if(escolhaComp ==='Pedra'){
      if(escolhaUsuario === 'Pedra'){
        resultado = 'Empate.'
      }
      if(escolhaUsuario === 'Papel'){
        resultado='Usuário Ganhou.'
      }
      if(escolhaUsuario === 'Tesoura'){
        resultado = 'Computador Ganhou.'
      }

    }
      
    if(escolhaComp ==='Papel'){
      if(escolhaUsuario === 'Papel'){
        resultado = 'Empate.'
      }
      if(escolhaUsuario === 'Tesoura'){
        resultado='Usuário Ganhou.'
      }
      if(escolhaUsuario === 'Pedra'){
        resultado='Computador Ganhou.'
      }
    }

    if(escolhaComp=='Tesoura'){
      if(escolhaUsuario == 'Tesoura'){
        resultado='Empate.'
      }
      if(escolhaUsuario == 'Pedra'){
        resultado='Usuário Ganhou.'
      }
      if(escolhaUsuario == 'Papel'){
        resultado='Computador Ganhou.'
      }
    }


    this.setState({escolhaUsuario:escolhaUsuario, escolhaComputador:escolhaComp, resultado:resultado})
  }

  render() {
    return (
      <View>
        <Topo/>
        <View style={styles.painelAcoes}>
          <View style={styles.btnEscolha}>
            <Button title ="Pedra" onPress = {()=>{this.jokenPo('Pedra')}} />
          </View>
          <View style={styles.btnEscolha}>
            <Button title ="Papel" onPress = {()=>{this.jokenPo('Papel')}} />
          </View>
          <View style={styles.btnEscolha}>
            <Button title ="Tesoura" onPress = {()=>{this.jokenPo('Tesoura')}} />
          </View>
        </View>
        <View style={styles.palco}>
          <Text style={styles.txtResultado}>{this.state.resultado}</Text>
          <Icone escolha={this.state.escolhaComputador} jogador='Computador'></Icone>   
          <Icone escolha={this.state.escolhaUsuario} jogador='Usuario'></Icone>   
        </View>
      </View>  
    )
  }
}

const styles = StyleSheet.create({
  btnEscolha:{
    width: 90
  },
  painelAcoes:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding:15
  },
  palco:{
    alignItems: 'center',
    marginTop:10
  },
  txtResultado:{
    fontSize: 16,
    fontWeight: 'bold',
    color:'red'
  }
})
