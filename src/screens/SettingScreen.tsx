import React, { useEffect, useState } from 'react'
import {
    View,
    StyleSheet,
    TouchableOpacity,
} from 'react-native'
import { Text, Surface, Switch, Caption } from 'react-native-paper';
import Styles from '../common/Styles';
import AppHeader from '../components/AppHeader'
import Color from '../constants/Color'
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const IconSize = 24

const Content = ({ backgroundColor = Color.green, width = "100%", height = 10 }) => (
    <View style={[styles.view, { backgroundColor, width, height }]} />
)
const SettingScreen = ({navigation, route}) => {
    const [isSwitchOn, setIsSwitchOn] = useState(false);
    const [selectedTheme, setSelectedTheme] = useState('light');
    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

    return (
        <View style={styles.container}>
            <AppHeader
                title={route.name} headerBg={Color.green} iconColor={Color.black}
                menu optionalBadge={5} navigation={navigation}
                right="more-vertical" rightFunction={() => console.log('right')}
                optionalIcon="bell" optionalFunc={() => console.log('optional')}
            />
            <View style={styles.settingContainer}>
                <View style={styles.themeSelector}>
                    <TouchableOpacity
                        style={[styles.themeBox, { backgroundColor: Color.white, borderWidth: 2, borderColor: selectedTheme == 'light' ? Color.green : Color.white }]}
                        onPress={() => setSelectedTheme('light')}>
                        <Content height={30} />
                        <Content />
                        <Content width={"50%"} height={20} />
                        <Content />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.themeBox, { backgroundColor: Color.accent, borderWidth: 2, borderColor: selectedTheme == 'dark' ? Color.green : Color.accent }]}
                        onPress={() => setSelectedTheme('dark')}>
                        <Content height={30} />
                        <Content />
                        <Content width={"50%"} height={20} />
                        <Content />
                    </TouchableOpacity>
                </View>
                <Surface style={[Styles.rowView, styles.switchContainer]}>
                    <View style={Styles.rowView}>
                        <View style={[styles.switchIcon, { backgroundColor: 'skyblue' }]}>
                            <Ionicons name="alarm-outline" size={IconSize} color={Color.white} />
                        </View>
                        <Text style={[Styles.largeText, { marginLeft: 16 }]}>Reminder</Text>
                    </View>
                    <Switch value={isSwitchOn} onValueChange={onToggleSwitch} color={'skyblue'} />
                </Surface>
                <Surface style={[Styles.rowView, styles.switchContainer]}>
                    <View style={Styles.rowView}>
                        <View style={[styles.switchIcon, { backgroundColor: 'orange' }]}>
                            <Ionicons name="notifications" size={IconSize} color={Color.white} />
                        </View>
                        <Text style={[Styles.largeText, { marginLeft: 16 }]}>Notification</Text>
                    </View>
                    <Switch value={isSwitchOn} onValueChange={onToggleSwitch} color={'orange'} />
                </Surface>
                <Surface style={[Styles.rowView, styles.switchContainer]}>
                    <View style={Styles.rowView}>
                        <View style={[styles.switchIcon, { backgroundColor: 'purple' }]}>
                            <MaterialCommunityIcons name="comment-text-outline" size={IconSize} color={Color.white} />
                        </View>
                        <Text style={[Styles.largeText, { marginLeft: 16 }]}>Help & Support</Text>
                    </View>
                    <Switch value={isSwitchOn} onValueChange={onToggleSwitch} color={'purple'} />
                </Surface>
                <Surface style={[Styles.rowView, styles.switchContainer]}>
                    <View style={Styles.rowView}>
                        <View style={[styles.switchIcon, { backgroundColor: Color.green }]}>
                            <MaterialIcons name="event" size={IconSize} color={Color.white} />
                        </View>
                        <Text style={[Styles.largeText, { marginLeft: 16 }]}>Events</Text>
                    </View>
                    <Switch value={isSwitchOn} onValueChange={onToggleSwitch} color={Color.green} />
                </Surface>
            </View>
            <Caption style={{ textAlign: 'center', marginVertical: 20 }}>Version 1.0</Caption>
        </View>
    )
}

export default SettingScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    gridCard: {
        flex: 1,
        padding: 10,
        elevation: 1,
        borderRadius: 18,
        margin: 4,
        flexDirection: 'row',
        alignItems: 'center',
    },
    settingContainer: {
        flex: 1,
        padding: 16
    },
    switchContainer: {
        padding: 12,
        justifyContent: 'space-between',
        marginVertical: 8,
        borderRadius: 18,
    },
    switchIcon: {
        padding: 8,
        borderRadius: 6,
    },
    themeContainer: {
        flex: 1,
    },
    themeSelector: {
        ...Styles.rowView,
        height: 200,
        padding: 16,
        // backgroundColor: 'yellow'
    },
    themeBox: {
        flex: 1,
        margin: 10,
        padding: 16,
        height: 150,
        width: '100%',
        borderRadius: 10,
    },
    view: { width: '100%', height: 10, backgroundColor: Color.green, marginTop: 10 }
})