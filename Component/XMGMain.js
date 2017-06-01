import React, {Component} from 'react'
import {
    StyleSheet,
    View,
    Image,
    Text
} from 'react-native'
//引入tabbar支持包
import TabNavigator from 'react-native-tab-navigator';
//首页
import Home from './view/XMGHome';
import Message from './view/XMGMessage';
import Find from './view/XMGFind';
import Mine from './view/XMGMine';

const TabNavigatorItem = TabNavigator.Item;

const HomeStr = '首页';
const MessageStr='消息';
const FindStr='发现';
const MineStr='我的';

const TAB_NORMAL_1 = {uri: 'tabbar_home'};
const TAB_NORMAL_3 = {uri: 'tabbar_discover'};
const TAB_NORMAL_2 = {uri: 'tabbar_message_center'};
const TAB_NORMAL_4 = {uri: 'tabbar_profile'};

const TAB_PRESS_1 = {uri: 'tabbar_home_highlighted'};
const TAB_PRESS_3 = {uri: 'tabbar_discover_highlighted'};
const TAB_PRESS_2 = {uri: 'tabbar_message_center_highlighted'};
const TAB_PRESS_4 = {uri: 'tabbar_profile_highlighted'};

export default class XMGMain extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedTab: HomeStr,
        }
    }

    _renderTabItem(img, selectedImg, tag, childView) {
        return (
            <TabNavigatorItem
                selected={this.state.selectedTab === tag}
                title={tag}
                titleStyle={styles.tabText}
                selectedTitleStyle={styles.selectedTabText}
                renderIcon={() => <Image style={styles.tabIcon} source={img}/>}
                renderSelectedIcon={() => <Image style={styles.tabIcon} source={selectedImg}/>}
                onPress={() => this.setState({ selectedTab: tag })}>
                {childView}
            </TabNavigatorItem>
        );
    }


    render() {
        return (
            <View style={{flex: 1}}>
                <TabNavigator hidesTabTouch={true}>
                    {this._renderTabItem(TAB_NORMAL_1, TAB_PRESS_1, HomeStr, <Home/>)}
                    {this._renderTabItem(TAB_NORMAL_2, TAB_PRESS_2, MessageStr, <Message/>)}
                    {this._renderTabItem(TAB_NORMAL_3, TAB_PRESS_3, FindStr, <Find/>)}
                    {this._renderTabItem(TAB_NORMAL_4, TAB_PRESS_4, MineStr, <Mine/>)}
                </TabNavigator>
            </View >
        );
    }
    /*render() {
        return (
            <View style={styles.container}>
                <TabNavigator
                    tabBarStyle={{ height: tabBarHeight, overflow: 'hidden' }}
                    sceneStyle={{ paddingBottom: tabBarHeight }}
                    >
                    <TabNavigatorItem
                        selected={this.state.selectedTab === '首页'}
                        title="首页"
                        titleStyle={styles.tabText}
                        selectedTitleStyle={styles.selectedTabText}
                        renderIcon={() => <Image style={styles.icon} source={TAB_NORMAL_1} />}
                        renderSelectedIcon={() => <Image style={styles.icon} source={TAB_PRESS_1} />}
                        onPress={() => this.setState({ selectedTab: '首页' })}>
                        <Home/>
                    </TabNavigatorItem>
                    <TabNavigatorItem
                        selected={this.state.selectedTab === '消息'}
                        title="消息"
                        titleStyle={styles.tabText}
                        selectedTitleStyle={styles.selectedTabText}
                        renderIcon={() => <Image style={styles.icon} source={TAB_NORMAL_2} />}
                        renderSelectedIcon={() => <Image style={styles.icon} source={TAB_PRESS_2} />}
                        onPress={() => this.setState({ selectedTab: '消息' })}>
                        <Message />
                    </TabNavigatorItem>
                    <TabNavigatorItem
                        selected={this.state.selectedTab === '发现'}
                        title="发现"
                        titleStyle={styles.tabText}
                        selectedTitleStyle={styles.selectedTabText}
                        renderIcon={() => <Image style={styles.icon} source={TAB_NORMAL_3} />}
                        renderSelectedIcon={() => <Image style={styles.icon} source={TAB_PRESS_3} />}
                        onPress={() => this.setState({ selectedTab: '发现' })}>
                        <Find />
                    </TabNavigatorItem>
                    <TabNavigatorItem
                        selected={this.state.selectedTab === '我的'}
                        title="我的"
                        titleStyle={styles.tabText}
                        selectedTitleStyle={styles.selectedTabText}
                        renderIcon={() => <Image style={styles.icon} source={TAB_NORMAL_4} />}
                        renderSelectedIcon={() => <Image style={styles.icon} source={TAB_PRESS_4} />}
                        onPress={() => this.setState({ selectedTab: '我的' })}>
                        <Mine />
                    </TabNavigatorItem>
                </TabNavigator>
            </View>
        );
    }*/
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    tabText: {
        color: "#000000",
        fontSize: 13
    },
    selectedTabText: {
        color: "#999999",
        fontSize: 13
    },
    icon: {
        width: 27,
        height: 27
    },
    tab: {
        height: 52,
        backgroundColor: '#303030',
        alignItems: 'center',
    },
    tabIcon: {
        width: 27,
        height: 27,
        resizeMode: 'stretch',
        marginTop: 12.5
    }
});
module.exports = XMGMain