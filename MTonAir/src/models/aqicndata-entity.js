import { StationEntity } from '.';
import { Colors } from 'mta_assets/index';

export default class AqicnDataEntity
{


    /** @type{Number} idAqicnData   */
    idAqicnData;
    /** @type {Number} datetimeData the data creation date as a timestamp.  */
    datetimeData;
    /** @type {Number} airQuality the air quality index  */
    airQuality;
    /** @type {Number} pm25 PM2.5 refers to atmospheric particulate matter (PM) that have a diameter of less than 2.5 micrometers  */
    pm25;
    /** @type {Number} o3 Ozone (O3) is a highly reactive gas composed of three oxygen atoms. */
    o3;
    /** @type {Number} pressure   */
    pressure;
    /** @type {Number} humidity humidity percentage.  */
    humidity;
    /** @type {Number} wind   */
    wind;
    /** @type {Number} pm10 PM10 : inhalable particles, with diameters that are generally 10 micrometer.  */
    pm10;
    /** @type {Number} no2 Nitrogen dioxide is a chemical compound with the formula NO2, produced during burning processes.  */
    no2;
    /** @type {Number} temperature the temperature in Celsius degrees.  */
    temperature;
    /** @type {String} dominentMeasure the measure (o3 pm25 pm10) that is the most present.  */
    dominentMeasure;
    /** @type {StationEntity} station the station linked to the current data. */
    station;

    /**
     * 
     * @param {Number} idAqicnData 
     * @param {Number} datetimeData the data creation date as a timestamp.
     * @param {Number} airQuality the air quality index
     * @param {Number} pm25 PM2.5 refers to atmospheric particulate matter (PM) that have a diameter of less than 2.5 micrometers
     * @param {Number} o3 Ozone (O3) is a highly reactive gas composed of three oxygen atoms.
     * @param {Number} pressure 
     * @param {Number} humidity humidity percentage.
     * @param {Number} wind 
     * @param {Number} pm10 PM10 : inhalable particles, with diameters that are generally 10 micrometer.
     * @param {Number} no2 Nitrogen dioxide is a chemical compound with the formula NO2, produced during burning processes.
     * @param {Number} temperature the temperature in Celsius degrees.
     * @param {String} dominentMeasure the measure (o3 pm25 pm10) that is the most present.
     * @param {StationEntity} station the station linked to the current data.
     */
    constructor(idAqicnData, datetimeData, airQuality, pm25, o3, pressure, humidity, wind, pm10,
        no2, temperature, dominentMeasure, station)
    {
        this.idAqicnData = idAqicnData;
        //Removing 3 additional zeroes at the end because the m-ton-air server seems to return wrong timestamps
        this.datetimeData = parseInt(datetimeData.toString().slice(0, 3));
        this.airQuality = airQuality;
        this.pm25 = pm25;
        this.o3 = o3;
        this.pressure = pressure;
        this.humidity = humidity;
        this.wind = wind;
        this.pm10 = pm10;
        this.no2 = no2;
        this.temperature = temperature;
        this.dominentMeasure = dominentMeasure;
        this.station = station;
    }

    /**
     * Converts the current stationEntity airQuality index to a color.
     * @param {Number} airQuality the air quality index to convert to RGB hex code.
     * @returns {String} an hexadecimal color code
     */
    static aqiToHexadecimalColor(airQuality)
    {
        return Colors.getGood();
    }
}