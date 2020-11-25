import React from 'react';
import { Text } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';

const Search = ({navigation}) => 
{
    /**@type {NavigationScreenProp} */
    const _navigation = navigation;

    return(
        <Text>Hello from search city page !</Text>
    );
};

export default Search;