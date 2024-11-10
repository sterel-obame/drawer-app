import { Button, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const SettingScreen = () => {
    const navigate = useNavigation()
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:'#4CC9FE' }}>
            <Text style={{marginBottom:60, fontSize:35, color:'black', fontWeight:700}}>Back-end</Text>
            {/* <View style={{marginBottom:10}}>
                <Text>
                    <Button title='setting' onPress={() => navigate.navigate('setting')}/>
                </Text>
            </View> */}
            <View style={{marginBottom:10}}>
                <Text>
                    <Button title='NEST JS/EXPRESS JS' onPress={() => navigate.navigate('nest/express')}/>
                </Text>
            </View>
            <View style={{}}>
                <Text>
                    <Button title='NODE JS/MONGODB' onPress={() => navigate.navigate('node/mongoDB')}/>
                </Text>
            </View>
        </View>
    )
}

export const Config = () =>{
    return(
        <ScrollView>
            <Image
                source={require('../../../assets/img/N-E.png')}
                style={styles.image}
            />
            <Text style={styles.text1}> EXPRESS JS est un framework NODE JS qui est capable de bousculer les géants du back-end comme Symfony, Laravel, Spring Boot, Django…
            Ce framework est assez simple à utiliser et permet de développer des applications back-end robustes et évolutives.
            </Text>
            <Text style={styles.text2}>
                C'est dans cette bataille de frameworks back-end que ce monde a connu l'avenue du prince et futur héritier du trône NEST JS. C'est un 
                Framework polyvalent, il combine ces deux frères EXPRESS JS et FASTIFY sous son capot pour aller défendre l'honneur de la grande famille JS
                . Il est capable de fonctionner avec JAVASCRIPT ou du TYPESCRIPT pour la programmation orientée objet, avec son système modulaire et l'injection de dépendances. 
                Il prouve combien de fois, il est polyvalent et peut s'adapter sur n'importe quel terrain.
            </Text>
        </ScrollView>
    )
}
export const Reglage = () =>{
    return(
        <ScrollView>
            <Image
                source={require('../../../assets/img/m-n.png')}
                style={styles.image}
            />
            <Text style={styles.text1}>La combinaison de NODE JS et MONGODB, donne quelque chose d'énorme. Ce duo est dévastateur, capable d'écraser tout ce qui se dresse 
                sur son chemin. C'est une vraie bombe à retardement, seul le monde back-end est capable de vou témoigner cela.
            </Text>
        </ScrollView>
    )
}
export default SettingScreen

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