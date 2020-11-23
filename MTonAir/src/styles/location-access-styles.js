import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    text:
    {
        color:'#3d8af7',
        alignSelf:'center',
        textAlign:'center'
    },
    locationTitle:
    {
        fontFamily:'Product-Sans-Bold',
        marginTop:10,
        fontSize:50,
        textShadowOffset:
        {
            width: 0,
            height: 2
        },
    },
    welcomeText:
    {
        fontFamily:'Product-Sans-Regular',
        fontSize:25,
        marginBottom:20
    },
    locationText:
    {
        fontFamily:'Product-Sans-Regular',
        fontSize:14
    },
    locationLogo:
    {
        height:300,
        width:300,
        alignSelf:'center',
        marginTop:30,
        marginBottom:10
    },
    grantAccessButton:
    {
        marginTop:20
    }
});