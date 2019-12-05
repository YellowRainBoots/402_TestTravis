import React from "react";
import { AsyncStorage, View, ActivityIndicator, StatusBar, StyleSheet, Image } from "react-native";
import * as Font from 'expo-font';
import {NavigationProps} from '../utility/NavigationProps'
import { PropertiesViewModel } from '../ViewModel/PropertiesModel';
import axios from 'axios';
 
export default class AuthLoadingScreen extends React.Component<NavigationProps> {
    constructor(props) {
      super(props);
      this.state = { 
        assetsLoaded: false, 
      };
      this.loadAssets();
    }
  

    async loadAssets(){
        await Font.loadAsync({ //Every Assest not found in native devices, load them here!!
            'nunito-regular' : require('../assets/fonts/Nunito-Regular.ttf'),
            'nunito-semibold': require('../assets/fonts/Nunito-SemiBold.ttf'),
            'nunito-bold': require('../assets/fonts/Nunito-Bold.ttf')
        });
        //await // Make a request for a user with a given ID
        /*axios.get('https://vertical-proto-homepairs.herokuapp.com/verticalAPI')
          .then(function (response) {
            // handle success
            console.log(response['data']['response']);
            console.log(response['data']['foo'])
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          })
          .finally(function () {
            // always executed
        });*/
        this.setState({assetsLoaded: true});
        this._bootstrapAsync()

        /*
        await axios.post('http://vertical-proto-homepairs.herokuapp.com/verticalAPI/', {
          username: 'tommy@gmail.com',
          password: 'pass4tommy'
        })
        .then(function (response) {
          console.log(response['data']);
          PropertiesViewModel.initProperties(response['data'])
          //console.log(PropertiesViewModel.properties)
        })
        .catch(function (error) {
          console.log(error);
        });
        */
    }

    // Fetch the token from storage then navigate to our appropriate place
    _bootstrapAsync = async () => {
      //TODO: Implement UserTOKEN in STORAGE ITEM const userToken = await AsyncStorage.getItem('userToken');
      
      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      this.props.navigation.navigate('Auth')//userToken ? 'App' : 'Auth');
    };
  
    // Render any loading content that you like here
    render() {
      return (
        <View style={styles.container}>
          <ActivityIndicator />
          <StatusBar barStyle="default" />
        </View>
      );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

  