import React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';
import {WebView} from 'react-native-webview';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import {StringResources} from 'mta_assets/index';

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
          tableData: [
            ['0-50', 'Good', StringResources.healthImplicationsGoodPollution(), StringResources.healthImplicationsGoodPollution()],
            ['51 -100', 'Moderate', StringResources.healthImplicationsModeratePollution(), StringResources.cautionaryStatementModeratePollution()],
            ['101-150', 'Unhealthy for Sensitive Groups', StringResources.healthImplicationsUnhealthyForSGPollution(), StringResources.cautionaryStatementUnhealthyForSGPollution()],
            ['151-200', 'Unhealthy', StringResources.healthImplicationsUnhealthyPollution(), StringResources.cautionaryStatementUnhealthyPollution()],
            ['201-300', 'Very Unhealthy', StringResources.healthImplicationsVeryUnhealthyPollution(), StringResources.cautionaryStatementVeryUnhealthyPollution()],
            ['300+', 'Hazardous', StringResources.healthImplicationsHazardousPollution(), StringResources.cautionaryStatementHazardousPollution()]
          ]
        }
      }

    render() {
        const state = this.state;
        
        return (
            <View style={styles.container}>
                <ScrollView horizontal = {false}>

                    <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
                        <Row data={state.tableHead} style={styles.head} textStyle={styles.text}/>
                        <Rows key= '1' data={state.tableData} textStyle={styles.text} style= {styles.row}/>
  
                    </Table>
                </ScrollView>
              
            </View>
          )
        }
      }


      const styles = StyleSheet.create({
        container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
        head: { height: 80, backgroundColor: '#f1f8ff' },
        text: { margin: 6, textAlign: "center", backgroundColor: '#d0d4d4'},
        row: { backgroundColor: '#148727' },
        cell: { backgroundColor: '#de8a18' }
      });