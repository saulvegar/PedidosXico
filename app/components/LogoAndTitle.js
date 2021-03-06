import React, {Component} from 'react';
import {View, Image, Text, TouchableWithoutFeedback} from 'react-native';
//import Svg, { Use } from 'react-native-svg';

export default class LogoAndTitle extends Component {
    render() {
        let {title, navigation} = this.props;

        return(
            <View style={{flexDirection: 'row'}}>
                {/*<Svg width="60" height="40">
                    <Image href={require('../../assets/images/logo.svg')} />
                </Svg>*/}
                <TouchableWithoutFeedback
                    onPress={() => navigation.openDrawer()}
                >
                    <Image
                        source={require('../../assets/images/logo.png')}
                        style={{paddingLeft: 10, width:60, height:40}}
                    />
                </TouchableWithoutFeedback>
                <Text style={{marginLeft: 5, paddingTop: 5, fontSize: 20, color: '#fff', fontWeight: 'bold'}}>{title}</Text>
            </View>
        )
    }
}