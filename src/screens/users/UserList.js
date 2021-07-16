import React, { Component } from 'react';
import { SafeAreaView, FlatList } from 'react-native';
import { Container, Card, CardItem, Text, Icon, Right, Body, Button } from 'native-base';
import { Avatar } from 'react-native-paper';
import { Header } from '../../components';
import { Sqlite } from '../../utils/helpers';

export default class UserList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
        const execQueryPromise = Sqlite.executeQuery('SELECT * FROM user;', 0);
        execQueryPromise.then(res => {
            this.setState({ users: res })
        }, err => {
            console.log('err 70', err);

        });
    }

    // renderCardItem = ({ user }) => {
    //     const data = user.item;
    //     return (
    //         <Card>
    //             <CardItem>
    //                 <Avatar.Image size={24} source={require('../../assets/images/heist.jpg')} />
    //                 <Body style={{ marginLeft: 10 }}>
    //                     <Text>{data.username}</Text>
    //                     <Text>{data.email}</Text>
    //                 </Body>
    //                 <Right>
    //                     <Button iconLeft transparent onPress={() => this.handlerDelete(data.id)}>
    //                         <Icon name="trash" />
    //                     </Button>
    //                     <Button iconLeft transparent onPress={() => this.props.navigation.navigate('UserCreate')}>
    //                         <Icon name="eye" />
    //                     </Button>
    //                 </Right>
    //             </CardItem>
    //         </Card>
    //     );
    // }

    handlerDelete = (id) => {
        const execQueryPromise = Sqlite.executeQuery(`DELETE FROM user WHERE id=${id};`, 2);
        execQueryPromise.then(res => {
            console.log('res 30', res);
        }, err => {
            console.log('err 32', err);

        });
    }

    render() {
        return (
            <Container>
                <Header title={'List of Users'} onChange={() => this.props.navigation.toggleDrawer()} />
                <SafeAreaView>
                    {
                        this.state.users ?
                            this.state.users.map((user) => (
            <Card>
                <CardItem>
                    <Avatar.Image size={24} source={require('../../assets/images/heist.jpg')} />
                    <Body style={{ marginLeft: 10 }}>
                        <Text>{user.username}</Text>
                        <Text>{user.email}</Text>
                    </Body>
                    <Right>
                        <Button iconLeft transparent onPress={() => this.handlerDelete(user.id)}>
                            <Icon name="trash" />
                        </Button>
                        <Button iconLeft transparent onPress={() => this.props.navigation.navigate('UserDetail', {user: user })}>
                            <Icon name="eye" />
                        </Button>
                    </Right>
                </CardItem>
            </Card>
        ))
                            : ''
                    }

                </SafeAreaView>
            </Container>
        );
    }
}
