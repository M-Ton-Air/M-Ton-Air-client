export default class StationEntity
{
    /** @type{Number} */
    idStation;
    /** @type {String} */
    stationName;
    /** @type {String} */
    url;
    /** @type {String} */
    country;
    /** @type {String} */
    subdivision1;
    /** @type {String} */
    subdivision2;
    /** @type {String} */
    subdivision3;
    /** @type {String} */
    iso2;
    /** @type {Number} */
    longitude;
    /** @type {Number} */
    latitude;

    /**
     * 
     * @param {Number} idStation 
     * @param {String} stationName 
     * @param {String} url 
     * @param {String} country 
     * @param {String} subdivision1 
     * @param {String} subdivision2 
     * @param {String} subdivision3 
     * @param {String} iso2 
     * @param {Number} longitude 
     * @param {Number} latitude 
     */
    constructor(idStation, stationName, url, country,
        subdivision1, subdivision2, subdivision3, iso2, longitude, latitude)
    {
        this.idStation = idStation;
        this.stationName = stationName;
        this.url = url;
        this.country = country;
        this.subdivision1 = subdivision1;
        this.subdivision2 = subdivision2;
        this.subdivision3 = subdivision3;
        this.iso2 = iso2;
        this.longitude = longitude;
        this.latitude = latitude;
    }

    /**
     * @param {StationEntity} stationEntity
     * @returns {String} gets a display String for the Country and subdivisions
     */
    static getConcatenatedCountryAndSubdivisions(stationEntity)
    {
        return stationEntity.country + 
        this.getSubdivisionSpacer(stationEntity.subdivision1) + stationEntity.subdivision1?? + 
        this.getSubdivisionSpacer(stationEntity.subdivision2) + stationEntity.subdivision2?? +
        this.getSubdivisionSpacer(stationEntity.subdivision3) + stationEntity.subdivision3;
    }

    /** @param {String} subdivision */
    static getSubdivisionSpacer(subdivision)
    {
        return (subdivision == null) ? '' : ', ';
    };
}