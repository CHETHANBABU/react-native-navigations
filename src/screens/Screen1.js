import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    FlatList,
    UIManager,
    LayoutAnimation,
    SafeAreaView
} from 'react-native';
import { Button, Container, Text } from 'native-base';
import Toast from 'react-native-simple-toast';
import { Mixins, Typography } from '../styles';
import { CardImage, Header } from '../components';

console.disableYellowBox = true;

UIManager.setLayoutAnimationEnabledExperimental &&
    UIManager.setLayoutAnimationEnabledExperimental(true);

const cards = [
    {
        key: 0,
        like: 12,
        comments: 4,
        time: '11h'
    },
];
export default class Screen1 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cards,
        };
    }

    setAnimation = () => {
        LayoutAnimation.configureNext({
            duration: 250,
            update: {
                type: LayoutAnimation.Types.easeIn,
                springDamping: 0.7,
            },
        });
        LayoutAnimation.configureNext({
            duration: 500,
            create: {
                type: LayoutAnimation.Types.easeIn,
                property: LayoutAnimation.Properties.scaleXY,
                springDamping: 0.7,
            },
        });
    };

    addItem = (() => {
        let key = cards.length;
        return () => {
            const { cards } = this.state;
            cards.unshift({
                key,
                like: 12,
                comments: 4,
                time: '11h',
                animated: true,
            });
            this.setAnimation();
            this.setState({
                cards: cards.slice(0),
            });
            key++;
        };
    })();

    removeItem = key => {
        const { cards } = this.state;
        this.setAnimation();
        this.setState({
            cards: cards.slice().filter(card => card.key !== key),
        });
        Toast.show('Card is deleted', Toast.LONG, [
            'RCTModalHostViewController', 'UIAlertController',
        ]);
    };

    renderItem = ({ item }) => <CardImage item={item} removeItem={this.removeItem} />;

    render() {
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
                <Container>
                    <Header title={'Screen1'} onChange={() => this.props.navigation.toggleDrawer()} />
                    <Button light onPress={this.addItem}><Text style={styles.addIcon}> Add Image </Text></Button>
                    <FlatList
                        contentContainerStyle={styles.paragraph}
                        data={this.state.cards}
                        renderItem={this.renderItem}
                        ItemSeparatorComponent={() => <View style={{ marginTop: 10 }} />}
                        keyExtractor={item => item.key.toString()}
                    />
                </Container>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    paragraph: {
        fontSize: Typography.FONT_SIZE_18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#34495e',
        paddingBottom: 10,
    },
    addButton: {
        width: Mixins.DEVICE_WIDTH,
        elevation: 3,
        backgroundColor: '#808080',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 15
    },
    addIcon: {
        color: 'white',
        padding: 10,
        fontSize: Typography.FONT_SIZE_20,
        textAlign: 'center',
    },
});