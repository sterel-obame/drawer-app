import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const DetailsScreen = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:'#02B290' }}>
            <Text>DetailsScreen</Text>
        </View>
    )
}

export const Contact = () =>{
    return(
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Je suis le composant contact</Text>
        </View>
    )
}
export const About = () =>{
    return(
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Je suis le composant About</Text>
        </View>
    )
}
export default DetailsScreen

const styles = StyleSheet.create({})