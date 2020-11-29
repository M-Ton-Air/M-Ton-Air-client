export default class ServerEndpoints
{
    /* Authentication */
    static signIn() { return 'auth/sign-in'}
    static signUp() { return 'auth/sign-up'}

    /* Stations */
    static getAllStations() { return 'stations/all'; }
    /**  @param {Number} idStation the station id*/
    static getStationById(idStation) { return 'stations/' + idStation; }
    /**  @param {String} country the partial country name */
    static getStationByCountry(country) { return 'stations/by-country/' + country; }
    /**  @param {String} subdivision the partial subdivision (region/city) name */
    static getStationBySubdivision(subdivision) { return 'stations/by-subdivision/' + subdivision; }
    /**  @param {String} stationName the partial subdivision (region/city) name */
    static getStationBySubdivision(stationName) { return 'stations/by-name/' + stationName; }

    /* Favorites */
    /** @param {Number} idUser the user id */
    static getFavoriteStationsData(idUser){return 'users/' + idUser + '/favorite-station';}
    /** 
     * @param {Number} idUser the user id
     * @param {Number} idStation  the station id
     */
    static addFavoriteStation(idUser, idStation){ return 'users/' + idUser + '/favorite-station/' + idStation + '/add' ;}
    /** 
     * @param {Number} idUser the user id
     * @param {Number} idStation  the station id
     */
    static deleteFavoriteStation(idUser, idStation){ return 'users/' + idUser + '/favorite-station/' + idStation + '/delete' ;}


    /* AQICN data */
    static getAllAqicnData() { return 'aqicn-data'; }
    /**  @param {Number} idStation the station id*/
    static getAqicnDataByIdStation(idStation){ return 'aqicn-data/' + idStation; }

    /* Forecasts */
    /** @param {Number} idStation the station id* */
    static getAqicnForecastDataByIdStation(idStation){ return 'aqicn-data/forecast/' + idStation; }
}