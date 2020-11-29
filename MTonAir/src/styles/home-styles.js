import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: 
    {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    map: 
    {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },
    centerButton:
    {
      marginBottom:20,
      marginLeft:'auto',
      marginRight:20,
    },
    stationToolbox:
    {
      backgroundColor:'#fff',
      borderRadius:6,
      borderColor:'#ccc',
      borderWidth:0.5,
      padding:3,
      width:300,
      height:70,
      marginBottom:10
    },
    toolBoxFlagLocationHeart:
    {
      flexDirection:'row',
    },
    toolBoxStationDetails:
    {
      alignItems:'flex-start',
      fontSize:14,
      marginBottom:5,
      fontFamily:'Product-Sans-Regular'
    },

    flag:
    {
      width:33,
      height:22,
      paddingBottom:5
    },
    toolBoxHeart:
    {
      alignItems:'flex-end',
      marginLeft:'auto',
      flexDirection:'row',
    },
    mTonAirHeart:
    {
      width:26,
      height:26,
    },
    toolBoxAqiFavorite:
    {
      flexDirection:'row',
      marginTop:6,
      fontFamily:'Product-Sans-Regular'
    }
});