import React, { Component } from 'react';
import { Text, Button } from 'native-base';

export default class Register extends Component {

    handlerNavigate(navigateTo) {
        const { navigate } = this.props.navigation;
        navigate(navigateTo);
    }

    render() {
        return (
            <>
                <Text>Register</Text>
                <Button onPress={() => this.handlerNavigate('Login')}>
                    <Text>Login</Text>
                </Button>
            </>
        );
    }
}