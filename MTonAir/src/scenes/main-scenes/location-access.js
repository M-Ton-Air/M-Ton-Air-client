import React from 'react';
import { View, Text, PermissionsAndroid } from 'react-native';
import { UserEntity } from 'mta_models/index';
import { MtaLogoXSmall, LocationLogo } from 'mta_components/index';
import { StringResources } from 'mta_assets/index';
import locationStyles from 'mta_styles/location-access-styles';
import { ButtonWithCallback } from 'mta_components/index'
import Toast from 'react-native-toast-message';

const LocationAccess = ({route, navigation}) => 
{
    /** @type {UserEntity} */
    const user = route.params.user;

    const handleGrantLocationAccess =  async () =>
    {
        // Android only.
        PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION).then( (allowed) =>
        {
            if(allowed)
            {
                // TODO
                // redirect
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
                //TODO
                //redirect
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