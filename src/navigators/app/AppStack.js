import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthStack, MyDrawer } from '../';

const Stack = createStackNavigator();

const AppStack = () => {
    return (
        <Stack.Navigator initialRouteName="App" headerMode="none">
          <Stack.Screen name="App" component={AuthStack} />
          <Stack.Screen name="MyDrawer">{() => <MyDrawer /> }</Stack.Screen>
        </Stack.Navigator>
      );
}

export default AppStack;