import React, { Component } from 'react';
import { Row, Grid } from "react-native-easy-grid";
import { Container } from 'native-base';
import { TouchableHighlightEx, TouchableOpacityEx, TouchableWithoutFeedbackEx, Header } from '../components';

export default class Screen5 extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container>
                <Header title={'Screen5'} onChange={() => this.props.navigation.toggleDrawer()} />
                <Grid>
                    <Row>
                        <TouchableHighlightEx />
                    </Row>
                    <Row>
                        <TouchableOpacityEx />
                    </Row>
                    <Row>
                        <TouchableWithoutFeedbackEx />
                    </Row>
                </Grid>
            </Container>
        );
    }
}