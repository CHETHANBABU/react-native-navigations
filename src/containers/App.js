/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { AppStack, MyDrawer } from '../navigators';


const App: () => React$Node = () => {
  return (
    <>
    <NavigationContainer>
        <MyDrawer />
      </NavigationContainer>
    </>
  );
};

export default App;
