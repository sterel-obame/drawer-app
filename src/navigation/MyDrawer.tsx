import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import SettingScreen from "../screens/SettingScreen";
import { useWindowDimensions } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import CustomDrawer from "./CustomDrawer";

const Drawer = createDrawerNavigator();

export const MyDrawer = () => {
    const dimension = useWindowDimensions();
    const drawerType = dimension.width >= 700 ? 'permanent' : 'front';
    
    return (
        <Drawer.Navigator
            screenOptions={{
                drawerStyle: {
                    backgroundColor: 'transparent', // Change la couleur de fond
                    width: 280, // Largeur du Drawer
                },
                drawerType: drawerType, // Correction de la syntaxe pour drawerType
                drawerContentStyle: { // Remplace drawerContentOptions par drawerContentStyle
                    labelStyle: { fontSize: 17, fontWeight: 'bold' }
                }
            }}
            drawerContent={(props) => <CustomDrawer {...props} />}
        >
            <Drawer.Screen
                name='Home'
                component={HomeScreen}
                options={{
                    drawerIcon: ({ color, size }) => (
                        <Feather name="home" color={color} size={size} />
                    ),
                    headerShown:false
                }}
            />
            <Drawer.Screen
                name='Profile'
                component={ProfileScreen}
                options={{
                    drawerIcon: ({ color, size }) => (
                        <Feather name="user" color={color} size={size} />
                    ),
                    headerShown:false
                }}
            />
            <Drawer.Screen
                name='Setting'
                component={SettingScreen}
                options={{
                    drawerIcon: ({ color, size }) => (
                        <Feather name="settings" color={color} size={size} />
                    ),
                    headerShown:false
                }}
            />
        </Drawer.Navigator>
    );
}
