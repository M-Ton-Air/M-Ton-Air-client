export default class UserEntity
{
    // it should be private (attributes) but well javascript isn't really handy for that.


    /** @type {String} */
    #firstname;
    /** @type {String} */
    #name;
    /** @type {String} */
    #email
    /** @type {String} */
    #password;
    /** @type {String} */
    #apiKey;
    /** @type {String} */
    #jwt;

    /**
     * 
     * @param {String} firstname 
     * @param {String} name 
     * @param {String} email 
     * @param {String} password 
     */
    constructor(firstname, name, email, password)
    {
        this.#firstname = firstname;
        this.#name = name;
        this.#email = email;
        this.#password = password;
        this.#apiKey = null;
        this.#jwt = null;
    }

    /** @returns {String} */
    get firstname(){ return this.#firstname; }
    /** @returns {String} */
    get name(){ return this.#name; }
    /** @returns {String} */
    get email(){ return this.#email; }
    /** @returns {String} */
    get password(){ return this.#password; }
    /** @returns {String} */
    get apiKey(){ return this.#apiKey; }
    /** @returns {String} */
    get jwt(){ return this.#jwt; }


    /** @param {String} apiKey */
    set apiKey(apiKey) { this.#apiKey = apiKey; }
    /** @param {String} jwt */
    set jwt(jwt) { this.#jwt = jwt; }

}