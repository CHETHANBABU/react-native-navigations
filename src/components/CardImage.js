import React, { Component } from 'react';
import { Image, StyleSheet } from 'react-native';
import { Card, CardItem, Text, Button, Left, Body, Right } from 'native-base';
import Font from 'react-native-vector-icons/FontAwesome5';
import { Mixins, Colors, Typography } from '../styles';

export default class CardImage extends Component {
  render() {
    const { removeItem, item } = this.props;
    const { key } = item;
    return (
      <Card>
        <CardItem cardBody>
          <Image source={require('../assets/images/coding.png')} style={styles.imageSrc} />
        </CardItem>
        <CardItem>
          <Left>
            <Button transparent>
              <Font name="thumbs-up" color={Colors.thumbsUp} size={Typography.FONT_SIZE_18} />
              <Text style={styles.textFont}>12 Likes</Text>
            </Button>
          </Left>
          <Body>
            <Button transparent>
              <Font name="comments" color={Colors.comments} size={Typography.FONT_SIZE_18} />
              <Text style={styles.textFont}>4 Comments</Text>
            </Button>
          </Body>
          <Right>
            <Font name="trash-alt" color={Colors.trash} size={Typography.FONT_SIZE_18} onPress={() => removeItem(key)} />
          </Right>
        </CardItem>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  textFont: {
    fontSize: Typography.FONT_SIZE_10
  },
  imageSrc: { height: Mixins.calcHeight(25), width: null, flex: 1 }
});