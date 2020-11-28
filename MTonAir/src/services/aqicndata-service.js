import { ServerConfig, ServerEndpoints } from 'mta_assets/index';
import { HttpCaller } from 'mta_utils/index';
import { StationEntity, AqicnDataEntity } from 'mta_models/index';

export default class AqicnDataService
{
    /**
     * @param {String} jwt the user web token.
     */
    constructor(jwt)
    {
        this.jwt = jwt;
        this.getWithJwt = (url, callback) =>
        {
            HttpCaller.get(url, this.jwt, (data) =>
            {
                callback(data);
            })
        }
    }

    /**
     * 
     * @param {Function} callback. The callback function that needs one parameter : An array of AqicnDataEntities.
     */
    getAllAqicnData(callback)
    {
        this.getWithJwt(ServerConfig.host() + ServerEndpoints.getAllAqicnData(), (data) =>
        {
            //console.log(data[1]);
            let aqicnData = [];
            for(let i = 0; i < data.length; i++)
            {
                /** @type {AqicnDataEntity} */
                let aqicnDataEntity = data[i];
                // removes the key 'stationByIdStation' to 'station'
                delete Object.assign(aqicnDataEntity, {['station']: aqicnDataEntity['stationByIdStation'] })['stationByIdStation'];

                //Removing 3 additional zeroes at the end because the m-ton-air server seems to return wrong timestamps
                aqicnDataEntity.datetimeData = parseInt(aqicnDataEntity.datetimeData.toString().slice(0, 3));
                aqicnData.push(aqicnDataEntity);
            }
            callback(aqicnData);
        });
    }

        /**
     * initializes the markers array
     * @param {Array<AqicnDataEntity>} data
     */
    getMarkersFromData(data)
    {
        let aqicnMarkers = []
        for(let i = 0; i < data.length; i++)
        {
            let station = data[i].station;
            aqicnMarkers.push(
            {
                id: station.idStation,
                latlng:
                {
                    /////////// INTO OUR DATABASE, LAT / LONG ARE INVERTED ///////////
                    latitude:station.longitude, 
                    longitude:station.latitude
                },
                title:station.stationName + '. ' + 'AQI : ' + data[i].airQuality,
                description:StationEntity.getConcatenatedCountryAndSubdivisions(station),
                color:AqicnDataEntity.aqiToHexadecimalColor(data[i].airQuality)
            });
        }
        return aqicnMarkers;
    }
}