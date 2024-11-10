import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { MyDrawer } from './src/navigation/MyDrawer'
import 'react-native-gesture-handler'


const App = () => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={Colors.green} barStyle={Colors.white} />
            <NavigationContainer>
                <MyDrawer />
            </NavigationContainer>
        </SafeAreaView>
    )
}

export default App

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
        backgroundColor: Colors.light,
        width: 100,
        height: 100,
        borderRadius: 50,
        borderWidth: 5,
        borderColor: Colors.accent,
    },

    textContainer: {
    },

    title: {
        color: Colors.accent,
        fontSize: 22,
        fontWeight: '500',
        textTransform: 'capitalize',
        textAlign: 'center',
        marginTop: 10,
    },

    description: {
        color: Colors.accent,
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