import {StyleSheet, Platform} from 'react-native';

const MainAppStyles = StyleSheet.create ({
        container : {
            alignItems: 'center',
            backgroundColor: '#1177B0', 
            width: '100%',
            flex: 1,
        },
        pallet:{
            backgroundColor: '#FBFBFB',
            width: '100%',
            flex: 1,
            maxWidth: 500,
            alignSelf: 'center',
        },
        homePairsTitle: {
            color: '#0098CD', 
            fontFamily: 'nunito-regular', 
            fontSize: 24,
        },
        homePairsNavHeader: {
            width: '100%', 
            borderRadius: 1,
            justifyContent: 'center',
            alignSelf: 'center',
            alignItems: 'center'
        },
        authCardContainer: {
            maxWidth: 375,
            width: '85%', 
            borderRadius: 8,
            shadowRadius: 10,
            shadowOffset: {height :5, width: 0},
        },
        /**This is the contianer style to use when all assets of the program have been loaded. */
        assetLoadedContainer: {//This container will only set default items to center of the pallet. It will always have a blue pallet behind it as well.
            maxWidth: 500,
            backgroundColor: '#FBFBFB',
            alignSelf: 'center',
            width: '100%',
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
            marginTop: '10%',
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
            fontSize: 14,
            marginTop: '5%',
            marginBottom: '7%',
            alignSelf: 'flex-start'
        },
        standardText: {
            fontFamily: 'nunito-regular', 
            fontSize: 14, 
            color: '#9BA0A2',
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
            fontSize: 16,
            alignSelf: 'center',
        },
    });

export default {MainAppStyles}
export {MainAppStyles}