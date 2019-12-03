import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react'
import { NavigationProps } from '../../../../utility/NavigationProps';

interface HomePairsMenuProps extends NavigationProps {
    showMenu : boolean;
    selectedPage : number;
    parentCallBack: (arg0?: any) => any;
}
interface HomePairsMenuState {
    currentPage : number;
    pages : {title: String, navigationFunction: () => void } []
}

export default class HomePairsMenu extends React.Component<HomePairsMenuProps, HomePairsMenuState>{
    nav: any;
    selectedPage : number;
    focusListener: any;
    constructor(props: Readonly<HomePairsMenuProps>) {
        super(props);
        this.nav= this.props.navigation
        this.selectedPage = (this.props.selectedPage == null) ? 0 : this.props.selectedPage
        this.state = {
            currentPage : this.selectedPage ,
            pages : [
                {
                    title: 'Properties', 
                    navigationFunction: this.navProperties, 
                }, 
                {
                    title: 'Service Request', 
                    navigationFunction: this.navServiceRequest, 
                }, 
                {
                    title: 'Account Settings',
                    navigationFunction: this.navAccount,
                },
                {
                    title: 'Log Out', 
                    navigationFunction: this.navAuth, 
                },
            ]
        }
    }


    navAuth = () => { this.nav.navigate('Auth') };
    navServiceRequest = () => { 
        this.nav.navigate('ServiceRequest')
        this.closeMenu();
    };
    navProperties = () => { 
        this.nav.navigate('Properties')
        this.closeMenu(); 
    };
    navAccount = () => { 
        this.nav.navigate('Account')
        this.closeMenu(); 
    };
    closeMenu = () => {
        this.props.parentCallBack();
    }

    /**This function renders all the selections of a button in the format the we want. 
     * Notice the use of the maps function. This function requires that we iterate through a list 
     * of objects with a specific key. Each key must be unique in the array/list.*/         
    buttonFormat(currentPage:number){
        return this.state.pages.map(function(page, i){
            return(
                <View key={i}>
                    <TouchableOpacity
                    onPress={page.navigationFunction}>
                        <Text 
                        style={currentPage === i ? styles.menuSelectedText : styles.menuText}>
                            {page.title}
                        </Text>
                    </TouchableOpacity>
                </View>
            )
        });
    }

    render() {
        if(this.props.showMenu){
            return (
                <View style={styles.container}>
                    {this.buttonFormat(this.selectedPage)}
                 </View>
            )
        } else {
            return (
                <View style={{flex:0, height:'0%', width:'0%'}}/>
            );
        }
    }
}

const styles = StyleSheet.create({
    container : {
        backgroundColor: '#fff'
    },
    menuText: {
        fontFamily: 'nunito-regular',
        paddingLeft: 15,
        paddingVertical: 15,
        maxHeight: 50,
        fontSize: 16,
        color: '#9BA0A2'
    },
    menuSelectedText: {
        fontFamily: 'nunito-regular',
        paddingLeft: 15,
        paddingVertical: 15,
        maxHeight: 50,
        fontSize: 16,
    }
})