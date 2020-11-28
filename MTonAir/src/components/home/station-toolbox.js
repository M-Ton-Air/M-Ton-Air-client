import React from 'react';
import {Text, View, TouchableNativeFeedback} from 'react-native';
import { AqicnDataEntity } from 'mta_models/index'
import homeStyles from 'mta_styles/home-styles';


const StationToolbox = (props) =>
{
    /** @type {AqicnDataEntity}*/
    //const aqcicnDataEntity = props.aqcicnDataEntity;

    return(
        <View elevation={6} style={homeStyles.stationToolbox}>
            <Text>
                Hi
            </Text>
        </View>
    );

};

export default StationToolbox;