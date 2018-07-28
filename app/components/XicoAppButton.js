import React, {Component} from 'react';
import {View, Image, Text, StyleSheet, TouchableNativeFeedback} from 'react-native';

export default class XicoAppButton extends Component {
    render() {
        const {width, height, src, text, action} = this.props;
        return (
            <TouchableNativeFeedback
                onPress={action}
                background={TouchableNativeFeedback.SelectableBackground()}>
                <View style={{padding: 5, justifyContent: 'center'}}>
                    <Image
                        source={src}
                        style={{width, height}}
                    />
                    <Text style={styles.texto}>{text}</Text>
                </View>
            </TouchableNativeFeedback>
            
        )
    }
}

const styles = StyleSheet.create({
    texto: {
        fontSize: 9,
        color: 'grey',
        textAlign: 'center'
    }
})