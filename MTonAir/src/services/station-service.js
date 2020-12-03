import { ServerConfig, ServerEndpoints } from 'mta_assets/index';
import { HttpCaller } from 'mta_utils/index';
import {StationEntity} from 'mta_models/index';

export default class StationService
{
    /**
     * @param {String} jwt the user web token.
     */
    constructor(jwt)
    {
        this.jwt = jwt;
    }

    /**
     * Calls our API to returns the *limit* first results matching the "anything" string.
     * @param {String} anything any string to search : city, subdivision, country, station name.
     * @param {Number} limit the limit of returned results.
     * @param {Function} callback that will hand an array of stations.
     */
    get20MatchingStations(anything, limit, callback)
    {
        let url = ServerConfig.host() + ServerEndpoints.getStationByAll(anything, limit);
        HttpCaller.get(url, this.jwt, (data) =>
        {
            callback(data);
        });
    }
}