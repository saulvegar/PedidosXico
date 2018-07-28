import React from 'react';
import PreLoader from './app/components/PreLoader';
import firebaseConfig from './app/utils/firebase';
import * as firebase from 'firebase';
import {Text} from "react-native";
firebase.initializeApp(firebaseConfig);

import LoginNavigation from './app/navigations/LoginNavigator';
import Autenticadas from './app/navigations/Autenticadas';

console.disableYellowBox = true;

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            isLogged: false,
            loaded: false,
            gerente: false,
            region: '',
        }
    }

    async componentDidMount() {
        await firebase.auth().onAuthStateChanged((user) => {
            if(user !== null) {
                this.setState({
                    isLogged: true,
                    loaded: true
                })
                firebase.database().ref(`usuarios/tiendas/supervisoras${user.uid}`).once('value', snapshot => {
                    //let puesto = snapshot.val().puesto;
                    //let region = snapshot.val().region;
                    //(puesto === 'Gerente') ? this.setState({gerente: true, region: region}) : this.setState({region: region});
                })

            }
            else {
                this.setState({
                    isLogged: false,
                    loaded: true
                })
            }
        })
    }

    render() {
        const {isLogged, loaded} = this.state;
        if(!loaded) {
            return(<PreLoader/>)
        }
        if(isLogged) {
            return(<Autenticadas />);
        }
        else {
            return(<LoginNavigation />);
        }
  }
}
