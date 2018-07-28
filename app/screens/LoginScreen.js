import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableHighlight} from 'react-native';
import BackgroundImage from '../components/BackgroundImage';
import SvgUri from 'react-native-svg-uri';
import t from 'tcomb-form-native';
import FormValidation from '../utils/validation';
import {Card} from 'react-native-elements';
const Form = t.form.Form;

import * as firebase from 'firebase';
import Toast from 'react-native-simple-toast';
import templates from '../utils/bootstrap';
import { Font } from 'expo';

export default class LoginScreen extends Component {
    constructor() {
        super();
        this.state = {
            fontLoaded: false
        };

        this.user = t.struct({
            usuario: FormValidation.usuario,
            contraseña: FormValidation.contraseña,
        });

        this.options = {
            auto: 'none',
            fields: {
                usuario: {
                    label: '',
                    placeholder: 'Usuario',
                    //help: 'Introduce tu usuario',
                    error: 'Usuario incorrecto',
                    autoCapitalize: 'none'
                },
                contraseña: {
                    label: '',
                    placeholder: 'Contraseña',
                    //help: 'Introduce tu contraseña',
                    error: 'Contraseña incorrecta',
                    password: true,
                    secureTextEntry: true
                }
            }
        }
    }

    async componentDidMount() {
        await Font.loadAsync({
            intelo: require('../../assets/fonts/Intelo/Intelo-Regular.ttf'),
        });

        this.setState({
            fontLoaded: true
        })
    }

    login() {
        const validate = this.refs.form.getValue();
        if(validate) {
            firebase.database().ref('usuarios/tiendas/supervisoras').orderByChild('username').equalTo(validate.usuario).once('child_added', snapshot => {
                if(snapshot) {
                    let email = snapshot.val().email;
                    firebase.auth().signInWithEmailAndPassword(email, validate.contraseña)
                        .then(() => {
                            Toast.showWithGravity('Bienvenido(a)', Toast.LONG, Toast.BOTTOM);
                        })
                        .catch((error) => {
                            const errorCode = error.code;
                            const errorMesage = error.message;
                            if(errorCode === 'auth/wrong-password') {
                                Toast.showWithGravity('Contraseña incorrecta', Toast.LONG, Toast.BOTTOM);
                            }
                            else {
                                Toast.showWithGravity(errorMessage, Toast.LONG, Toast.BOTTOM);
                            }
                        })
                }
            })
        }
    }

    render() {
        if(this.state.fontLoaded) {
            return(
                <BackgroundImage source={require('../../assets/images/bg-login.png')}>
                    <View>
                        <View style={{justifyContent: 'center', alignItems: 'center'}}>
                            <Image
                                style={styles.logo}
                                source={require('../../assets/images/logo.png')}
                            />
                        </View>
                        <Text style={styles.welcome}>Bienvenido(a)</Text>
                        <View style={styles.container}>
                            <Form
                                ref="form"
                                type={this.user}
                                options={this.options}
                                stylesheet={templates}
                            />
                            <TouchableHighlight style={styles.button} onPress={this.login.bind(this)} underlayColor='#007bff'>
                                <Text style={styles.buttonText}>Entrar</Text>
                            </TouchableHighlight>
                        </View>
                        <Text style={styles.text1}>¿Tienes problemas con la aplicación?</Text>
                        <Text style={styles.text}>Llamanos al (831) 23 40 800</Text>
                    </View>
                </BackgroundImage>
            )
        } else {
            return null;
        }
    }
}

const styles = StyleSheet.create({
    container: {
      padding: 20
    },
    logo: {
        width: 160,
        height: 105,
        marginTop: 70
    },
    field: {
      backgroundColor: '#fff'
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
    },
    welcome: {
        color: '#fff',
        textAlign: 'center',
        fontFamily: 'intelo',
        fontSize: 30
    },
    text1: {
        color: '#fff',
        textAlign: 'center',
        marginTop: 10
    },
    text: {
        color: '#fff',
        textAlign: 'center'
    }
});