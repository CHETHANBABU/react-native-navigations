import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Screen1, Screen2, Screen3, Screen4, Screen5, Screen6 } from '../screens';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
    return (
        <Tab.Navigator>
          <Tab.Screen name="Screen1" component={Screen1} />
          <Tab.Screen name="Screen2" component={Screen2} />
          <Tab.Screen name="Screen3" component={Screen3} />
          <Tab.Screen name="Screen4" component={Screen4} />
          <Tab.Screen name="Screen5" component={Screen5} />
          <Tab.Screen name="Screen6" component={Screen6} />
        </Tab.Navigator>
      );
}

export default BottomTab;
