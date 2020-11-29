import { StyleSheet } from 'react-native';
import Colors from '../assets/strings/colors'

export default StyleSheet.create({

    container: { 
        flex: 1, 
        padding: 16, 
        paddingTop: 30, 
        backgroundColor: '#fff' 
    },

    text: {
        margin: 6,
        fontFamily: 'Product-Sans-Regular',
        fontSize: 16
    },

    textTitle: { 
        margin: 6, 
        textAlign: "center", 
        color: '#0093FF',
        fontWeight: 'bold', 
        textAlign: 'center', 
        fontSize: 30,
        fontFamily: 'Product-Sans-Regular'
    },

    head: { 
        height: 70
    },

    textWhite: { 
        margin: 6, 
        textAlign: "center", 
        backgroundColor: '#d0d4d4',
        color: '#FFFFFF',
        fontFamily:'Product-Sans-Regular'
    },

    textBlack: { 
        margin: 6, 
        textAlign: "center", 
        backgroundColor: '#d0d4d4',
        color: '#000000',
        fontFamily:'Product-Sans-Regular'
    },

    row: { 
        backgroundColor: '#148727' 
    },
        
    cell: { 
        backgroundColor: '#de8a18' 
    },

    good: {
        backgroundColor: Colors.getGood()
    },

    moderate: {
        backgroundColor: Colors.getModerate()
    },

    unhealthyForSG: {
        backgroundColor: Colors.getUnhealthyForSensitiveGroups ()
    },

    unhealthy: {
        backgroundColor: Colors.getUnhealthy()
    },

    veryUnhealthy: {
        backgroundColor: Colors.getVeryUnhealthy()
    },

    hazardous: {
        backgroundColor: Colors.getHazardous()
    },

    hyperLink:
    {
        color:'#83a2df',
        textDecorationLine:'underline'
    },


});