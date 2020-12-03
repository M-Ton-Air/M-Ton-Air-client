import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';
import imgPaths from 'mta_assets/img/img-paths';
import homeStyles from 'mta_styles/home-styles';

const StationDetails = ({ route, navigation}) => 
{
    /**@type {NavigationScreenProp} */
    const _navigation = navigation;
    const listObject = route.params.listObject

    return(
        <View >
            <View style={styles.container}>
                <Image source={imgPaths['flag_' + listObject.iso2.toLowerCase()]}
                    style={styles.flag}
                />
                <Text style={styles.title}>
                    {listObject.stationName}{', '}{listObject.country}
                </Text>
            </View>
            <View>
                <Text style={styles.subdivisions}>
                    {((listObject.sub1 != null) ? listObject.sub1 : '') + ((listObject.sub2 != null) ? ', ' + listObject.sub2 +  ((listObject.sub3 != null) ? ', ' + listObject.sub3 : '') : '')}
                </Text>
            </View>
            <View>
                {
                    listObject.aqi != null ?
                    <View style={homeStyles.favAqiContainer}>
                        <Text style=
                        {{
                            backgroundColor:listObject.aqi_color,
                            alignItems:'flex-start',
                            width:50,
                            fontFamily:'Product-Sans-Bold',
                            color:'#fff',
                            textAlign:'center',
                            alignContent:'center',
                            alignItems:'center',
                            marginLeft:10
                            
                        }}>
                        {listObject.aqi} 
                        </Text>
                        <Text style=
                            {{
                                color:listObject.aqi_color,
                                fontFamily:'Product-Sans-Bold'
                            }}>
                            {' '} {listObject.aqi_word}
                        </Text>
                    </View> : false
                }
            </View>
            <View style={{marginTop:5}}>
                {   listObject.temp != null ? 
                    <Text style={styles.measure}>
                        Temperature : {listObject.temp + '°C'}
                    </Text> : false
                }

                {   listObject.dominent != null ? 
                    <Text style={styles.measure}>
                        Dominant measure : {listObject.dominent}
                    </Text> : false
                }

                {   listObject.pm10 != null ? 
                    <Text style={styles.measure}>
                        PM10 : {listObject.pm10 }
                    </Text> : false
                }

                {   listObject.pm2_5 != null ? 
                    <Text style={styles.measure}>
                        PM2.5 : {listObject.pm2_5}
                    </Text> : false
                }   

                {   listObject.humidity != null ? 
                    <Text style={styles.measure}>
                    humidity : {listObject.humidity + '%'}
                    </Text> : false
                }

                {   listObject.no2 != null ? 
                    <Text style={styles.measure}>
                        No2 : {listObject.no2}
                    </Text> : false
                }

                {   listObject.o3 != null ? 
                    <Text style={styles.measure}>
                        O3 : {listObject.o3}
                    </Text> : false
                }

                {   listObject.pressure != null ? 
                    <Text style={styles.measure}>
                        Pressure : {listObject.pressure}
                    </Text> : false
                }

                {   listObject.wind != null ? 
                    <Text style={styles.measure}>
                        Wind : {listObject.wind}
                    </Text> : false
                }
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: 
    {
      marginTop: 20,
      flexDirection:'row',
    },
    title:
    {
        fontFamily:'Product-Sans-Regular',
        fontSize:18,
        marginLeft:6,
        flex:1,
        flexWrap:'wrap',
        alignSelf:'center'
    },
    measure:
    {
        fontFamily:'Product-Sans-Regular',
        marginLeft:10,
        marginTop:15,
        fontSize:17
    },
    flag:
    {
        marginLeft:10,
        width:50,
        height:35
    },
    subdivisions:
    {
        marginTop:5,
        marginLeft:66,
        fontFamily:'Product-Sans-Regular'
    }
  });

export default StationDetails;

