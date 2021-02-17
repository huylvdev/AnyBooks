
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { navigationRef } from './RootNavigation';
import { tabbar } from './navigator';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

import Tabbar from "../containers/Tabbar";

import HomeScreen from '../screens/home';
import Profile from '../screens/profile';
import Bookshelf from '../screens/bookshelf';
import Download from '../screens/download';



function TabBar() {
    return (
        <Tab.Navigator
            tabBar={props => <Tabbar {...props} />}   >
            <Tab.Screen name={tabbar.home} component={HomeScreen} />
            <Tab.Screen name={tabbar.bookshelf} component={Bookshelf} />
            <Tab.Screen name={tabbar.download} component={Download} />
            <Tab.Screen name={tabbar.profile} component={Profile} />
        </Tab.Navigator>
    );
}
function MyStack() {
    return (
        <Stack.Navigator headerMode='none'>
            <Stack.Screen name={tabbar.home} component={TabBar} />
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