import React,  { Component } from 'react';
import { Header, Button, Left, Right, Icon, Body, Title } from 'native-base';
import Font from 'react-native-vector-icons/FontAwesome5';
import { StyleSheet } from 'react-native';

export default class HeaderComponent extends Component {
    constructor(props){
        super(props);
        console.log(this.props);
    }
    render() {
        const { title } = this.props;
        return (
            <Header>
                <Left>
                    <Button transparent>
                        <Icon name='menu' onPress={() => this.props.onChange()}/>
                    </Button>
                </Left>
                <Body>
                    <Title>{title}</Title>
                </Body>
                <Right>
                    <Button transparent>
                        <Font style={styles.userRegister} name='user-tie' />
                    </Button>
                </Right>
            </Header>
        )
    }
}
const styles = StyleSheet.create({
  userRegister: {
    color: '#fff',
    fontSize: 15
  }
})