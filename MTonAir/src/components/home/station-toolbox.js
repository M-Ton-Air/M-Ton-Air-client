import React from 'react';
import {Text, View, Image, TouchableNativeFeedback} from 'react-native';
import { AqicnDataEntity } from 'mta_models/index'
import homeStyles from 'mta_styles/home-styles';


const StationToolbox = (props) =>
{
    /** @type {AqicnDataEntity}*/
    const aqicnDataEntity = props.aqicnDataEntity;

    const aqiColor = AqicnDataEntity.aqiToHexadecimalColor(aqicnDataEntity.airQuality);
    const aqiText = AqicnDataEntity.aqiToText(aqicnDataEntity.airQuality);


    const getRandomEmoji = () =>
    {
        // generates randoms from 1 to 11
        switch(Math.floor((Math.random() * 11) + 1))
        {
            case 1:
                return '🥰';
            case 2:
                return '🎉';
            case 3:
                return '😄';
            case 4:
                return '✌';
            case 5:
                return '💙';
            case 6:
                return '😉';
            case 7:
                return '🙃';
            case 8:
                return '😀';
            case 9:
                return '😋';
            case 10:
                return '🥺';
            case 11:
                return '😛';
        }
    }


    return(
        <View>
            <View style={homeStyles.stationToolbox}>
                <View style={homeStyles.toolBoxFlagLocationHeart}>
                    {/* yes, an image wrapped into a Text */}
                    <Text style={homeStyles.toolBoxStationDetails}>
                        <Image
                            style={homeStyles.flag}
                            source={require('../../assets/img/flags/us.png')}
                        />
                        {' '} {aqicnDataEntity.station.stationName}


                    </Text>
                    <Text style={homeStyles.toolBoxHeart}>
                    <Image
                            style={homeStyles.mTonAirHeart}
                            source={require('../../assets/img/heart.png')}
                        />
                    </Text>
                </View>
                <View style={homeStyles.toolBoxAqiFavorite}>
                    <Text style=
                    {{
                        backgroundColor:aqiColor,
                        alignItems:'flex-start',
                        width:33,
                        fontFamily:'Product-Sans-Regular'
                    }}>
                        {'  '}{aqicnDataEntity.airQuality}{'  '}
                    </Text>
                    <Text style=
                    {{
                        color:aqiColor,
                        fontFamily:'Product-Sans-Bold'
                    }}>
                        {'  '}{aqiText}
                    </Text>
                    <Text style=
                    {{
                        alignItems:'flex-end',
                        marginLeft:'auto',
                        fontFamily:'Product-Sans-Regular',
                    }}>
                        Fav me  {getRandomEmoji()} {' '}
                    </Text>
                </View>
            </View>
            {/* <Text>
                {AqicnDataEntity.aqiToText(aqicnDataEntity.airQuality)}
            </Text> */}

    </View>
    );

};

export default StationToolbox;