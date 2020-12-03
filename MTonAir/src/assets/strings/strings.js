
export default class StringResources
{
    static realTimeWeatherTitle() { return 'Real time weather'; }

    static realTimeWeatherText() { return 'Because when air quality is bad, you better know if\n' +
    'there is powerful wind. Know the weather around you\n' +
    'and anywhere in the world.'; }

    static reliableDataTitle() { return 'Reliable data'; }

    static reliableDataText() { return 'At M\' Ton Air, we work with reliable data providers, so\n' +
    'that what you see on the app is always up to date !'; }

    static readyTitle() { return 'Ready ? Start the journey now !'; }

    static readyText() { return 'We hope that you\'ll have a great time using our app.\n' +
    'You can go on now and create an  account, that will\n' +
    'allow you to save cities. Otherwise, just skip this step !'; }

    static grantLocationAccessText() { return 'In order to work properly, M\' Ton Air needs to have\n' +
    'access to yor location. You can\'t use the app without\n' +
    'granting access to location for now.'; }


    static signUpFirstNamePlaceholder() { return 'First Name'; }

    static signUpNamePlaceholder() { return 'Name'; }

    static signUpEmailPlaceholder() { return 'Email' }

    static signUpPasswordPlaceHolder() { return 'Password'; }


    static guideTitle() { return 'Air Quality Index Scale and Color Legend'; }

    static firstLine() { return 'The table below defines the Air Quality Index scale as defined by the US-EPA 2016 standard:'; }

    static healthImplicationsGoodPollution() { return 'Air quality is considered satisfactory, and air pollution poses little or no risk.'}

    static cautionaryStatementGoodPollution() { return 'None'}

    static healthImplicationsModeratePollution() { return 'Air quality is acceptable; however, for some pollutants there may be a moderate health concern for a very small number of people who are unusually sensitive to air pollution.'}

    static cautionaryStatementModeratePollution() { return 'Active children and adults, and people with respiratory disease, such as asthma, should limit prolonged outdoor exertion.' }

    static healthImplicationsUnhealthyForSGPollution() { return 'Members of sensitive groups may experience health effects. The general public is not likely to be affected.' }

    static cautionaryStatementUnhealthyForSGPollution() { return 'Active children and adults, and people with respiratory disease, such as asthma, should limit prolonged outdoor exertion.' }

    static healthImplicationsUnhealthyPollution() { return 'Everyone may begin to experience health effects; members of sensitive groups may experience more serious health effects.' }

    static cautionaryStatementUnhealthyPollution() { return 'Active children and adults, and people with respiratory disease, such as asthma, should avoid prolonged outdoor exertion; everyone else, especially children, should limit prolonged outdoor exertion.' }

    static healthImplicationsVeryUnhealthyPollution() { return 'Health warnings of emergency conditions. The entire population is more likely to be affected.' }

    static cautionaryStatementVeryUnhealthyPollution() { return 'Active children and adults, and people with respiratory disease, such as asthma, should avoid all outdoor exertion; everyone else, especially children, should limit outdoor exertion.' }

    static healthImplicationsHazardousPollution() { return 'Health alert: everyone may experience more serious health effects.' }

    static cautionaryStatementHazardousPollution() { return 'Everyone should avoid all outdoor exertion' }

    static additionalInformations() { return 'To know more about Air Quality and Pollution, check the wikipedia Air Quality topic or the airnow guide to Air Quality and Your Health' }

    static urlWikipediaAirQualityTopic() { return 'https://en.wikipedia.org/wiki/Air_pollution' }

    static urlAirnowGuideToAirQualityAndYourHealth() { return 'https://www.airnow.gov/aqi/aqi-basics/' } 

    static differenceBetweenPM10AndPM25() {
        return 'PM10 and PM2.5 often derive from different emissions sources, and also have different chemical compositions. ' +
        'Emissions from combustion of gasoline, oil, diesel fuel or wood produce much of the PM2.5 pollution found in outdoor air, ' +
        'as well as a significant proportion of PM10. PM10 also includes dust from construction sites, landfills and agriculture, ' +
        'wildfires and brush/waste burning, industrial sources, wind-blown dust from open lands, pollen and fragments of bacteria.'
    }

    static informationsAboutNO2() {
        return 'Nitrogen Dioxide (NO2) is one of a group of highly reactive gases known as oxides of nitrogen or nitrogen oxides (NOx). ' +
        'Other nitrogen oxides include nitrous acid and nitric acid. NO2 is used as the indicator for the larger group of nitrogen oxides. \n' +
        'NO2 primarily gets in the air from the burning of fuel. NO2 forms from emissions from cars, trucks and buses, power plants, and off-road equipment.'
    }

    static informationsAboutO3() {
        return "Ozone precursors are a group of pollutants, predominantly those emitted during the combustion of fossil fuels. " +
        "Ground-level ozone pollution (tropospheric ozone) is created near the Earth's surface by the action of daylight UV rays on these precursors. " +
        "The ozone at ground level is primarily from fossil fuel precursors, but methane is a natural precursor, and the very low natural background level of ozone " +
        "at ground level is considered safe. \n" +
        "Exposure to ozone (and the pollutants that produce it) is linked to premature death, asthma, bronchitis, heart attack, and other cardiopulmonary problems." +
        "Long-term exposure to ozone has been shown to increase risk of death from respiratory illness."
    }

}

