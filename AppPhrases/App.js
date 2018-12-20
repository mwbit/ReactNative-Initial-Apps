import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert
} from 'react-native';
import image from './assets/img/imgs/logo.png'

const styles = {
  principal:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  botao:{
    backgroundColor:'#538530',
    paddingVertical: 10,
    paddingHorizontal:40,
    marginTop: 20
  },
  textoBotao:{
    color: 'white',
    fontSize:16,
    fontWeight: 'bold'
  }
}
 
const gerarNovaFrase = ()=>{
  let randomNumber = Math.random()
  randomNumber = Math.floor(randomNumber * 5)

  let frases = Array();

  frases[0]= 'Não existe um caminho para a felicidade, a felicidade é o caminho.'
  frases[1]= 'O que você tem, todo mundo pode ter, mas o que você é... ninguém pode ser.'
  frases[2]= 'A vida pode até te derrubar, mas é você quem escolhe a hora de se levantar.'
  frases[3]= 'Enquanto eu for uva, pode pisar em mim, mas quando eu for vinho, vai ter que me engolir.'
  frases[4]= 'Pode não dar certo, mas você só vai saber se arriscar.'
  
  Alert.alert('Frase do dia',frases[randomNumber]) 
}
export default class App extends Component {
  
  render() {
    const {principal,botao,textoBotao} = styles;
    return (
      <View style={principal}>
        <Image source = {image}/>

        <TouchableOpacity 
          style={botao}
          onPress={gerarNovaFrase}>
          <Text style={textoBotao}>Frases do Dia</Text>
        </TouchableOpacity>

      </View>

    );
  }
}

