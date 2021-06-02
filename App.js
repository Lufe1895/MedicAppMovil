import React, {Component} from 'react'

//Para React Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Para Native Base
import AppLoading from 'expo-app-loading'
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

// Modulos Propios
import Register from './modules/User/Register'
import Login from './modules/User/Login'
import Resume from './modules/Components/Resume';
import Profile from './modules/User/Profile';

import Medicines from './modules/User/Medicines';
import ShowM from './modules/User/ShowM';
import Pedidos from './modules/User/Pedidos';

const Stack = createStackNavigator();
// const MyContext = React.createContext();

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }
  
    render(){
      if (!this.state.isReady) {
        return <AppLoading />;
      }

      return(
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Login">

            <Stack.Screen name="Register" component={Register} />
          
            <Stack.Screen name="Login" component={Login} />

            <Stack.Screen name="Resume" component={Resume} />

            <Stack.Screen name="Medicines" component={Medicines} />

            <Stack.Screen name="Profile" component={Profile} />

            <Stack.Screen name="ShowM" component={ShowM} />

            <Stack.Screen name="Pedidos" component={Pedidos}/>
            
          </Stack.Navigator>
        </NavigationContainer>
      );
    }

}

export default App;