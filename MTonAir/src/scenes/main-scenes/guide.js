import React from 'react';
import { Text, View, StyleSheet, ScrollView, Linking } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';
import {WebView} from 'react-native-webview';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import {StringResources} from 'mta_assets/index';
import guideStyles from 'mta_styles/guide-styles';
import {MtaLogoXSmall} from 'mta_components/index'

/**
 * Guide component that displays into a scrollview various elements
 * about the application, the measures, etc.
 */
export default class Guide extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
          tableHead: ['AQI', 'Air Pollution Level', 'Health Implications', 'Cautionary Statement (for PM2.5)'],
          tableDataGood: ['0-50', 'Good', StringResources.healthImplicationsGoodPollution(), StringResources.healthImplicationsGoodPollution()],
          tableDataModerate: ['51 -100', 'Moderate', StringResources.healthImplicationsModeratePollution(), StringResources.cautionaryStatementModeratePollution()],
          tableDataUnhealthyForSG:  ['101-150', 'Unhealthy for Sensitive Groups', StringResources.healthImplicationsUnhealthyForSGPollution(), StringResources.cautionaryStatementUnhealthyForSGPollution()],
          tableDataUnhealthy: ['151-200', 'Unhealthy', StringResources.healthImplicationsUnhealthyPollution(), StringResources.cautionaryStatementUnhealthyPollution()],
          tableDataVeryUnhealthy: ['201-300', 'Very Unhealthy', StringResources.healthImplicationsVeryUnhealthyPollution(), StringResources.cautionaryStatementVeryUnhealthyPollution()],
          tableDataHazardous: ['300+', 'Hazardous', StringResources.healthImplicationsHazardousPollution(), StringResources.cautionaryStatementHazardousPollution()]          
        }
      }

    render() {
        const state = this.state;
        
        return (
            <View style={guideStyles.container}>
                <ScrollView horizontal = {false}>

                <MtaLogoXSmall/>

                    <Text style= {guideStyles.textTitle}>{StringResources.guideTitle()}</Text>

                    <Text style= {guideStyles.text}>{StringResources.firstLine()} {"\n"}</Text>

                    <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
                        <Row data={state.tableHead} style={guideStyles.head} textStyle={guideStyles.textBlack}/>
                        <Row data={state.tableDataGood} style={guideStyles.good} textStyle={guideStyles.textWhite}/>
                        <Row data={state.tableDataModerate} style= {guideStyles.moderate} textStyle={guideStyles.textBlack}/>
                        <Row data={state.tableDataUnhealthyForSG} style= {guideStyles.unhealthyForSG} textStyle={guideStyles.textBlack}/>
                        <Row data={state.tableDataUnhealthy} style= {guideStyles.unhealthy} textStyle={guideStyles.textWhite}/>
                        <Row data={state.tableDataVeryUnhealthy} style= {guideStyles.veryUnhealthy} textStyle={guideStyles.textWhite}/>
                        <Row data={state.tableDataHazardous} style= {guideStyles.hazardous} textStyle={guideStyles.textWhite}/>                    
                    </Table>

                    <Text style= {guideStyles.text}>
                      {"\n"} To know more about Air Quality and Pollution, check the {' '}
                      <Text style={guideStyles.hyperLink}
                         onPress={() => Linking.openURL(StringResources.urlWikipediaAirQualityTopic())}>
                           wikipedia Air Quality Topic
                      </Text>
                      {' '} or the {' '}
                      <Text style={guideStyles.hyperLink}
                         onPress={() => Linking.openURL(StringResources.urlAirnowGuideToAirQualityAndYourHealth())}>
                           airnow guide to Air Quality and Your Health
                      </Text>
                      .
                    </Text>

                </ScrollView>
              
            </View>
          )
        }
      }
