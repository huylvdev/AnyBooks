import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const Tabbar = (props) => {
    const { } = props;
    const data = [
        {
            iconName: 'home',
            name: 'Home',
            router: homeTabs.home_drawer,
        },
        {
            iconName: 'home',
            name: 'Home',
            router: homeTabs.home_drawer,
        },
        {
            iconName: 'home',
            name: 'Home',
            router: homeTabs.home_drawer,
        },
        {
            iconName: 'home',
            name: 'Home',
            router: homeTabs.home_drawer,
        },
        {
            iconName: 'home',
            name: 'Home',
            router: homeTabs.home_drawer,
        }
    ]
    const visit = state.index;
    return (
        <View>
            {data.map((tab, index) =>
                <TouchableOpacity
                    key={index}
                    onPress={() => navigation.navigate(tab.router)}>


                </TouchableOpacity>
            )}


        </View>
    )
}