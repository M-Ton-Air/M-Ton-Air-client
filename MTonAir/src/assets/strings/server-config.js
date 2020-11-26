export default class ServerConfig
{

    /**
     * Yes, that is normal. 127.0.0.1 (or localhost) is the emulator
     * own loopback adress. 10.0.2.2 is an alias for the loopback adress
     * of the machine on which the emulator runs.
     * See https://developer.android.com/studio/run/emulator-networking
     */
    static host() { return 'http://10.0.2.2:8080/api/v1/'}
    //static host() { return 'http://192.168.43.192:8080/api/v1/'}

}