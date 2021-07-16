import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Font from 'react-native-vector-icons/FontAwesome5';
import { UserCreate } from '../../screens';
import { UserStack } from '.';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="UsersList" component={UserStack}
                options={{
                    tabBarLabel: 'List',
                    tabBarIcon: ({ color, size }) => (
                        <Font name="users" color={color} size={size} />
                    )
                }} />
            <Tab.Screen name="UserCreate" component={UserCreate}
                options={{
                    tabBarLabel: 'Create',
                    tabBarIcon: ({ color, size }) => (
                        <Font name="user-plus" color={color} size={size} />
                    )
                }} />
        </Tab.Navigator>
    );
}

export default BottomTab;
