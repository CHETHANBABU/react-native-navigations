import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { UserList, UserDetail } from '../../screens/users';
const Stack = createStackNavigator();

const UserStack = () => {
    return (
        <Stack.Navigator initialRouteName="UserList" headerMode="none">
          <Stack.Screen name="UserList" component={UserList} />
          <Stack.Screen name="UserDetail" component={UserDetail} />
        </Stack.Navigator>
      );
}

export default UserStack;