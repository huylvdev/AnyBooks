
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { navigationRef } from './RootNavigation';
import { home } from './navigator';
const Stack = createStackNavigator();

import HomeScreen from '../screens/home';

function Tabbar() {
    return (
        <></>
    )
}
function MyStack() {
    return (
        <Stack.Navigator headerMode='none'>
            <Stack.Screen name={home.home} component={CartDetailCoSan} />
        </Stack.Navigator>
    )
}

export default function AppNavigator() {
    return (
        <NavigationContainer ref={navigationRef}>
            <MyStack />
        </NavigationContainer>
    );
}