import React, { Component } from 'react';
import { ToastAndroid, View, TouchableNativeFeedback, ActivityIndicator, StyleSheet } from 'react-native';
//import MapView, {Marker} from 'react-native-maps';
import MapView from 'react-native-map-clustering';
import { Marker } from 'react-native-maps'
import homeStyles from 'mta_styles/home-styles';
import { AqicnDataEntity, StationEntity, UserEntity } from 'mta_models/index';
import Geolocation from '@react-native-community/geolocation';
import Spinner from 'react-native-loading-spinner-overlay';
import { Icon } from 'react-native-elements';
import global from 'mta_utils/global';
import AqicnDataService from 'mta_services/aqicndata-service';
import { Timeout } from 'mta_utils/index';
import { NavigationScreenProp } from 'react-navigation';

const getCurrentLocation = () => {
    return new Promise((resolve, reject) => {
      Geolocation.getCurrentPosition(position => resolve(position), e => reject(e));
    });
};

const DEFAULT_REGION =
{
    latitude:35,
    longitude:15,
    latitudeDelta:70,
    longitudeDelta:70
};

////////////////////////////////////////////// REMOVE IN PRODUCTION //////////////////////////////////////////////
// MOCK {//TODO : REMOVE IN PROD}
global.user = new UserEntity
("Dorian",
"Test",
"na@gmail.com",
"123456789");
global.user.jwt = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJkb3JpYW5jZy5uYUBnbWFpbC5jb20iLCJleHAiOjE2MDY1NDk5ODcsImlhdCI6MTYwNjUyODM4N30.1-hn-sJncswnO9ux9oZz33sq3JBNvjnpNec9JgiHQxlgB-cIgaiLjacgKuUyY5V-siOg6ooQVhIqn8RfrxKY2Q";
////////////////////////////////////////////// REMOVE IN PRODUCTION //////////////////////////////////////////////

const Map = ({ navigation}) =>
{
    /* properties */

    /** @type {NavigationScreenProp} _navigation */
    const _navigation = navigation;

    /** @type {UserEntity} user */
    const user = global.user;

    /** @typedef {AqicnDataEntity} aqicnData array that holds all aqicnDataEntities */
    /** @typedef {Function} setAqicnData method that sets the array */
    /** @type {[aqicnData, setAqicnData]} */
    const [aqicnData, setAqicnData] = React.useState();

    /** @typedef {Array} aqicnMarkers array that holds all the markers */
    /** @typedef {Function} setAqicnMarkers method that sets the array */
    /** @type {[aqicnMarkers, setAqicnMarkers]} */
    const [aqicnMarkers, setAqicnMarkers] = React.useState();

    const [isLoading, setIsLoading] = React.useState(true);

    const mapRef = React.useRef();

    const clustersRef = React.useRef();

// change cluster color according to contained markers (with an average)
//https://github.com/venits/react-native-map-clustering/pull/152

    /**
     * Called on loading
     */
    React.useEffect( () =>
    {
        setAqicnMarkers([]);
        centerToCurrentLocation();
        loadAllAqicnMarkersInMemory();
        setIsLoading(false);
    }, []);

    /**
     * Centers the map to the current user location
     */
    const centerToCurrentLocation = () =>
    {
        let loc = getCurrentLocation().then(position =>
        {
            if(position)
            {
                //console.log("USER POSITION : ", position.coords.latitude, position.coords.longitude);
                const region =
                {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    latitudeDelta: 0.8,
                    longitudeDelta: 0.8,
                }

                mapRef.current.animateToRegion(region, 700);
            }
            else
            {
                ToastAndroid.showWithGravity('No location access 😪', ToastAndroid.SHORT, ToastAndroid.CENTER);
            }
        });
        loc.catch((error) =>
        {
            console.log(error);
            ToastAndroid.showWithGravity('No location access 😪', ToastAndroid.SHORT, ToastAndroid.CENTER);
        });
        return loc;
    }

    /**
     * Loads all the daily aqicn data into the aqicnData variable
     * Loads all the markers into the aqicnMarkers variable.
     */
    const loadAllAqicnMarkersInMemory = () =>
    {
        let service = new AqicnDataService(user.jwt)

        let process = Timeout.timeout(30*1000, new Promise( () =>
        {
            service.getAllAqicnData(/** @param {Array<AqicnDataEntity>} data */ (data) =>
            {
                try
                {
                    //callback executed if data were fetched from the server
                    let markers = service.getMarkersFromData(data)
                    setAqicnData(data);
                    setAqicnMarkers(markers);
                    setIsLoading(false);
                }
                catch(error)
                {
                    // TODO : RECONNECTED USER AND CALL THE METHOD ONCE AGAIN
                    console.log(error);
                    ToastAndroid.showWithGravity('Something went wrong 😪:\n\n' + error, ToastAndroid.LONG, ToastAndroid.CENTER);
                }
            });
        }));
        process.catch( (error) =>
        {
            if(isLoading)
            {
                console.log(error);
                // ToastAndroid.showWithGravity('Can\'t fetch Aqicn data 😪', ToastAndroid.SHORT, ToastAndroid.CENTER);
            }
        });
    }

    return(
        <View style={homeStyles.container}>
            <MapView 
                ref={mapRef}
                children={clustersRef}    
                style={homeStyles.map}
                showsMyLocationButton={true}
                showsUserLocation={true}
                initialRegion={DEFAULT_REGION}>
                {
                    aqicnMarkers != null ?
                        aqicnMarkers.map( (marker, index ) => (
                        <Marker
                            key={marker.id}
                            coordinate={marker.latlng}
                            title={marker.title}
                            description={marker.description}
                            pinColor={marker.color}
                        />)) : false
                }
            </MapView>
            <TouchableNativeFeedback onPress={centerToCurrentLocation}>
                <View style={homeStyles.centerButton}>
                    <Icon 
                        name='crosshairs-gps'
                        type='material-community' 
                        color='#1a96f8'
                        size={40}
                        />
                </View>
            </TouchableNativeFeedback>
        </View>
    );
}

export default Map;
