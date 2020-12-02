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
import {AqicnDataService, UserService} from 'mta_services/index';
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

const Map = ({ navigation}) =>
{
    /* properties */

    /** @type {NavigationScreenProp} _navigation */
    const _navigation = navigation;

    /** @type {UserEntity} user */
    const user = global.user;

    /** @typedef {Array<AqicnDataEntity>} aqicnData array that holds all aqicnDataEntities */
    /** @typedef {Function} setAqicnData method that sets the array */
    /** @type {[aqicnData, setAqicnData]} */
    const [aqicnData, setAqicnData] = React.useState(null);

    const [isLoading, setIsLoading] = React.useState(true);

    const mapRef = React.useRef();
    const clustersRef = React.useRef();

    /** @type {Array<Marker>} */
    let markersRef = [];

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

    const addStationToFavorites = (stationId) =>
    {
        let service = new UserService(global.user);
        service.addToFavorite(stationId, (data) =>
        {
            if(parseInt(data.statusCode) === 200)
            {
                ToastAndroid.showWithGravity('Station added to your favorites 🎉', ToastAndroid.SHORT, ToastAndroid.CENTER);
            }
            else if(parseInt(data.statusCode) === 400)
            {
                ToastAndroid.showWithGravity('The station is already into your favorites 😉', ToastAndroid.LONG, ToastAndroid.CENTER)
            }
            else
            {
                ToastAndroid.showWithGravity('Something went wrong 😪', ToastAndroid.LONG, ToastAndroid.CENTER); 
            }
        });
    }

    const events = [];

    const simulatePress = (e) =>
    {
         e.persist();
         let ref = markersRef;
         events[e.nativeEvent.id] = setInterval( () => ref[e.nativeEvent.id].showCallout(), 0);
         setTimeout( () =>
         {
            clearInterval(events[e.nativeEvent.id]);
         }, 800)
         //clearInterval(events[e.nativeEvent.id]);
        //e.stopPropagation();
        // markersRef[e.nativeEvent.id].onPress;
        // // for(let i = 0; i < 10; i++)
        // // {
        // //     console.log(e.nativeEvent.id);
        // //     markersRef[e.nativeEvent.id].hideCallout();
        // //     markersRef[e.nativeEvent.id].showCallout();
        // // }
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
                            identifier={String(aqicnCurrentData.station.idStation)}
                            coordinate=
                            {{
                                // INTO OUR DATABASE, LAT / LONG ARE INVERTED //
                                latitude:aqicnCurrentData.station.longitude,
                                longitude:aqicnCurrentData.station.latitude
                            }}
                            aqi={aqicnCurrentData.airQuality}
                            pinColor={AqicnDataEntity.aqiToHexadecimalColor(aqicnCurrentData.airQuality)}
                            onPress={(e) => simulatePress(e)}
                            ref={ (ref) => markersRef[aqicnCurrentData.station.idStation] = ref}
                            tracksViewChanges={false}
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

