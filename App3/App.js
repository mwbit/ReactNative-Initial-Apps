import React from 'react';
import { View, Text,Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

const HomeScreen = () => (
  
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Home Screen</Text>
    <Button
      onPress={() => navigation.navigate('Details')}
      title="Go to details"
    />
  </View>
);

const DetailsScreen = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Details Screen</Text>
  </View>
);

const RootNavigator = StackNavigator({
  Home: {
    screen: HomeScreen,
    headerTitle: 'Home'
  },
  Details: {
    screen: DetailsScreen,
    headerTitle: 'Detais'
  },
});

export default RootNavigator;





// import React, { Component } from 'react';
// import {
//   StyleSheet,
//   Text,
//   View,
//   StatusBar,
//   Button,
  
// } from 'react-native';

// import {DrawerNavigator} from 'react-navigation';

// import CenaPrincipal from './src/components/CenaPrincipal'
// import CenaClientes from './src/components/CenaClientes'
// import MyApp from './src/components/MyHomeScreen'

// class App extends Component {
  

//   render() {
    
//     return (
//       <View>
//         {/* <Button
//           title = "Cena Principal"
//           onPress = {()=>navigate('CenaPrincipal')}
//         />
//         */}
//         <MyApp/>
//       </View>
//     );
//   }
// }
// export default App