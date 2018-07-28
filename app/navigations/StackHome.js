import React from 'react';
import { Text, View, Image, Platform, TouchableWithoutFeedback } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import PedidoScreen from '../screens/PedidoScreen';
import TabBarIcon from '../components/TabBarIcon';
import Logo from '../components/Logo';
import LogoAndTitle from '../components/LogoAndTitle';
import Icon from 'react-native-vector-icons/FontAwesome';

const navigationOptions = {
    navigationOptions: {
        title: '',
        //headerTitle: <LogoAndTitle/>,
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

/*const logo = (navigation) => <TouchableWithoutFeedback
    onPress={() => navigation.openDrawer()}
>
    <Image
        source={require('../../assets/images/logo.png')}
        style={{marginLeft: 5, width:60, height:40}}

    />
</TouchableWithoutFeedback>*/

/*const logoAndTitle = (navigation) => <View style={{flexDirection: 'row'}}>
    <TouchableWithoutFeedback
        onPress={() => navigation.openDrawer()}
    >
        <Image
            source={require('../../assets/images/logo.png')}
            style={{marginLeft: 5, width:60, height:40}}

        />
    </TouchableWithoutFeedback>
    <Text style={{marginLeft: 5, paddingTop: 5, fontSize: 20, color: '#fff', fontWeight: 'bold'}}>Pedido</Text>
</View>*/


const leftIcon = (navigation, icon) => <Icon
    name={icon}
    style={{marginLeft: 20}}
    size={20}
    color="white"
    onPress={() => navigation.openDrawer()}
/>;

const StackHome = createStackNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: ({navigation}) => ({
            headerLeft: <Logo navigation={navigation} />,
            title: 'Pedidos Xico',
        })
    },
    Pedido: {
        screen: PedidoScreen,
        navigationOptions: ({navigation}) => ({
            //headerLeft: logo(navigation),
            headerTitle: <LogoAndTitle title='Pedido' navigation={navigation}/>,
        })
    },
}, navigationOptions);

StackHome.navigationOptions = {
    tabBarLabel: 'Inicio',
    tabBarIcon: ({focused}) => (
        <TabBarIcon
            focused={focused}
            name={
                Platform.OS === 'ios'
                    ? `ios-home${focused ? '' : '-outline'}`
                    : 'md-home'
            }
        />
    ),
}

export { StackHome };