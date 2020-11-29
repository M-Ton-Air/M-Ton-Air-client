import { UserService } from 'mta_services/index';
import React from 'react';
import { View, Image, Text } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';
import { NavigationScreenProp } from 'react-navigation';
import global from 'mta_utils/global';
import { AqicnDataEntity } from 'mta_models/index';
import imgPaths from 'mta_assets/img/img-paths';
import { ScrollView } from 'react-native-gesture-handler';
import homeStyles from 'mta_styles/home-styles';
import { MtaLogo } from 'mta_components/';

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
            /** @type {AqicnDataEntity} */
            let currentAqicnData = data[i];
            newList.push(
            {
               id:currentAqicnData.station.idStation,
               stationName:currentAqicnData.station.stationName,
               country:currentAqicnData.station.country,
               iso2:currentAqicnData.station.iso2,
               aqi:currentAqicnData.airQuality,
               aqi_word:AqicnDataEntity.aqiToText(currentAqicnData.airQuality),
               aqi_color:AqicnDataEntity.aqiToHexadecimalColor(currentAqicnData.airQuality),
               temp: currentAqicnData.temperature,
               pm2_5: currentAqicnData.pm25,
               humidity:currentAqicnData.humidity
            });
        }
        if(data.length != 0)
        {
            setList(newList);
        }
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
                        <Image source={imgPaths['flag_' + l.iso2.toLowerCase()]}
                            style={homeStyles.favFlag}
                        />
                        <ListItem.Title style={homeStyles.favStationTitle}>{l.stationName}{', '}{l.country}</ListItem.Title>
                        <View style={homeStyles.favAqiContainer}>
                        <Text style=
                        {{
                            backgroundColor:l.aqi_color,
                            alignItems:'flex-start',
                            width:40,
                            fontFamily:'Product-Sans-Regular',
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
                            {'   '} {l.aqi_word}
                            </Text>
                            {
                                l.temp != null ?
                                <Text style={homeStyles.favStationDetail}>
                                    {'   '} {l.temp + '°C'}
                                </Text> : false
                            }
                            {
                                isNaN(l.pm2_5) ?
                                <Text style={homeStyles.favStationDetail}>
                                    {'    '} {'pm25 : ' + l.pm25}
                                </Text> : false
                            }
                            {
                                l.humidity != null ?
                                <Text style={homeStyles.favStationDetail}>
                                    {'    '} {'humidity: ' + l.humidity + '%'}
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