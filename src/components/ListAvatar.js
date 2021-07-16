import React, { Component } from 'react';
import { List, ListItem, Left, Body, Right, Thumbnail, Text } from 'native-base';
import { SafeAreaView, ScrollView } from 'react-native';
export default class ListAvatar extends Component {
    render() {
        return (
            <SafeAreaView>
                <ScrollView>
                    <List>
                        {
                            this.props.dataSource.map((d) => {
                                return <ListItem avatar>
                                    <Left>
                                        <Thumbnail source={require('../assets/images/coding.png')} />
                                    </Left>
                                    <Body>
                                        <Text>{d.username}</Text>
                                        <Text note>{d.email}</Text>
                                        <Text note>{d.phone}</Text>
                                    </Body>
                                    <Right>
                                        <Text note>{d.id}</Text>
                                    </Right>
                                </ListItem>
                            })
                        }
                    </List>
                </ScrollView>
            </SafeAreaView>
        );
    }
}