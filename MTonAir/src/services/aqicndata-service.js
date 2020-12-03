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
            let aqicnData = [];
            // TODO : PROD : REMOVE LIMIT
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
}