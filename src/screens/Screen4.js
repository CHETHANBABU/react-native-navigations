import React, { Component } from 'react';
import { Row, Grid } from "react-native-easy-grid";
import { Container } from 'native-base';
import { SectionList, VirtualList, Header } from '../components';

export default class Screen4 extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container>
                <Header title={'Screen4'} onChange={() => this.props.navigation.toggleDrawer()} />
                <Grid>
                    <Row>
                        <SectionList />
                    </Row>
                    <Row>
                        <VirtualList />
                    </Row>
                </Grid>
            </Container>
        );
    }
}