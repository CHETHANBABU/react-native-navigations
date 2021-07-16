import React, { Component } from 'react';
import { Container } from 'native-base';
import { mock1 } from '../assets/mock/mockdata';
import { ListAvatar, Header } from '../components';

export default class Screen3 extends Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container>
                <Header title={'Screen3'} onChange={() => this.props.navigation.toggleDrawer()} />
                <ListAvatar dataSource={mock1} />
            </Container>
        );
    }
}