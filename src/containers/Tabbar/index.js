import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { tabbar } from '../../navigation/navigator';
import Icon from '../../components/icon';
import { sizes } from '../../components/config/fonts';
import { padding } from '../../components/config/spacing';
const Tabbar = (props) => {
    const { state, navigation } = props;
    const data = [
        {
            iconName: 'home',
            name: 'Home',
            router: tabbar.home,
        },
        {
            iconName: 'home',
            name: 'Bookshelf',
            router: tabbar.bookshelf,
        },
        {
            iconName: 'home',
            name: 'Download',
            router: tabbar.download,
        },
        {
            iconName: 'user',
            name: 'Profile',
            router: tabbar.profile,
        },
    ]
    const visit = state.index;
    return (
        <View style={styles.container}>
            {data.map((tab, index) =>
                <TouchableOpacity
                    style={styles.item}
                    key={index}
                    onPress={() => navigation.navigate(tab.router)}>
                    <View>
                        <Icon
                            color={visit === index ? 'red' : 'blue'}
                            name={tab.iconName}
                        />
                        <Text style={{ color: visit === index ? 'red' : 'blue', ...styles.text }}>
                            {tab.name}
                        </Text>
                    </View>

                </TouchableOpacity>
            )}
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderTopWidth: 1,
    },
    item: {
        flex: 1,
        alignItems: 'center',
        paddingVertical: padding.small - 1,
    },
    text: {
        fontSize: sizes.h6 - 2,
        lineHeight: 15,
        marginTop: 5,
    },
});
export default Tabbar