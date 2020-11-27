export default class UserEntity
{
    /**
     * 
     * @param {String} firstname 
     * @param {String} name 
     * @param {String} email 
     * @param {String} password 
     */
    constructor(firstname, name, email, password)
    {
        this.firstname = firstname;
        this.name = name;
        this.email = email;
        this.password = password;
        this.apiKey = null;
        this.jwt = null;
    }
}