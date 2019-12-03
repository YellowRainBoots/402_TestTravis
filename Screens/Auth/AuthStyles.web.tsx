import {StyleSheet} from 'react-native';

const AuthScreenStyles = StyleSheet.create ({
        container : {
            alignItems: 'center',
            alignSelf: 'center',
            width: '99%',
        },
        pallet:{
            backgroundColor: '#1177B0',
            width: '100%',
            height: '100%',
            flex: 1,
            minWidth: 300,
        },
        homePairsTitle: {
            color: '#0098CD', 
            fontFamily: 'nunito-regular', 
            fontSize: 38,
        },
        authCardContainer: {
            maxWidth: 500,
            width: '85%', 
            borderRadius: 8,
            shadowRadius: 10,
            shadowOffset: {height :5, width: 0},
        },
        /**This is the contianer style to use when all assets of the program have been loaded. */
        assetLoadedContainer: {//This container will only set default items to center of the pallet. It will always have a blue pallet behind it as well.
            maxWidth: 540,
            backgroundColor: '#1177B0',
            alignItems: 'center',
            justifyContent: 'center',
            alignSelf: 'center',
            width: '100%',
            //aspectRatio: 1/1.5,
            minHeight: 1000,
          },
    
        /**
         * Use this style only when assets have not been loaded. This should only be used at the first page of the app
         * This includes the first loading page and the first pages it navigates too when loaded. 
         */
        assetNotLoadedContainer: {
            flex: 1,
            backgroundColor: '#1177B0',
            alignItems: 'center',
            justifyContent: 'center',
            width: 600,
        },
        submitSection: {
            flexDirection: 'column',
            padding: 10,
            maxHeight: 6,
            marginTop: '7%',
            marginBottom: '1%',
            width: '50%',
            alignSelf: 'center',
            justifyContent: 'center',
        },
        signUpSection: {
            justifyContent: 'center',
            alignItems: 'center',
            width: '65%',
            minWidth: 250,
            marginTop: '3%',
            marginBottom: 25,
            alignSelf: 'center',
            aspectRatio: 5/1,
        },
        subTitleText:{
            fontFamily:'nunito-regular', 
            fontSize: 16,
            marginTop: '5%',
            marginBottom: '5%',
        },
        standardText: {
            fontFamily: 'nunito-regular', 
            fontSize: 16, 
            color: '#9BA0A2',
            marginTop: '2%'
        },
        thinButtonContainer: {
            flex: 1,
            alignSelf: 'center',
            justifyContent: 'center',
            paddingHorizontal: 10,
            minHeight: 50,  
        },
        thinButton:{
            alignItems: 'center',
            backgroundColor: '#fff',
            padding: 10,
            maxWidth: 300,
            minWidth: 200,
            borderRadius: 8,
            borderWidth: 1,
            borderColor: '#58BEEF',
        },
        thinButtonText:{
            color: '#0098CD', 
            fontSize: 22,
            alignSelf: 'center',
        },
    });

export default {AuthScreenStyles}