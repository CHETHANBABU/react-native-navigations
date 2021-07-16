import React, { Component } from 'react';
import { Screen1, Screen2, Screen3, Screen4, Screen5, Screen6 } from '../screens';
import { UserBottomTab } from '.';

import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';

function CustomDrawerContent(props) {
    return (
        <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            <DrawerItem
                label="Close drawer"
                onPress={() => props.navigation.closeDrawer()}
            />
            <DrawerItem
                label="Toggle drawer"
                onPress={() => props.navigation.toggleDrawer()}
            />
        </DrawerContentScrollView>
    );
}

const Drawer = createDrawerNavigator();

export default class MyDrawer extends Component {
    render() {
        return (
            <>
                <Drawer.Navigator
                    drawerContent={props => <CustomDrawerContent {...props} />}>
                    <Drawer.Screen name="Screen1" component={Screen1} />
                    <Drawer.Screen name="Screen2" component={Screen2} />
                    <Drawer.Screen name="Screen3" component={Screen3} />
                    <Drawer.Screen name="Screen4" component={Screen4} />
                    <Drawer.Screen name="Screen5" component={Screen5} />
                    <Drawer.Screen name="Screen6" component={Screen6} />
                    <Drawer.Screen name="User" component={UserBottomTab} />
                </Drawer.Navigator>
            </>
        );
    }
}
