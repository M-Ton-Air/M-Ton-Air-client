/* landing pages */
export {default as LandingOne} from './landing-pages/landing-1';
export {default as LandingGlobal} from './landing-pages/landing-global';
export {default as LandingWrapper} from './landing-pages/landing-wrapper';

/* sign in / sign up */
export {default as SignIn} from './authenticate/sign-in';
export {default as SignUp} from './authenticate/sign-up';
export {default as SignInWithGoogle} from './authenticate/sign-in-with-google'

/* legal mentions */
export {default as TermsOfUse} from './legal/terms-of-use';
export {default as PrivacyPolicy} from './legal/privacy-policy';

/* location */
export {default as LocationAccess} from './main-scenes/location-access';

/* main pages */
// home is a wrapper for all th main scenes
export {default as Home} from './main-scenes/home';
// map of worldwide AQIs
export {default as Map} from './main-scenes/map';
// the favorite stations page : displays all the stations saved for the current user.
export {default as FavoriteStations} from './main-scenes/stations/favorite-stations'
// station details scene displays specific information about a given station, that was accessed either from the map
// or from the user favorite stations page.
export {default as StationDetails} from './main-scenes/stations/favorite-stations-details';
// allows the user to search for a new favorite station.
export {default as Search} from './main-scenes/stations/search';
// user guide
export {default as Guide} from './main-scenes/guide';

