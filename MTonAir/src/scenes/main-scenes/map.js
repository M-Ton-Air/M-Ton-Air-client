import React from 'react';
import { ToastAndroid, View, Text, TouchableNativeFeedback } from 'react-native';
//import MapView, {Marker} from 'react-native-maps';
import MapView from 'react-native-map-clustering';
import { Callout, Marker } from 'react-native-maps'
import homeStyles from 'mta_styles/home-styles';
import { AqicnDataEntity, UserEntity } from 'mta_models/index';
import Geolocation from '@react-native-community/geolocation';
import { Icon } from 'react-native-elements';
import global from 'mta_utils/global';
import AqicnDataService from 'mta_services/aqicndata-service';
import { Timeout } from 'mta_utils/index';
import { NavigationScreenProp } from 'react-navigation';
import { StationToolbox } from 'mta_components/index';

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
"dorian.na@gmail.com",
"123456789");
global.user.jwt = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJkb3JpYW4ubmFAZ21haWwuY29tIiwiZXhwIjoxNjA2Njk5Njk5LCJpYXQiOjE2MDY2NTY0OTl9.G8Q9W-9DYvvcWNrEU67_TXIqCz4oQakJFVEEhVKMwK8OjPT-x41fE2wBssdxfBVwzPa-dcy3VXkYPYQ5ZMPD3A";
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
    const [aqicnData, setAqicnData] = React.useState(null);

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
                    setAqicnData(data);
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

    const addStationToFavorites = (idStation) =>
    {
        console.log('station n°', idStation);
    }


    return(
        <View style={homeStyles.container}>
            <MapView 
                zoomTapEnabled={false}
                ref={mapRef}
                style={homeStyles.map}
                showsMyLocationButton={true}
                showsUserLocation={true}
                initialRegion={DEFAULT_REGION}>
                {
                    aqicnData != null ?
                        aqicnData.map( (aqicnCurrentData, index ) => (
                        <Marker
                            key={aqicnCurrentData.station.idStation}
                            coordinate=
                            {{
                                // TODO INTO OUR DATABASE, LAT / LONG ARE INVERTED //
                                latitude:aqicnCurrentData.station.longitude,
                                longitude:aqicnCurrentData.station.latitude
                            }}
                            aqi={aqicnCurrentData.airQuality}
                            pinColor={AqicnDataEntity.aqiToHexadecimalColor(aqicnCurrentData.airQuality)}
                        >
                        <Callout tooltip onPress={() => addStationToFavorites(aqicnCurrentData.station.idStation)}>
                            <StationToolbox aqicnDataEntity={aqicnCurrentData} station={aqicnCurrentData.station}/>
                        </Callout>
                        </Marker>)) : false
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

