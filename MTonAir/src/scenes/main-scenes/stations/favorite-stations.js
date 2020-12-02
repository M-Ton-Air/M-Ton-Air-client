import { UserService } from 'mta_services/index';
import React from 'react';
import { View, Image, Text, TouchableNativeFeedback } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';
import { NavigationScreenProp } from 'react-navigation';
import global from 'mta_utils/global';
import { AqicnDataEntity } from 'mta_models/index';
import imgPaths from 'mta_assets/img/img-paths';
import { ScrollView } from 'react-native-gesture-handler';
import homeStyles from 'mta_styles/home-styles';
import { MtaLogo } from 'mta_components/';
import { Colors } from 'mta_assets/index';
import { Icon } from 'react-native-elements';

const FavoriteStations = ({navigation}) => 
{
    /**@type {NavigationScreenProp} */
    const _navigation = navigation;

    /**@type {UserService} */
    const userService = new UserService(global.user);

    const onFirstLoading = false;

    /** @typedef {Array<AqicnDataEntity>} aqicnData array that holds all aqicnDataEntities */
    /** @typedef {Function} setAqicnData method that sets the array */
    /** @type {[aqicnData, setAqicnData]} */
    const [aqicnData, setAqicnData] = React.useState(null);

    /** @typedef {Array} list */
    /** @typedef {Function} setList */
    /** @type {[list, setList]} */
    const [list, setList] = React.useState(null);
    
    React.useEffect(() => 
    {
        //onLoading
        fetchFavoriteStations();

        //onTabFocus events
        const unsubscribe = navigation.addListener('focus', () => {
            fetchFavoriteStations();
            return unsubscribe;
        });
    }, [navigation]);


    const fetchFavoriteStations = () =>
    {
        userService.getFavoriteStations( (data) =>
        {
            // sorts aqi by ascending order
            data.sort((a, b) => b.airQuality - a.airQuality);
            setAqicnData(data);
            initializeList(data);
        });
    }

    const initializeList = (data) =>
    {
        let newList = [];
        for(let i = 0; i < data.length; i++)
        {
            /** @type {AqicnDataEntity} */
            let currentAqicnData = data[i];
            let aqiColor = AqicnDataEntity.aqiToHexadecimalColor(currentAqicnData.airQuality);
            if(aqiColor === Colors.getModerate())
            {
                aqiColor = '#f0d400';
            }
            newList.push(
            {
               id:currentAqicnData.station.idStation,
               stationName:currentAqicnData.station.stationName,
               country:currentAqicnData.station.country,
               iso2:currentAqicnData.station.iso2,
               aqi:currentAqicnData.airQuality,
               aqi_word:AqicnDataEntity.aqiToText(currentAqicnData.airQuality),
               aqi_color:aqiColor,
               temp: currentAqicnData.temperature,
               dominent: currentAqicnData.dominentMeasure,
               pm2_5: currentAqicnData.pm25,
               humidity:currentAqicnData.humidity,
               no2: currentAqicnData.no2,
               pm10: currentAqicnData.pm10,
               o3: currentAqicnData.o3,
               pressure:currentAqicnData.pressure,
               wind:currentAqicnData.wind
            });
        }
        if(data.length != 0)
        {
            setList(newList);
        }
    }

    const handleDelete = (stationId) =>
    {
        //removes from UI
        let filtered = list.filter( (value, index, arr) =>
        {
            return value.id != stationId;
        });
        setList(filtered);

        //remove from DB
        userService.deleteFavoriteStation(stationId, (data) =>
        {
            console.log(data);
        })
    }


    return(
        <ScrollView>
        {
            list != null ?
            list.map((l, i) =>(
                <ListItem 
                    key={i} 
                    bottomDivider={true}>

                    <ListItem.Content>
                    <TouchableNativeFeedback onPress={() => handleDelete(l.id)}>

                        <View style={{flexDirection:'row-reverse', alignSelf:'flex-end', marginBottom:1}}>
                            <Icon 
                                name='close'
                                type='ant-design' 
                                color='#000'
                                size={16}/>
                        </View>
                    </TouchableNativeFeedback>

                        <View style={{flexDirection:'row'}}>
                            <Image source={imgPaths['flag_' + l.iso2.toLowerCase()]}
                                style={homeStyles.favFlag}
                            />
                            <ListItem.Title style={homeStyles.favStationTitle}>
                                {l.stationName}{', '}{l.country}
                            </ListItem.Title>
                        </View>
                        <View style={homeStyles.favAqiContainer}>
                        <Text style=
                        {{
                            backgroundColor:l.aqi_color,
                            alignItems:'flex-start',
                            width:40,
                            fontFamily:'Product-Sans-Bold',
                            color:'#fff',
                            textAlign:'center',
                            alignContent:'center',
                            alignItems:'center',
                            
                        }}>
                            {l.aqi} 
                            </Text>
                            <Text style=
                            {{
                                color:l.aqi_color,
                                fontFamily:'Product-Sans-Bold'
                            }}>
                            {'  '} {l.aqi_word}
                            </Text>
                            {
                                l.temp != null ?
                                <Text style={homeStyles.favStationDetail}>
                                    {'  '} {Math.round(l.temp) + '°C'}
                                </Text> : false
                            }
                            {
                                l.dominent != null ?
                                <Text style={homeStyles.favStationDetail}>
                                    {'   -  '} {'Main polluant : '}
                                    <Text style={{fontFamily:'Product-Sans-Bold'}}>
                                        {l.dominent}
                                    </Text>
                                </Text> : false
                            }
                        </View>

                    </ListItem.Content>
                </ListItem>
            )) :  
            <View>
                <Text style={homeStyles.noStationsTitle}>
                    No stations yet
                </Text>
                <View style={{opacity:0.4}}>
                    <MtaLogo/>
                </View>
            </View>
        }
        <View>
        {/*// TODO : ADD BUTTON 'add a favorite station' THAT WILL OPEN THE SEARCH TAB */}
            <Text>
                MY BUTTON
            </Text>
        </View>
        </ScrollView>

    );
};

export default FavoriteStations;