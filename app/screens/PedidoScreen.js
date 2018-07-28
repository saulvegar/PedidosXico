import React, {Component} from 'react';
import {Picker, ScrollView, Text, View, FlatList, StyleSheet, TouchableHighlight} from 'react-native';
import {Card, ListItem, FormLabel, FormInput, FormValidationMessage} from 'react-native-elements';
import * as firebase from 'firebase';
import {NavigationActions} from 'react-navigation';
import {options, Producto} from '../forms/producto';
import t from 'tcomb-form-native';
const Form = t.form.Form;
import Toast from 'react-native-simple-toast';

export default class PedidoScreen extends Component {
    constructor() {
        super();

        this.state = {
            region: '',
            tienda: '',
            producto: {
                nombre: '',
                pedidoPz: 0,
                degustacionPz: 0,
                cambioFisicoPz: 0,
                totalPz: 0,
                totalKg: 0
            },
            productosPedido: []
        }

        this.refProductos = firebase.database().ref('productos');
    }

    /*componentDidMount() {
        this.producto
    }*/

    onChange(producto) {
        console.log(producto)
        this.setState({
            producto: {
                nombre: producto.nombre,
                tienda: producto.tienda,
                pedidoPz: producto.pedidoPz,
                degustacion: producto.degustacionPz,
                cambioFisicoPz: producto.cambioFisicoPz,
                totalPz: (producto.pedidoPz + producto.degustacionPz + producto.cambioFisicoPz)
            }
        });
    }

    agregarProducto() {
        let {producto, productosPedido} = this.state;
        productosPedido.push(producto);
        this.setState({productosPedido});
    }

    renderProducto(producto) {
        return(
            <ListItem
                containerStyle={styles.item}
                titleStyle={styles.title}
                title={`${producto.producto} (Pedido Pz: ${producto.pedidoPz} Degustació Pz: ${producto.pedidoPz}`}

            />
        )
    }

    /*<Form
    ref="form"
    type={Producto}
    options={options}
    value={this.state.producto}
    onChange={(v) => this.onChange(v)}
    />*/

    render() {
        const {productosPedido} = this.state;

        return (
            <ScrollView>
                <Card style={styles.card}>
                    <View>
                        <FormLabel>Elige un producto</FormLabel>
                        <Picker

                        >
                            <Picker.Item label="PT-01-01"  value="PT-01-01" />
                            <Picker.Item label="PT-02-01" value="PT-02-01" />
                        </Picker>
                        <FormLabel>Tienda:</FormLabel>
                        <FormInput containerStyle={{borderBottomColor: '#000000', borderBottomWith: 1}}/>
                    </View>
                    <TouchableHighlight onPress={this.agregarProducto.bind(this)} style={styles.button} underlayColor='#007bff'>
                        <Text style={styles.buttonText}>Agregar producto</Text>
                    </TouchableHighlight>
                    <Text>Lista de productos</Text>
                    <FlatList
                        data={productosPedido}
                        renderItem={(data) => this.renderProducto(data.item)}
                    />
                </Card>
            </ScrollView>
        )
    }
}


const styles = StyleSheet.create({
    card: {
      marginBottom: 10,
    },
    buttonText: {
        fontSize: 18,
        color: 'white',
        alignSelf: 'center'
    },
    button: {
        height: 36,
        backgroundColor: '#1C277C',
        borderColor: '#1a237e',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 10,
        alignSelf: 'stretch',
        justifyContent: 'center'
    } ,
    item: {

    },
    title: {

    }
});
