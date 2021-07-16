import React, { Component } from 'react';
import { Row, Grid } from "react-native-easy-grid";
import { SafeAreaView, ScrollView } from 'react-native';
import { Container } from 'native-base';
import { AppStateEx, PixelRatioEx, RNCameraEx, Header } from '../components';

export default class Screen5 extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <SafeAreaView>
                <ScrollView>
                    <Container>
                        <Header title={'Screen6'} onChange={() => this.props.navigation.toggleDrawer()} />
                        <Grid>
                            <Row>
                                <AppStateEx />
                            </Row>
                            <Row>
                                <PixelRatioEx />
                            </Row>
                            <Row>
                                <RNCameraEx />
                            </Row>
                        </Grid>
                    </Container>
                </ScrollView>
            </SafeAreaView>
        );
    }
}