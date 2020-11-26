export default class StationEntity
{
    #idStation;
    #stationName;
    #url;
    #country;
    #subdivision1;
    #subdivision2;
    #subdivision3;
    #iso2;
    #longitude;
    #latitude;

    /**
     * 
     * @param {*} idStation 
     * @param {*} stationName 
     * @param {*} url 
     * @param {*} country 
     * @param {*} subdivision1 
     * @param {*} subdivision2 
     * @param {*} subdivision3 
     * @param {*} iso2 
     * @param {*} longitude 
     * @param {*} latitude 
     */
    constructor(idStation, stationName, url, country,
        subdivision1, subdivision2, subdivision3, iso2, longitude, latitude)
    {
        this.#idStation = idStation;
        this.#stationName = stationName;
        this.#url = url;
        this.#country = country;
        this.#subdivision1 = subdivision1;
        this.#subdivision2 = subdivision2;
        this.#subdivision3 = subdivision3;
        this.#iso2 = iso2;
        this.#longitude = longitude;
        this.#latitude = latitude;
    }

    get idStation(){ return this.#idStation; }
    get stationName(){ return this.#stationName; }
    get url(){ return this.#url; }
    get country(){ return this.#country; }
    get subdivision1(){ return this.#subdivision1;}
    get subdivision2(){ return this.#subdivision2;}
    get subdivision3(){ return this.#subdivision3; }
    get iso2(){ return this.#iso2; }
    get longitude(){ return this.#longitude; }
    get latitude(){ return this.#latitude; }
}