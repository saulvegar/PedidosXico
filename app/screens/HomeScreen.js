import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import * as firebase from 'firebase';
import {NavigationActions} from 'react-navigation';
import XicoAppButton from '../components/XicoAppButton';

export default class HomeScreen extends Component {
    constructor() {
        super();
    }

    generarPedido() {
        const { navigate } = this.props.navigation;
        navigate('Pedido')
    }

    render() {
        return(
            <View style={styles.container}>
                <XicoAppButton
                    action={() => this.generarPedido()}
                    width={60}
                    height={60}
                    src={require('../../assets/images/icon-1.png')}
                    text="Generar pedido"
                />
                <XicoAppButton
                    width={60}
                    height={60}
                    src={require('../../assets/images/icon-4.png')}
                    text="Generar ticket"
                />
                <XicoAppButton
                    width={60}
                    height={60}
                    src={require('../../assets/images/icon-2.png')}
                    text="Existencias"
                />
                <XicoAppButton
                    width={60}
                    height={60}
                    src={require('../../assets/images/icon-ofertas.png')}
                    text="Ofertas"
                />
                <XicoAppButton
                    width={60}
                    height={60}
                    src={require('../../assets/images/icon-materials.png')}
                    text="Materiales"
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
    }
})



