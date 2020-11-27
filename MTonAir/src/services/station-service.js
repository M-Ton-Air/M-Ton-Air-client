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
}