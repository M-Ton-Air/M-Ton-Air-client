import { AqicnDataEntity, UserEntity } from 'mta_models/index';
import { ServerConfig, ServerEndpoints } from 'mta_assets/index';
import { HttpCaller } from 'mta_utils/index';

const minimalPasswordLength = 6;
const maximalPasswordLength = 32;
const maximalNamesLength = 50;


export default class UserService
{

    /** @param {UserEntity} userEntity */
    constructor(userEntity)
    { 
        this.userEntity = userEntity; 
        /**
         * 
         * @param {String} url 
         * @param {UserEntity} user 
         * @param {Function} callback 
         */
        this.postWithoutJwt = (url, user, callback) =>
        {
            let body = JSON.stringify(user);
            HttpCaller.postWithoutJwt(url, body, (data) => 
            {
                callback(data);
            });
        }
    }

    /**
     * @param {Function} callback 
     */
    createAccount(callback)
    {
        this.postWithoutJwt(ServerConfig.host() + ServerEndpoints.signUp(), this.userEntity, callback);
    }

    /**
     * @param {Function} callback 
     */
    login(callback)
    {
        this.postWithoutJwt(ServerConfig.host() + ServerEndpoints.signIn(), this.userEntity, callback);
    }

    addToFavorite(stationId, callback)
    {
        let url = ServerConfig.host() + ServerEndpoints.addFavoriteStation(this.userEntity.id, stationId);
        HttpCaller.postWithJwt(url, '', this.userEntity.jwt, callback);
    }

    /**
     * 
     * @param {Function} callback. The callback function that needs one parameter : An array of AqicnDataEntities.
     * @returns {Array<AqicnDataEntity>}
     */
    getFavoriteStations(callback)
    {
        let url = ServerConfig.host() + ServerEndpoints.getFavoriteStationsData(this.userEntity.id);
        HttpCaller.get(url, this.userEntity.jwt, (data) =>
        {
            // TODO : REFACTOR WITH aqicndata-service.js 
            /** @type {Array<AqicnDataEntity>} */
            let aqicnData = [];
            for(let i = 0; i < data.length; i++)
            {
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
     * Returns True if the given userEntity respects all the constraints
     * for account creation. An error string otherwise.
     * @param {UserEntity} userEntity 
     * @returns {String} a String describing to the user which field is wrong.
     * @returns {boolean} True if the given userEntity is correct.
     */
    static isUserEntityOkForAccountCreation(userEntity)
    {
        if(userEntity.firstname == null)
        {
            return 'Please provide a first name.';
        }

        if(userEntity.name == null)
        {
            return 'Please provide a name.';
        }

        if(userEntity.email == null)
        {
            return 'Please provide an email.';
        }

        if(!UserService.validateEmail(userEntity.email))
        {
            return 'Your email is not valid.';
        }

        if(userEntity.password == null)
        {
            return 'Please provide a password.';
        }

        if(userEntity.firstname > maximalNamesLength || userEntity.name > maximalNamesLength)
        {
            return 'Your names must not exceed a total length of ' + maximalNamesLength +  'characters.';
        }

        if(userEntity.password.length < minimalPasswordLength || userEntity.password.length > maximalPasswordLength)
        {
            return 'Your password length must be between ' + minimalPasswordLength +  ' and ' + maximalPasswordLength + ' (inclusive) characters.';
        }

        return true;
    }

    /**
     * Returns true if the given userEntity respects all the constraints
     * for login (sign in). False otherwise.
     * @param {UserEntity} userEntity 
     */
    static isUserEntityOkForLogin(userEntity)
    {
        // TODO
    }

    /**
     * Returns true if the email is correctly formed.
     * @param {String} email 
     */
    static validateEmail(email) 
    {
        return (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/).test(email)
    }
}