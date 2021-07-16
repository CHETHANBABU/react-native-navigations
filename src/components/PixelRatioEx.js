import React, { Component } from 'react';
import { Image, PixelRatio, Text } from "react-native";
import { Col, Row, Grid } from "react-native-easy-grid";

const size = 50;
export default class PixelRatioEx extends Component {
    render() {
        return (
            <Grid>
                
                <Row>
                    <Col>
                        <Text>Current Pixel Ratio is:</Text>
                        <Text >{PixelRatio.get()}</Text></Col>
                    <Col>
                        <Text>Current Font Scale is:</Text>
                        <Text >{PixelRatio.getFontScale()}</Text></Col>
                </Row>
                <Row>
                    <Col>
                        <Text>On this device images with a layout width of</Text>
                        <Text >{size} px</Text>
                        <Image source={require('../assets/images/coding.png')} /></Col>
                    <Col>
                        <Text>require images with a pixel width of</Text>
                        <Text >
                            {PixelRatio.getPixelSizeForLayoutSize(size)} px
                    </Text>
                        <Image
                            source={require('../assets/images/coding.png')}
                            style={{
                                width: PixelRatio.getPixelSizeForLayoutSize(size),
                                height: PixelRatio.getPixelSizeForLayoutSize(size)
                            }}
                        />
                    </Col>
                </Row>
            </Grid>
        )
    }
}
