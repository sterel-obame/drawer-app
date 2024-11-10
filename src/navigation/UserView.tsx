import { StyleSheet, Text, View, Image, TouchableOpacity, Linking } from 'react-native'
import React from 'react'
import { TouchableRipple, Title } from 'react-native-paper';
import Animated from 'react-native-reanimated';
import Color from '../constants/Color';
import Feather from 'react-native-vector-icons/Feather';
import Styles from '../common/Styles';

const UserView = ({ navigation, opacity }) => {
    return (
        <TouchableRipple
            onPress={() => {
                navigation.navigate('Profile')
            }}
        >
            <Animated.View style={[styles.drawerHeader, { opacity }]}>
                <Image style={styles.profileImage} source={require('../../assets/img/user_boy.png')} />
                <View style={styles.textContainer}>
                <Title style={styles.title}>OBAME Stérel</Title>
                <View style={Styles.row_space}>
                    <Text style={styles.description}>Follow:</Text>
                    <TouchableOpacity onPress={() => Linking.openURL('https://github.com/sterel-obame')}
                        style={{ height: 28, borderRadius: 30, backgroundColor: Color.accent, paddingHorizontal: 8, alignItems: 'center', flexDirection: 'row' }}>
                        <Feather name="github" color={Color.light} size={18} />
                        <Text style={{ color: Color.light }}> sterel-obame</Text>
                    </TouchableOpacity>
                </View>
                </View>
            </Animated.View>
        </TouchableRipple>
    )
}

export default UserView

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
        // backgroundColor: Color.accent,
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