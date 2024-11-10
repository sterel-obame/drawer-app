import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Ionicons from '@expo/vector-icons/Ionicons';
import HomeScreen, { Road, Work } from '../ecrans/home/HomeScreen';
import ProfileScreen, { Name, Pays } from '../ecrans/profile/ProfileScreen';
import SettingScreen, { Config, Reglage } from '../ecrans/setting/SettingScreen';
import DetailsScreen, { About, Contact } from '../ecrans/home/DetailsScreen';
import Fontisto from '@expo/vector-icons/Fontisto';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

// Drawer Stack
export const DrawerNavigation = () =>{
    return(
        <Drawer.Navigator>
            <Drawer.Screen
                name='moi'
                component={DetailsScreen}
            />
            <Drawer.Screen
                name='contact'
                component={Contact}
            />
            <Drawer.Screen
                name='about'
                component={About}
            />
        </Drawer.Navigator>
    )
}
//Home Stack
export const HomeNavigation = () =>{
    return(
        <Stack.Navigator>
            <Stack.Screen  
                name='html'
                component={HomeScreen}
                options={{
                    headerShown:false
                }}
            />
            <Stack.Screen  
                name='html/css'
                component={Work}
            />
            <Stack.Screen  
                name='tailwind/bootstrap'
                component={Road}
            />
        </Stack.Navigator>
    )
}

//Profile Stack
export const ProfileNavigation = () =>{
    return(
        <Stack.Navigator>
            <Stack.Screen
                name='Front-end'
                component={ProfileScreen}
            />
            <Stack.Screen
                name='react/next'
                component={Name}
            />
            <Stack.Screen
                name='react-native'
                component={Pays}
            />
        </Stack.Navigator>
    )
}

//Setting Stack
export const SettingNavigation = () =>{
    return(
        <Stack.Navigator>
            <Stack.Screen
                name='Back-end'
                component={SettingScreen}
            />
            <Stack.Screen
                name='nest/express'
                component={Config}
            />
            <Stack.Screen
                name='node/mongoDB'
                component={Reglage}
            />
        </Stack.Navigator>
    )
}

export const BottomNavigation = () =>{
    return(
        <Tab.Navigator>
            <Tab.Screen 
            name='htm-css' 
            component={HomeNavigation} 
            options={{
                headerShown:false,
                tabBarIcon:(focus)=>{
                    return <Fontisto name="code" size={24} color={focus? 'blue':'black'} />
                }
            }}
        />

            <Tab.Screen 
            name='front-end' 
            component={ProfileNavigation} 
            options={{
                headerShown:false,
                tabBarIcon:(focus)=>{
                    return <MaterialCommunityIcons name="microsoft-visual-studio" size={24} color={focus? 'blue':'black'} />
                }
            }}
        />

            <Tab.Screen 
            name='back-end' 
            component={SettingNavigation} 
            options={{
                headerShown:false,
                tabBarIcon:(focus)=>{
                    return <Ionicons name="settings-outline" size={24} color={focus? 'blue':'black'} />
                }
            }}
        />
        </Tab.Navigator>
    )
}