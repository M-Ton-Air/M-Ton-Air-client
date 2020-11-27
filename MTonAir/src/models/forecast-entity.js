export default class ForecastEntity
{

    
    /** @type{Number} the forecast id. */
    idForecast;
    /** @type {Number} the station id. */
    idStation;
    /** @type {Number} the forecast timestamp.  */
    dateOfForecast;
    /** @type {Number} timestamp relative to the date when the forecast was made. */
    dateForecasted;
    /** @type {String} the forecasted measure. */
    measure;
    /** @type {Number} */
    measureAvg;
    /** @type {Number} */
    measureMin;
    /** @type {Number} */
    measureMax;

    /**
     * 
     * @param {Number} idForecast the forecast id.
     * @param {Number} idStation the station id.
     * @param {Number} dateOfForecast the forecast timestamp. 
     * @param {Number} dateForecasted timestamp relative to the date when the forecast was made.
     * @param {String} measure the forecasted measure.
     * @param {Number} measureAvg
     * @param {Number} measureMin 
     * @param {Number} measureMax 
     */
    constructor(idForecast, idStation, dateOfForecast, dateForecasted, measure, measureAvg, measureMin, measureMax)
    {
        this.idForecast = idForecast;
        this.idStation = idStation;
        //Removing 3 additional zeroes at the end because the m-ton-air server seems to return wrong timestamps
        this.dateOfForecast = parseInt(dateOfForecast.toString().slice(0, 3));
        this.dateForecasted = parseInt(dateForecasted.toString().slice(0, 3));
        this.measure = measure;
        this.measureAvg = measureAvg;
        this.measureMin = measureMin;
        this.measureMax = measureMax;
    }
}