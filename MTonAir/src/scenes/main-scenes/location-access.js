import React from 'react';
import { View, Text, PermissionsAndroid } from 'react-native';
import { UserEntity } from 'mta_models/index';
import { MtaLogoXSmall, LocationLogo } from 'mta_components/index';
import { StringResources } from 'mta_assets/index';
import locationStyles from 'mta_styles/location-access-styles';
import { ButtonWithCallback } from 'mta_components/index'
import Toast from 'react-native-toast-message';
import { NavigationScreenProp } from 'react-navigation'; 
import global from 'mta_utils/global';

const LocationAccess = ({route, navigation}) => 
{

    /**@type {NavigationScreenProp} */
    const _navigation = navigation;


    // prevents user from going back with his phone buttons
    React.useEffect( () =>
    {
        navigation.addListener('beforeRemove', (e)  =>
        {
            e.preventDefault();
        });
    });

    /** @type {UserEntity} */
    //TODO RETRIEVE USER IN ANOTHER WAY + local storage
    const user = global.user;
    console.log(user);

    const handleGrantLocationAccess =  async () =>
    {
        // Android only.
        PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION).then( (allowed) =>
        {
            if(allowed)
            {
                navigation.navigate("Home");
            }
        })
        try 
        {
            const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
                title: 'Location is needed',
                message:
                'M\' Ton Air needs your location.',
                // buttonNeutral: 'Ask Me Later',
                buttonNegative: 'Cancel',
                buttonPositive: 'OK',
            });
            if (granted === PermissionsAndroid.RESULTS.GRANTED) 
            { 
                navigation.navigate("Home");
            } 
            else 
            {
                showToast('Too bad 😫', 'M\' Ton Air can\'t work without your location !', 'info')
            }
        } 
        catch (err) 
        {
            console.warn(err);
        }
    }

    /**
     * 
     * @param {String} title 
     * @param {String} message 
     * @param {String} type 'success | error | info'
     */
    function showToast(title, message, type)
    {
        Toast.show({
            text1: title,
            text2: message,
            type: type
        });
    }


    return (
        <View>
            <View style={{zIndex:999 /* just so that the toast is above everything */}}>
                <Toast ref={(ref) => Toast.setRef(ref)} />
            </View>
            <MtaLogoXSmall/>
            <Text style={ [locationStyles.locationTitle, locationStyles.text] }>
                Location
            </Text>
            <Text style={[locationStyles.welcomeText, locationStyles.text]}>
                Welcome { user.firstname } ! 
            </Text>
            <Text style={[locationStyles.locationText,  locationStyles.text]}>
                { StringResources.grantLocationAccessText() }
            </Text>
            <LocationLogo style={locationStyles.locationLogo}/>

            {/* Grant access button */}
            <View style={locationStyles.grantAccessButton}>
            <ButtonWithCallback buttonText='Grant access'
                blue={true}
                callback={handleGrantLocationAccess.bind(this)}/>
            </View>

        </View>
    );
};

export default LocationAccess;