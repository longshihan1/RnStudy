import React, {Component} from 'react'
import {
    StyleSheet,
    Platform,
    View
} from 'react-native'
import {StackNavigator, TabNavigator} from "react-navigation";
import Home from 'XMGHome';
import Message from 'XMGMessage';
import Find from 'XMGFind';
import Mine from 'XMGMine';


const ExampleRoutes = {
    SimpleStack: {
        name: 'Stack Example',
        description: 'A card stack',
        screen: SimpleStack,
    },
    SimpleTabs: {
        name: 'Tabs Example',
        description: 'Tabs following platform conventions',
        screen: SimpleTabs,
    },
    Drawer: {
        name: 'Drawer Example',
        description: 'Android-style drawer navigation',
        screen: Drawer,
    },
    TabsInDrawer: {
        name: 'Drawer + Tabs Example',
        description: 'A drawer combined with tabs',
        screen: TabsInDrawer,
    },
    CustomTabs: {
        name: 'Custom Tabs',
        description: 'Custom tabs with tab router',
        screen: CustomTabs,
    },
    ModalStack: {
        name: Platform.OS === 'ios'
            ? 'Modal Stack Example'
            : 'Stack with Dynamic Header',
        description: Platform.OS === 'ios'
            ? 'Stack navigation with modals'
            : 'Dynamically showing and hiding the header',
        screen: ModalStack,
    },
    StacksInTabs: {
        name: 'Stacks in Tabs',
        description: 'Nested stack navigation in tabs',
        screen: StacksInTabs,
    },
    StacksOverTabs: {
        name: 'Stacks over Tabs',
        description: 'Nested stack navigation that pushes on top of tabs',
        screen: StacksOverTabs,
    },
    LinkStack: {
        name: 'Link in Stack',
        description: 'Deep linking into a route in stack',
        screen: SimpleStack,
        path: 'people/Jordan',
    },
    LinkTabs: {
        name: 'Link to Settings Tab',
        description: 'Deep linking into a route in tab',
        screen: SimpleTabs,
        path: 'settings',
    },
};

export default class XMGMMain extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <View>

            </View>
        );
    }
}
module.exports = XMGMMain