import React from 'react';
import {View} from 'react-native';
import PDFView from 'react-native-view-pdf';
import terms_of_use_base64 from 'mta_assets/legal/terms-of-use.json';


const TermsOfUse = ({navigation}) =>
(
    <View style={{ flex: 1 }}>
    <PDFView
      fadeInDuration={250.0}
      style={{ flex: 1 }}
      resource={terms_of_use_base64.file.data}
      resourceType={'base64'}
      onError={(error) => console.log('Cannot render PDF', error)}
    />
  </View>
);

export default TermsOfUse;