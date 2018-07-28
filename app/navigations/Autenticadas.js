import React from 'react';
import {Platform, Text, Image} from 'react-native';
import Logo from '../components/Logo';
import LogoAndTitle from '../components/LogoAndTitle';
import {createBottomTabNavigator, createStackNavigator, createDrawerNavigator} from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import TabBarIcon from '../components/TabBarIcon';
import { StackHome } from './StackHome';
import NotificationsScreen from '../screens/NotificationsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import LogoutScreen from '../screens/Logout';
//import ChequeoScreen from '../screens/ChequeoScreen';
import StackChequeo from './StackChequeo';
import fondo from '../../assets/images/fondo.jpg';

const navigationOptions = {
    navigationOptions: {
        title: 'Pedidos Xico',
        headerTitle: <LogoAndTitle/>,
        headerStyle: {
            backgroundColor: '#ED8032'
            //backgroundColor: '#1C277C'
        },
        headerTitleStyle: {
            textAlign: 'center',
            alignSelf: 'center',
            fontSize: 20,
            color: '#fff',
            fontWeight: 'bold'
        },
        headerLeft: (navigation) => <Logo navigation={navigation} />,
    }
}

/*const logo = (navigation) => <Image
    source={require('../../assets/images/logo.png')}
    width={40}
    height={20}
    onPress={() => navigation.openDrawer()}
/>*/

const leftIcon = (navigation, icon) => <Icon
    name={icon}
    style={{marginLeft: 20}}
    size={20}
    color="white"
    onPress={() => navigation.openDrawer()}
/>;

const rightIcon = (navigation, icon) => <Icon
    name={icon}
    style={{marginLeft: 20, marginRight: 10}}
    size={30}
    color="white"
    onPress={() => navigation.navigate('ListRestaurants')}
/>;

/*const Home = createStackNavigator({
    Home: {
        screen: StackHome,
    }
}, navigationOptions);

Home.navigationOptions = {
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
}*/

const Notifications = createStackNavigator({
    Notifications: {
        screen: NotificationsScreen
    },
    navigationOptions: ({navigation}) => ({
        headerLeft: leftIcon(navigation, 'bars'),
    })
}, navigationOptions);

Notifications.navigationOptions = {
    tabBarLabel: 'Notificaciones',
    tabBarIcon: ({focused}) => (
        <TabBarIcon
            focused={focused}
            name={
                Platform.OS === 'ios'
                    ? `ios-notifications${focused ? '' : '-outline'}`
                    : 'md-notifications'
            }
        />
    )
}

const Profile = createStackNavigator({
    Profile: {
        screen: ProfileScreen
    },
    navigationOptions: ({navigation}) => ({
        headerLeft: leftIcon(navigation, 'bars'),
    })
}, navigationOptions);

Profile.navigationOptions = {
    tabBarLabel: 'Perfil',
    tabBarIcon: ({focused}) => (
        <TabBarIcon
            focused={focused}
            name={
                Platform.OS === 'ios'
                    ? `ios-contact${focused ? '' : '-outline'}`
                    : 'md-contact'
            }
        />
    )
}

const Logout = createStackNavigator({
    LogoutScreen: {
        screen: LogoutScreen,
        navigationOptions: ({navigation}) => {
            
        }
    }
})

const Autenticadas = createBottomTabNavigator({
    Home: {
        screen: StackHome
    },

    Notifications,
    Profile
});

export default createDrawerNavigator({
    Autenticadas: {
        screen: Autenticadas,
        navigationOptions: ({navigationOptions}) => ({
            drawerLabel: 'Home',
            drawerIcon: ({tintColor}) => (<Icon name="home" size={{color: tintColor}} />)
        })
    },
    Chequeo: {
        screen: StackChequeo,
        navigationOptions: ({navigation}) => ({
            drawerLabel: 'Chequeo de precios',
            drawerIcon: ({tintColor}) => (<Icon name="money" size={24} style={{color: tintColor}} />)
        }),
    },
    Logout: {
        screen: Logout,
        navigationOptions: ({navigation}) => ({
            drawerLabel: 'Cerrar sesión',
            drawerIcon: ({tintColor}) => (<Icon name="sign-out" size={24} style={{color: tintColor}} />)
        }),
    }
}, {
    drawerBackgroundColor: 'rgba(237, 128, 50, 0.7)',
    //drawerBackgroundColor: fondo,
    contentOptions: {
        activeTintColor: 'white',
        activeBackgroundColor: 'transparent',
        inactiveTintColor: 'white',
        itemsContainerStyle: {
            marginVertical: 0
        }
    }
})

/*const Autenticadas = createBottomTabNavigator({
    Home: {
        screen: StackHome,
        navigationOptions: {
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
    },
    Notifications: {
        screen: NotificationsScreen,
        navigationOptions: {
            tabBarLabel: 'Notificaciones',
            tabBarIcon: ({focused}) => (
                <TabBarIcon
                    focused={focused}
                    name={
                        Platform.OS === 'ios'
                            ? `ios-notifications${focused ? '' : '-outline'}`
                            : 'md-notifications'
                    }
                />
            )
        }
    },
    Profile: {
        screen: ProfileScreen,
        navigationOptions: {
            tabBarLabel: 'Perfil',
            tabBarIcon: ({focused}) => (
                <TabBarIcon
                    focused={focused}
                    name={
                        Platform.OS === 'ios'
                            ? `ios-contact${focused ? '' : '-outline'}`
                            : 'md-contact'
                    }
                />
            )
        }
    }
}, navigationOptions);*/

//export { Autenticadas };