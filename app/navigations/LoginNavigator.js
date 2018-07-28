import React from 'react';
import {createStackNavigator} from 'react-navigation';
import LoginScreen from '../screens/LoginScreen';

export default createStackNavigator(
    {
        Login: {
            screen: LoginScreen
        }
    },
    {
        initialRouteName: 'Login',
        navigationOptions: {
            /*headerStyle: {
                backgroundColor: '#1C277C'
            },
            headerTitleStyle: {
                textAlign: 'center',
                alignSelf: 'center',
                fontSize: 20,
                color: '#fff',
                fontWeight: 'bold'
            },*/
            header: null
        }
    }
)