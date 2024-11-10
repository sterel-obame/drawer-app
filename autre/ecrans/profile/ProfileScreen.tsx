import { Button, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const ProfileScreen = () => {
    const navigate = useNavigation()
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:'#FFF100' }}>
            <Text style={{marginBottom:60, fontSize:35, color:'black', fontWeight:700}}>Front-end</Text>
            {/* <View style={{marginBottom:10}}>
                <Text>
                    <Button title='Profile' onPress={() => navigate.navigate('profile')}/>
                </Text>
            </View> */}
            <View style={{marginBottom:10}}>
                <Text>
                    <Button title='REACT JS/ NEXT JS' onPress={() => navigate.navigate('react/next')}/>
                </Text>
            </View>
            <View style={{}}>
                <Text>
                    <Button title='REACT NATIVE' onPress={() => navigate.navigate('react-native')}/>
                </Text>
            </View>
        </View>
    )
}

export const Name = () =>{
    return(
        <ScrollView>
            <Image
                source={require('../../../assets/img/react-et-next-js.png')}
                style={styles.image}
            />
            <Text style={styles.text1}>
                Sa Majesté du WEB, JAVASCRIPT a pris tout son pour donner naissance à un spécimen appelé REACT. 
                L'incontournable du web a su évoluer et se maintenir dans la course des traducteurs des problèmes 
                algorithmiques en solution concrète. Cet enfant se nomme REACT.
            </Text>
            <Text style={styles.text2}>
                React JS est un colosse des bibliothèques le ALL MIGHTY JAVASCRIPT, il n'y avait pas d'autres issues que de séduire tout le front-end sans exception.
                REACT JS est tellement badass que NEXT JS a été englouti, hypnotisé au point de le prendre comme armure protectrice pour ses aventures
                Afin de devenir un framework JAVASCRIPT complet et mature.
            </Text>
        </ScrollView>
    )
}
export const Pays = () =>{
    return(
        <ScrollView >
            <Image
                source={require('../../../assets/img/recat-n.jpg')}
                style={styles.image}
            />
            <Text style={styles.text1}>
                Le web est colonisé par une panoplie de concurrents, mais Sa Majesté JAVASCRIPT dispose de grandes extensions au point qu'il boxe dans toutes les catégories et tous les terrains.
                Il a donné naissance à REACT NATIVE pour se démarquer du web et aller concurrencer ses amis côtés mobile ou hybride.
                Des amis tels que FLUTTER, XAMARIN… possèdent aussi du répondant, de ce côté la bataille reste épique.
            </Text>
        </ScrollView>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({
    text1:{
        marginBottom:20,
        fontSize:20,
        paddingHorizontal:10,
    },
    text2:{
        paddingHorizontal:10,
        marginTop:20,
        fontSize:20
    },
    image: { 
        width: '100%',
        height: 200,
        resizeMode: 'cover',
        borderRadius: 8,
    },
})