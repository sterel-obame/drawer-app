import { StyleSheet, Text, View, Button, Image, ScrollView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const HomeScreen = () => {
    const navigate = useNavigation()
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:'#117554' }}>
            <Text style={{marginBottom:60, fontSize:35, color:'black', fontWeight:700}}>HTML CSS</Text>
            <View style={{marginBottom:10}}>
                {/* <Text>
                    <Button title='Home' onPress={() => navigate.navigate('home')}/>
                </Text> */}
            </View>
            <View style={{marginBottom:10}}>
                <Text>
                    <Button title='HTML/CSS' onPress={() => navigate.navigate('html/css')}/>
                </Text>
            </View>
            <View style={{}}>
                <Text>
                    <Button title='TAILWIND/BOOTSTRAP' onPress={() => navigate.navigate('tailwind/bootstrap')}/>
                </Text>
            </View>
        </View>
    )
}

export const Work = () =>{
    return(
        <ScrollView >
            <View style={{flex:1, justifyContent:'center', alignItems:'center', width:380, height:350}}>
                <Image
                    source={require('../../../assets/img/h-c.png')}
                    style={styles.image}
                />
            </View>
            <Text style={styles.text1}> Au début, tout semble compliqué. Mais avec une bonne dose de volonté et un temps fou, rien ne peut vous arrêter.</Text>
            <Text style={styles.text2}>
                Le HTML et le CSS sont la porte d'entrée dans cet univers. Rien qu'avec ces deux éléments, on peut déjà observer une forme assez rassurante, 
                et c'est à ce moment que le seigneur JAVASCRIPT entre en jeu pour venir donner vie à cette forme.
            </Text>
        </ScrollView>
    )
}
export const Road = () =>{
    return(
        <ScrollView >
            <Image
                source={require('../../../assets/img/b-t.jpg')}
                style={styles.image}
            />
            <Text style={styles.text1}>Une fois une première forme obtenue avec une beauté assez exceptionnelle et avec beaucoup de misère, on fait entrer un des
                enfants de son excellence CSS dans scène pour abréger quelques souffrances.
            </Text>
            <Text style={styles.text2}>
                BOOTSTRAP et TAILWIND sont des dignes fils héritiers de CSS, qui vont apporter leur éfficacité et pratique pour accomplir
                une beauté incommensurable. Ces enfants vous apportent un confort inégalé, CSS en possède d'autres enfants ces derniers sont les 
                plus connus et sont incontournables.
            </Text>
        </ScrollView>
    )
}

export default HomeScreen

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
    container: { 
        flex:1,
        width: 200, 
        height: 200, 
        justifyContent: 'center', 
        alignItems: 'center',
    },
    image: { 
        width: '100%',
        height: 200,
        resizeMode: 'cover',
        borderRadius: 8,
    },
})