import { StyleSheet, View } from 'react-native';
import React from 'react';
import Animated, { interpolate } from 'react-native-reanimated';
import Styles from '../common/Styles';
import Color from '../constants/Color';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import { BlurView } from '@react-native-community/blur';
import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';
import UserView from './UserView';
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';

const CustomDrawer = (props) => {
    const translateX = props.progress ? interpolate(props.progress.value, [0, 1], [-100, 0]) : 0;
    const opacity = props.progress ? interpolate(props.progress.value, [0, 0.5, 1], [0, 0.1, 1]) : 1;

    return (
        <LinearGradient
            style={Styles.container}
            colors={[Color.green, 'rgba(255,255,255,0.6)', 'rgba(255,255,255,0.4)']}
            start={[0.5, 0.5]} // Pour simuler un effet radial
            end={[1, 1]}
        >
            <BlurView
                style={styles.blurAbsolute}
                blurType="light"
                blurAmount={20}
                overlayColor="transparent"
                reducedTransparencyFallbackColor="white" // iOS uniquement
            />
            <Animated.View
                style={{ flex: 1, transform: [{ translateX }], backgroundColor: 'transparent' }}
            >
                {/* le contenu du drawer */}
                <DrawerContentScrollView {...props}>

                    {/* partie image et informations */}
                    <UserView {...props} opacity={opacity} />

                    {/* partie des liens du Drawer */}
                    <DrawerItemList {...props} />
                </DrawerContentScrollView>

                {/* bouton Logout */}
                <DrawerItem
                    label="Logout"
                    onPress={() => console.log('Logout')}
                    icon={({ color, size }) => <MaterialIcons color={color} size={size} name="logout" />}
                    labelStyle={{ fontSize: 18 }}
                />
            </Animated.View>
        </LinearGradient>
    );
}

export default CustomDrawer

const styles = StyleSheet.create({
    cardStyle: {
        marginTop: 10,
        marginHorizontal: 10,
        borderRadius: 10,
    },

    container: {
        flex: 1,
        padding: 16,
    },

    drawerNavigator: {
        width: 290,
        backgroundColor: 'transparent',
        // backgroundColor: Colors.accent,
    },

    absolute: {
        flex: 1,
        height: '100%',
    },

    icon: {
        paddingBottom: 2,
    },

    drawerHeader: {
        width: '100%',
        height: 200,
        marginVertical: 16,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
        // backgroundColor: 'yellow',
    },

    profileImage: {
        backgroundColor: Color.light,
        width: 100,
        height: 100,
        borderRadius: 50,
        borderWidth: 5,
        borderColor: Color.accent,
    },

    textContainer: {
    },

    title: {
        color: Color.accent,
        fontSize: 22,
        fontWeight: '500',
        textTransform: 'capitalize',
        textAlign: 'center',
        marginTop: 10,
    },

    description: {
        color: Color.accent,
        fontSize: 14,
        textAlign: 'center',
        fontWeight: 'bold',
        marginHorizontal: 8
    },

    blurAbsolute: {
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0
    }
})