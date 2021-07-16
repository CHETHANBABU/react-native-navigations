import React, { Component } from 'react';
import { Card, Button, Text } from 'native-base';
import { View, StyleSheet } from 'react-native';
import { StringTypes, Validation } from '../../utils/helpers';
import { Mixins } from '../../styles';
import { TextInput, Colors, Avatar } from 'react-native-paper';

export default class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            inputs: {
                email: {
                    type: "email",
                    value: ""
                },
                password: {
                    type: "password",
                    value: ""
                }
            }
        };

        this.onInputChange = Validation.onInputChange.bind(this);
        this.getFormValidation = Validation.getFormValidation.bind(this);
        this.submit = this.submit.bind(this);
    }

    renderError(id) {
        const { inputs } = this.state;
        if (inputs[id].errorLabel) {
            return <Text style={styles.error}>{inputs[id].errorLabel}</Text>;
        }
        return null;
    }

    submit() {
        this.getFormValidation();
        if (this.getFormValidation()) {
            this.handlerNavigate('MyDrawer');
        }
    }

    handlerNavigate(navigateTo) {
        const { navigate } = this.props.navigation;
        navigate(navigateTo);
    }

    render() {
        return (
            <Card style={styles.card}>
                <View style={styles.innerContainer}>
                    <View style={styles.avatarImage}>
                        <Avatar.Image source={require('../../assets/images/heist.jpg')} />
                    </View>
                    <TextInput
                        style={styles.textTnput}
                        label={StringTypes.EMAIL}
                        returnKeyType="next"
                        autoCapitalize="none"
                        autoCompleteType="email"
                        textContentType="emailAddress"
                        keyboardType="email-address"
                        mode="flat"
                        onChangeText={value => this.onInputChange({ id: "email", value })}
                    />
                    {this.renderError("email")}
                    <TextInput
                        style={styles.textTnput}
                        placeholder={StringTypes.PASSWORD}
                        secureTextEntry
                        returnKeyType="done"
                        onChangeText={value => {
                            this.onInputChange({ id: "password", value });
                        }}
                    />
                    {this.renderError("password")}
                    <View style={styles.inputContainer}>
                        <Button style={{ justifyContent: 'center' }} onPress={this.submit}>
                            <Text>Login</Text>
                        </Button>
                    </View>
                </View>
            </Card>
        );
    }
}

const styles = StyleSheet.create({
    inputContainer: {
        top: 10,
        width: '95%',
        marginLeft: 10,
        marginRight: 10,
    },
    innerContainer: {
        marginTop: Mixins.calcHeight(20),
        justifyContent: 'center'
    },
    avatarImage: {
        top: 0, left: 0,
        right: 0, bottom: 0,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textTnput: {
        height: 40,
        borderBottomWidth: StyleSheet.hairlineWidth,
        marginBottom: 10,
        marginLeft: 10,
        marginRight: 10,
        borderColor: Colors.grey100,
        backgroundColor: Colors.white
    },
    card: {
        marginTop: 15,
        marginLeft: 10,
        marginBottom: 15,
        marginRight: 10,
        height: Mixins.calcHeight(90),
        backgroundColor: Colors.white,
    }
});