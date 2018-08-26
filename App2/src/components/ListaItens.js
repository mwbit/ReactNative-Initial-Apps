import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,ScrollView
} from 'react-native'

import Itens from './Itens'
import axios from 'axios'

class ListaItens extends Component {
    constructor(props){
        super(props)
        this.state = { listaItens: [] }
    }

    componentWillMount() {
      //requisção HTTP
      axios.get('http://faus.com.br/recursos/c/dmairr/api/itens.html')
        .then(response => { this.setState({ listaItens: response.data }); })
        .catch(() => { console.log('Erro ao recuperar os dados'); });
    }
  
    render() {
      return (
        <ScrollView style={{ backgroundColor: '#DDD' }}>
			    { this.state.listaItens.map(item => (<Itens key={item.titulo} item={item} />))}
        </ScrollView>
      )
   }
}

export default ListaItens