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
import Welcome from './modules/User/Welcome';
import Resume from './modules/Components/Resume';
import { Container } from 'native-base';
import { ScreenStackHeaderCenterView } from 'react-native-screens';

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

            <Stack.Screen name="Welcome" component={Welcome} />

            <Stack.Screen name="Resume" component={Resume} />
            
          </Stack.Navigator>
        </NavigationContainer>
      );
    }

}

export default App;