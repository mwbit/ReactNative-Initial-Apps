import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View
} from 'react-native'

import ListaItens from './src/components/ListaItens'

export default class App extends Component {
  render() {
    return (
      <ListaItens/>  
    )
  }
}
