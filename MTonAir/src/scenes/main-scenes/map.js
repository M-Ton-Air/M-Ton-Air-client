import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import Mapiew from 'react-native-maps';


/**
 * The map component displays a map  
 */
const Map = ({navigation}) => 
{

    const styles = StyleSheet.create({
        container: {
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          justifyContent: 'flex-end',
          alignItems: 'center',
        },
        map: {
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        },
      });

    return(
        <View style={styles.container}>
            <MapView
                style={styles.map}
                initialRegion={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
                }}/>
        </View>
    );
};

export default Map;