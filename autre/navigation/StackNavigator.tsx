import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View, Text } from 'react-native';
import HomeScreen from '../ecrans/home/HomeScreen';
import DetailsScreen from '../ecrans/home/DetailsScreen';
import ProfileScreen from '../ecrans/profile/ProfileScreen';
import SettingScreen from '../ecrans/setting/SettingScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

export function HomeStack() {
    return (
    <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
    );
}

export function ProfileStack() {
    return (
    <Stack.Navigator>
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
    );
}


export function BottomTabsNavigator() {
    return (
    <Tab.Navigator>
        <Tab.Screen name="HomeBottom" component={HomeStack} />
        <Tab.Screen name="Profile" component={ProfileStack} />
    </Tab.Navigator>
    );
}



