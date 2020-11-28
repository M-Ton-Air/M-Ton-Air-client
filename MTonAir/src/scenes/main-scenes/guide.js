import React from 'react';
import { Text } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';
import {WebView} from 'react-native-webview';

/**
 * Guide component that displays into a scrollview various elements
 * about the application, the measures, etc.
 */
const Guide = ({navigation}) => 
{
    /**@type {NavigationScreenProp} */
    const _navigation = navigation;

    return(
        <WebView source= {{ uri : 'https://aqicn.org/scale/' }}/>
    );
};

export default Guide;