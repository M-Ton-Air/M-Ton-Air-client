import React, { Component } from 'react';
import { ToastAndroid, View, TouchableNativeFeedback } from 'react-native';
import MapView, {Geojson} from 'react-native-maps';
import homeStyles from 'mta_styles/home-styles';
import { StationEntity } from 'mta_models/index';
import Geolocation from '@react-native-community/geolocation';
import Spinner from 'react-native-loading-spinner-overlay';
import { Icon } from 'react-native-elements'




const getCurrentLocation = () => {
    return new Promise((resolve, reject) => {
      Geolocation.getCurrentPosition(position => resolve(position), e => reject(e));
    });
};

const defaultRegion =
{
    latitude:45.761415578787926,
    longitude:4.87020492553711,
    latitudeDelta:40,
    longitudeDelta:40
};


export default class Map extends Component
{

    constructor(props)
    {
        super(props);
        this.state =
        {
            region:defaultRegion,
            loading:false,
        }
    }

    componentDidMount()
    {
        let loc = getCurrentLocation().then(position =>
        {
            if(position)
            {
                this.setState(
                {
                    region: 
                    {
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                        latitudeDelta: 0.8,
                        longitudeDelta: 0.8,
                    }
                });
                console.log(position);
            }
            else
            {
                showtoast('No location', 'Your location is disabled or we don\'t have access to it 😪.', 'info');
            }
        });
        loc.catch((error) =>
        {
            console.log(error);
            ToastAndroid.showWithGravity('No location access 😪', 5, ToastAndroid.CENTER);
        });
        return loc;
    }

    handleOnPressCenter()
    {
        // TODO : RECENTER
        console.log("pressed");
    }



    // TODO : récupérer les coordonnées de toutes les stations
    // TODO : créer des marqueurs pour toutes les coordonnées + index AQI dessus

    // TODO : Bouton pour recentrer l'utilisateur sur sa position
    // let myPlace

    

    render(){
        return(
        <View style={homeStyles.container}>
            <Spinner visible={this.state.loading}/>
            <MapView ref={map => this.map = map}
                style={homeStyles.map}
                showsMyLocationButton={true}
                showsUserLocation={true}
                region= {this.state.region}
                initialRegion=
                {{
                    latitude:45.761415578787926,
                    longitude:4.87020492553711,
                    latitudeDelta:40,
                    longitudeDelta:40
                }}>
            </MapView>
            <TouchableNativeFeedback onPress={this.handleOnPressCenter}>
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
    )}
}