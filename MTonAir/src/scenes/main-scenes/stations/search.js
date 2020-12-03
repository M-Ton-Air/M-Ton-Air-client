import { StationService, UserService } from 'mta_services/index';
import React from 'react';
import { SearchBar } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import { NavigationScreenProp } from 'react-navigation';
import { View, Image, Text, ToastAndroid } from 'react-native';
import { ListItem } from 'react-native-elements';
import global from 'mta_utils/global';
import imgPaths from 'mta_assets/img/img-paths';
import homeStyles from 'mta_styles/home-styles';
import { MtaLogo } from 'mta_components/index';
import { StationEntity } from 'mta_models/index';


const Search = ({navigation}) => 
{

    /**@type {NavigationScreenProp} */
    const _navigation = navigation;
    
    /** @type {UserEntity} */
    const user = global.user;

    /** @type {StationService} */
    const stationService = new StationService(user.jwt);

     /** @type {UserService} */
    const userService = new UserService(user);


    //const [search, setSearch] = React.useState();

    /** @typedef {Array<Station>} stations array that holds the found stations */
    /** @typedef {Function} setStations method that sets the array */
    /** @type {[stations, setStations]} */
    const [stations, setStations] = React.useState(null);

    /** @typedef {Array} list */
    /** @typedef {Function} setList */
    /** @type {[list, setList]} */
    const [list, setList] = React.useState(null);

    const [search, setSearch] = React.useState();
    

    /**
     * Called on loading
     */
    React.useEffect( () =>
    {

    }, []);

    const fetchFavoriteStations = (any) =>
    {
        setSearch(any);
        if(any != "")
        {
            stationService.get20MatchingStations(any, 40, (data) =>
            {
                userService.getFavoriteStationsOnly((dataToRemove) =>
                {
                    console.log(dataToRemove);
                    let filtered = data
                    for(let i = 0; i < data.length; i++)
                    {
                        for(let j = 0; j < dataToRemove.length; j++)
                        {
                            // removes dataToRemove elements
                            if(data[i].idStation === dataToRemove[j].idStation)
                            {
                                filtered = filtered.filter(station => station.idStation != data[i].idStation)
                            }
                        }
                    }
                    setStations(filtered);
                    refreshList(filtered);
                });
            });
        }
    }

    const refreshList = (data) =>
    {
        let newList = [];
        for(let i = 0; i < data.length; i++)
        {
            /** @type {StationEntity} */
            let currentStation = data[i];
            newList.push(
            {
               idStation:currentStation.idStation,
               stationName:currentStation.stationName,
               country:currentStation.country,
               iso2:currentStation.iso2,
               sub1:currentStation.subdivision1,
               sub2:currentStation.subdivision2,
               sub3:currentStation.subdivision3
            });
        }
        setList(newList);
    }

    const handleAddToFavorite = (station) =>
    {
        userService.addToFavorite(station.idStation, (data) =>
        {
            console.log(data);
            let arr = list.filter( (value, index, arr) =>
            {
                return value.idStation != station.idStation
            });
            setList(arr);
            ToastAndroid.showWithGravity('Station added to your favorites 🎉', ToastAndroid.SHORT, ToastAndroid.CENTER);
        })
    }

    const noStationsFound = () =>
    {
        return(
            <View>
                <Text style={homeStyles.noStationsTitle}>
                    No stations found...
                </Text>
                <View style={{opacity:0.4}}>
                    <MtaLogo/>
                </View>
            </View>
        );
    }



    return(
        <ScrollView>

            <SearchBar
                placeholder='Search for a new station...'
                onChangeText={(text) => fetchFavoriteStations(text)}
                maxLength={30}
                value={search}
                lightTheme={true}
            />
            {       
                list != null ?
                list.length != 0 ?
                list.map((l, i) =>(
                        <ListItem 
                            onPress={() => handleAddToFavorite(l)}
                            bottomDivider={true}
                            key={i}>
                            
                            <ListItem.Content>
                                <View style={{flexDirection:'row'}}>
                                    <Image source={imgPaths['flag_' + l.iso2.toLowerCase()]}
                                        style={homeStyles.favFlag}
                                    />
                                    <ListItem.Title style={homeStyles.favStationTitle}>
                                        {l.stationName}{', '}{l.country}
                                    </ListItem.Title>
                                </View>
                                <Text>
                                    {((l.sub1 != null) ? l.sub1 : '') + ((l.sub2 != null) ? ', ' + l.sub2 +  ((l.sub3 != null) ? ', ' + l.sub3 : '') : '')}
                                </Text>
                            </ListItem.Content>
                        </ListItem> 
                    )) :  
                    noStationsFound() : 
                    noStationsFound()
            }
        </ScrollView>
    );
};

export default Search;