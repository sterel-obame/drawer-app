import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { Badge, Surface, Title } from 'react-native-paper'
import Feather from 'react-native-vector-icons/Feather'
import Color from '../constants/Color'

const IconSize = 24
const AppHeader = ({
    menu, 
    title, 
    back, 
    right, 
    rightFunction, 
    optionalIcon, 
    optionalFunc, 
    navigation,
    headerBg,
    iconColor,
    titleAlign,
    optionalBadge
}) => {
    return (
        <Surface style={[styles.header, {backgroundColor:headerBg}]}>
            <View style={styles.view}>
                {menu &&
                    <TouchableOpacity onPress={()=>navigation.openDrawer()}>
                        <Feather name='menu' size={IconSize} color={iconColor} />
                    </TouchableOpacity>
                }
                {back &&
                    <TouchableOpacity onPress={()=>navigation.goBack()}>
                        <Feather name='arrow-left' size={IconSize} color={iconColor} />
                    </TouchableOpacity>
                }
            </View>

            <View style={styles.view}>
                <Title style={{color:iconColor, textAlign:titleAlign}}>{title}</Title>
            </View>

            <View style={styles.rightView}>
                {optionalFunc &&
                    <TouchableOpacity onPress={optionalFunc} style={styles.rowView}>
                        <Feather name={optionalIcon} size={IconSize} color={iconColor} />
                        {optionalBadge && <Badge style={{position:'absolute', top:-5, right:-10}}>{optionalBadge}</Badge>}
                    </TouchableOpacity>
                }
                {rightFunction &&
                    <TouchableOpacity onPress={rightFunction} style={{marginRight:5,}}>
                        <Feather name={right} size={IconSize} color={iconColor} />
                    </TouchableOpacity>
                }
            </View>
            {/* <Text>AppHeader</Text> */}
        </Surface>
    )
}

export default AppHeader

const styles = StyleSheet.create({
    header:{
        height:50,
        elevation:4,
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection:'row',
        backgroundColor:Color.black,
        // marginTop:20
    },
    view:{
        // flex:1,
        margin:10,
        alignItems:'center',
        flexDirection:'row',
        // backgroundColor:'yellow',
    },
    titleView:{
        flex:1
    },
    rightView:{
        justifyContent:'flex-end',
        // borderWidth:2,
        flexDirection:'row',
        gap:5
    },
    rowView:{
        flexDirection:'row',
        alignItems:'center',
        marginRight:10
    }
})