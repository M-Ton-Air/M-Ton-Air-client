import { UserService } from 'mta_services/index';
import React from 'react';
import { Text } from 'react-native';
import { ListItem } from 'react-native-elements';
import { FlatList } from 'react-native-gesture-handler';
import { NavigationScreenProp } from 'react-navigation';
import global from 'mta_utils/global';
import { AqicnDataEntity } from 'mta_models/index';

const FavoriteStations = ({navigation}) => 
{
    /**@type {NavigationScreenProp} */
    const _navigation = navigation;

    const onFirstLoading = false;

    /** @typedef {Array<AqicnDataEntity>} aqicnData array that holds all aqicnDataEntities */
    /** @typedef {Function} setAqicnData method that sets the array */
    /** @type {[aqicnData, setAqicnData]} */
    const [aqicnData, setAqicnData] = React.useState(null);

    const [list, setList] = React.useState(null);
    
    React.useEffect(() => 
    {
        //onLoading
        let onFirstLoading = true;
        fetchFavoriteStations();

        //onTabFocus events
        const unsubscribe = navigation.addListener('focus', () => {
            if(onFirstLoading)
            {
                onFirstLoading = false;
                return unsubscribe;
            }
            fetchFavoriteStations();
        });
        return unsubscribe;
    }, [navigation]);


    const fetchFavoriteStations = () =>
    {
        let service = new UserService(global.user);
        service.getFavoriteStations( (data) =>
        {
            setAqicnData(data);
            initializeList(data);
        });
    }

    const initializeList = (data) =>
    {
        let newList = [];
        for(let i = 0; i < data.length; i++)
        {
            let currentAqicnData = data[i];
            newList.push(
            {
               id:currentAqicnData.station.idStation,
               stationName:currentAqicnData.station.stationName,
               country:currentAqicnData.station.country,
               flag_url:'../../../assets/img/flags/' + currentAqicnData.station.iso2 + '.png'
            });
        }
        setList(newList);
    }


    return(
        <FlatList>
            <ListItem>
                
            </ListItem>
        </FlatList>
    );
};

export default FavoriteStations;