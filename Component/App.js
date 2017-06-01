import React, {Component} from 'react'
import {
    StyleSheet,
    Text,
    Image,
    View
} from 'react-native'
import {
    StackNavigator,
    TabNavigator,
} from 'react-navigation';

import Home from './view/XMGHome';
import Fresh from './view/XMGFind';
import ShopCar from './view/XMGMessage';
import Mine from './view/XMGMine';

import Detail from './view/NewsDetail';


import  colors  from './utils/Color';
//首页
const Homeicon = {uri: 'tabbar_home'};
const Homeicons = {uri: 'tabbar_home_highlighted'};
//生鲜
const Freshicon = {uri: 'tabbar_discover'};
const Freshicons = {uri: 'tabbar_discover_highlighted'};
//拼团
const ShopCart = {uri: 'tabbar_message_center'};
const ShopCarts = {uri: 'tabbar_message_center_highlighted'};
//我的
const Mineicon = {uri: 'tabbar_profile'};
const Mineicons = {uri: 'tabbar_profile_highlighted'};
//返回
const backicon = require('./img/login_back.png');


const MyTab = TabNavigator({
        Home: {
            screen: Home,
            navigationOptions: () => TabOptions('首页', Homeicon, Homeicons, '首页'),
        },
        Fresh: {
            screen: Fresh,
            navigationOptions: () => TabOptions('生鲜', Freshicon, Freshicons, '生鲜'),
        },
        ShopCar: {
            screen: ShopCar,
            navigationOptions: () => TabOptions('购物车', ShopCart, ShopCarts, '购物车'),
        },
        Mine: {
            screen: Mine,
            navigationOptions: () => TabOptions('我的', Mineicon, Mineicons, '我的'),
        },

    },
    {
        tabBarPosition: 'bottom',
        // tabBarComponent:TabBarBottom,
        swipeEnabled: false,
        animationEnabled: false,
        backBehavior: 'none',
        lazy: true,
        tabBarOptions: {
            showIcon: true,
            // tabbar上label的style
            labelStyle: {
                color: colors.text_color_gray_dark,
                fontSize: 15,

            },
            // tabbar的style
            style: {
                backgroundColor: colors.bg_color,
                height: 70,

            },
            // label和icon的背景色 活跃状态下
            // activeBackgroundColor:'green',
            // // label和icon的前景色 活跃状态下（选中）
            // activeTintColor:'green',
            // // label和icon的背景色 不活跃状态下
            // inactiveBackgroundColor:colors.text_color_gray_dark,
            // // label和icon的前景色 不活跃状态下(未选中)
            // inactiveTintColor:colors.text_color_gray_dark,
            // 是否显示label，默认为true
            showLabel: true,
            // 不透明度为按选项卡(iOS和Android < 5.0)
            pressOpacity: 0.3,

            indicatorStyle: {
                height: 0, // android 中TabBar下面会显示一条线，高度设为 0 后就不显示线了
            }
        }
    });

const MyApp = StackNavigator({
    MyTab: {
        screen: MyTab,
        navigationOptions: {
            header: null
        }
    },
    Detail: {
        screen: Detail,
        navigationOptions: ({navigation}) => StackOptions({navigation})
    },
}, {
    headerMode: 'screen',
});

export const TabOptions = (tabBarTitle, normalImage, selectedImage, navTitle) => {
    // console.log(navigation);
    const tabBarLabel = tabBarTitle;
    const tabBarIcon = (({tintColor, focused}) => {
        return (
            focused
                ?
                <Image
                    source={selectedImage}
                    style={[styles.TabBarIcon]}
                />
                :
                <Image
                    source={normalImage}
                    style={[styles.TabBarIcon]}
                />
        )
    });
    const headerTitle = navTitle;
    const headerTitleStyle = {fontSize: 1, color: 'blue'};
    // header的style
    const headerStyle = {backgroundColor: 'blue'};
    return {tabBarLabel, tabBarIcon, headerTitle, headerTitleStyle, headerStyle};
};

const StackOptions = ({navigation}) => {
    // console.log(navigation);
    let {state, goBack} = navigation;
    const visible = state.params.isVisible;
    let header;
    if (visible === true) {
        header = null;
    }
    const headerStyle = {backgroundColor: 'blue'};
    const headerTitle = state.params.title;
    const headerTitleStyle = {fontSize: 20, color: 'blue', fontWeight: '500'}
    const headerBackTitle = false;
    const headerLeft = (
        <Image
            source={backicon}
            onPress={() => {
                goBack()
            }}
        />
    );
    let headerRight;
    if (state.params.headerRight) {
        headerRight = state.params.headerRight;
    }
    return {headerStyle, headerTitle, headerTitleStyle, headerBackTitle, headerLeft, header, headerRight}
};
const styles = StyleSheet.create({
    TabBarIcon: {
        backgroundColor: '#fff',
        width: 26,
        height: 26
    }
});
export default MyApp;