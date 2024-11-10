import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import AppHeader from '../components/AppHeader';
import imgPlaceHolder from '../../assets/img/user_boy.png';
import Entypo from 'react-native-vector-icons/Entypo';
import { Caption, Paragraph, Surface, Title } from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';
import Color from '../constants/Color';

const dummy_text = "J'ai toujours été fasciné par l'informatique pendant mon cursus scolaire. Je finis par être diplômé en informatique dans le domaine de la conception et développement des applications.";

const ProfileScreen = ({ navigation, route }) => {
    const [profile, setProfile] = useState(null);

    const imagePick = async () => {
        // Demande de permission pour accéder à la galerie
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
            alert('Permission to access gallery is required!');
            return;
        }
    
        // Ouvre la galerie pour choisir une image
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
        });
    
        if (!result.canceled) {
            setProfile(result.assets[0].uri);
        }
    };

    return (
        <View style={styles.container}>
            <AppHeader
                title={route.name}
                headerBg={Color.green}
                iconColor={Color.black}
                menu
                titleAlign="center"
                optionalBadge={5}
                navigation={navigation}
                right="more-vertical"
                rightFunction={() => console.log('right')}
                optionalIcon="bell"
                optionalFunc={() => console.log('optional')}
            />
            <View style={styles.profileContainer}>
                <View style={styles.imgContainer}>
                    <Image style={styles.image} source={profile ? { uri: profile } : imgPlaceHolder} />
                    <TouchableOpacity onPress={imagePick} style={styles.editIcon}>
                        <Entypo name="pencil" size={20} color={Color.green} />
                    </TouchableOpacity>
                </View>
                <View style={styles.textContainer}>
                    <Title>Stérel OBAME </Title>
                    <Caption>github/sterel-obame</Caption>
                </View>
            </View>
            <View style={styles.userInfo}>
                <Surface style={styles.bio}>
                    <Title>Bio</Title>
                    <Paragraph numberOfLines={4}>{dummy_text}</Paragraph>
                </Surface>
                <Surface style={styles.bio}>
                    <Title>Notes</Title>
                    <TextInput
                        placeholder="Écrit quelque chose ici"
                        underlineColorAndroid={Color.green}
                        style={styles.textInput}
                    />
                </Surface>
            </View>
        </View>
    );
};

export default ProfileScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    profileContainer: {
        flex: 0.8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:Color.gray
    },
    imgContainer: {
        alignItems: 'center',
        marginBottom: 16,
    },
    textContainer: {
        alignItems: 'center',
    },
    image: {
        width: 110,
        height: 110,
        borderRadius: 55,
        borderColor: Color.black,
        borderWidth: 3,
    },
    editIcon: {
        position: 'absolute',
        right: 0,
        bottom: 0,
        backgroundColor: 'white',
        borderRadius: 15,
        padding: 4,
    },
    userInfo: {
        flex: 1,
    },
    bio: {
        borderRadius: 10,
        padding: 16,
        margin: 16,
    },
    textInput: {
        marginTop: 8,
        paddingHorizontal: 8,
    },
});
