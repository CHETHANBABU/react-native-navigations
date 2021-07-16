import React, { Component } from 'react';
import { Text } from 'native-base';

export default class UserDetail extends Component {
    constructor(props) {
        super(props);
        console.log(props.route.params.user);
        
    }

    render() {
        return (
            <Text>UserDetails</Text>
        )
    }
}