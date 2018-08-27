import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image
} from 'react-native';

import BarraNavegacao from './BarraNavegacao'

const logo = require('../imgs/logo.png')
const cliente = require('../imgs/menu_cliente.png')
const contato = require('../imgs/menu_contato.png')
const empresa = require('../imgs/menu_empresa.png')
const servico = require('../imgs/menu_servico.png')

class CenaPrincipal extends Component {
  static navigationOptions = {
    title: 'Cena Principal'
  };
  render() {
    return (
        <View>
            <StatusBar
            backgroundColor = '#CCC'
            />
            <BarraNavegacao/>
            <View style={styles.logo}>
                <Image source = {logo}/>
            </View>    
            <View style = {styles.menu}>
                <View style = {styles.menuGrupo}>
                    <Image style = {styles.imgMenu} source = {cliente}/>
                    <Image style = {styles.imgMenu} source = {contato}/>
                </View>        
                <View style = {styles.menuGrupo}>    
                    <Image style = {styles.imgMenu} source = {empresa}/>
                    <Image style = {styles.imgMenu} source = {servico}/>
                </View>
            </View>            
        </View>
    );
  }
}

styles = StyleSheet.create({
    logo:{
        marginTop: 30,
        alignItems: 'center'
    },
    menu:{
        alignItems:'center'
    },
    menuGrupo:{
        flexDirection: 'row'
    },
    imgMenu:{
        margin:12
    }
})

export default CenaPrincipal