import React, { Component } from 'react';
import { Accordion, Card, CardItem, Body, Text, Container } from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";
import { Colors } from '../styles';
import { Header } from '../components';

const dataArray = [
    { title: "First Element", content: "Lorem ipsum dolor sit amet" },
    { title: "Second Element", content: "Lorem ipsum dolor sit amet" },
    { title: "Third Element", content: "Lorem ipsum dolor sit amet" }
];

const dataArray1 = [
    { title: 1, content: ["Item one", "Item two", "Item three", "Item four"] },
    { title: 2, content: ["Item five", "Item six", "Item seven", "Item eight"] },
    { title: 3, content: ["Item nine", "Item ten", "Item eleven", "Item twelve"] }
];

export default class Screen2 extends Component {

    constructor(props) {
        super(props);
    }

    _renderHeader = ({ title }) => {
        return <Card>
            <CardItem style={{ backgroundColor: "green" }}>
                <Body>
                    <Text>
                        {title.title}
                    </Text>
                </Body>
            </CardItem>
        </Card>
    }

    _renderContent = (content) => {
        let cards = content.content.map((item, index) => {
            return <Card key={index}>
                <CardItem style={{ backgroundColor: "lightgreen" }}>
                    <Body>
                        <Text>
                            {item}
                        </Text>
                    </Body>
                </CardItem>
            </Card>
        })
        return cards
    }

    render() {
        return (
            <Container>
                <Header title={'Screen2'} onChange={() => this.props.navigation.toggleDrawer()} />
                <Grid>
                    <Col style={{ backgroundColor: Colors.thumbsUp }}>
                        <Accordion dataArray={dataArray} expanded={0}
                            icon="add" expandedIcon="remove"
                            iconStyle={{ color: "green" }}
                            expandedIconStyle={{ color: "red" }}
                            headerStyle={{ backgroundColor: "#b7daf8" }}
                            contentStyle={{ backgroundColor: "#ddecf8" }} />
                    </Col>
                    <Col>
                        <Row style={{ backgroundColor: Colors.trash }}>
                            <Accordion dataArray={dataArray1} renderHeader={this._renderHeader}
                                renderContent={this._renderContent} />
                        </Row>
                        <Row style={{ backgroundColor: Colors.comments }}>
                            <Text>3</Text>
                        </Row>
                    </Col>
                </Grid>
            </Container>
        );
    }
}