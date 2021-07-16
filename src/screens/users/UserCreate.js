import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Container, Button, Text } from 'native-base';
import { TextInput, Colors } from 'react-native-paper';
import { Header } from '../../components';
import { StringTypes, Validation, Sqlite } from '../../utils/helpers';
import { Mixins } from '../../styles';


export default class UserCreate extends Component {

    constructor(props) {
        super(props);

        this.state = {
            inputs: {
                name: {
                    type: "generic",
                    value: ""
                },
                username: {
                    type: "generic",
                    value: ""
                },
                email: {
                    type: "email",
                    value: ""
                },
                password: {
                    type: "password",
                    value: ""
                },
                pincode: {
                    type: "generic",
                    value: ""
                },
                address: {
                    type: "generic",
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
        let obj = this.state.inputs;
        const updatedInputs = {};
        for (const [key, input] of Object.entries(obj)) {
            updatedInputs[key] = input.value;
        }

        const execQueryPromise = Sqlite.executeQuery('INSERT INTO user (name, username, email, password, pincode, address) VALUES (?,?,?,?,?,?);',
            1, updatedInputs);
        execQueryPromise.then(res => {
            console.log('res 67', res);
        }, err => {
            console.log('err 70', err);

        });

    }

    render() {
        return (
            <Container>
                <Header title={'Create User'} onChange={() => this.props.navigation.toggleDrawer()} />
                <View style={styles.innerContainer}>
                    <TextInput
                        style={styles.textTnput}
                        label={StringTypes.NAME}
                        returnKeyType="next"
                        autoCapitalize="none"
                        mode="flat"
                        onChangeText={value => this.onInputChange({ id: "name", value })}
                    />
                    {this.renderError("name")}
                    <TextInput
                        style={styles.textTnput}
                        label={StringTypes.USERNAME}
                        returnKeyType="next"
                        autoCapitalize="none"
                        mode="flat"
                        onChangeText={value => this.onInputChange({ id: "username", value })}
                    />
                    {this.renderError("username")}
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
                    <TextInput
                        style={styles.textTnput}
                        label={StringTypes.PINCODE}
                        returnKeyType="next"
                        autoCapitalize="none"
                        mode="flat"
                        onChangeText={value => this.onInputChange({ id: "pincode", value })}
                    />
                    {this.renderError("pincode")}
                    <TextInput
                        style={styles.textTnput}
                        label={StringTypes.ADDRESS}
                        returnKeyType="next"
                        autoCapitalize="none"
                        mode="flat"
                        onChangeText={value => this.onInputChange({ id: "address", value })}
                    />
                    {this.renderError("address")}
                    <View style={styles.inputContainer}>
                        <Button style={{ justifyContent: 'center' }} onPress={this.submit}>
                            <Text>Create</Text>
                        </Button>
                    </View>
                </View>

            </Container>
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
        marginTop: Mixins.calcHeight(5),
        justifyContent: 'center'
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
});