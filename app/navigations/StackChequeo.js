import React from 'react';
import { Text, View, Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import ChequeoScreen from '../screens/ChequeoScreen';
import PedidoScreen from '../screens/PedidoScreen';
import TabBarIcon from '../components/TabBarIcon';
import Logo from '../components/Logo';
import LogoAndTitle from '../components/LogoAndTitle';
import Icon from 'react-native-vector-icons/FontAwesome';

const navigationOptions = {
    navigationOptions: {
        title: '',
        headerStyle: {
            backgroundColor: '#ED8032'
        },
        headerTitleStyle: {
            textAlign: 'center',
            alignSelf: 'center',
            fontSize: 20,
            color: '#fff',
            fontWeight: 'bold'
        },
    }
}

const leftIcon = (navigation, icon) => <Icon
    name={icon}
    style={{marginLeft: 20}}
    size={20}
    color="white"
    onPress={() => navigation.openDrawer()}
/>;

const StackChequeo = createStackNavigator({
    Chequeo: {
        screen: ChequeoScreen,
        navigationOptions: ({navigation}) => ({
            headerLeft: <Logo navigation={navigation} />,
            title: 'Pedidos Xico',
        })
    },
}, navigationOptions);

export default StackChequeo;