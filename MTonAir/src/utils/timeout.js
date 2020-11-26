export default class Timeout
{
    /**
     * 
     * @param {Number} ms 
     * @param {Promise} promise 
     */
    static timeout(ms, promise) 
    {
        return new Promise( (resolve, reject) =>
        {
          setTimeout( () => 
          {
            reject(new Error("timeout"))
          }, ms)
          promise.then(resolve, reject)
        })
    }
}