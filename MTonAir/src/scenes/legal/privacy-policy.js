import React from 'react';
import {View} from 'react-native';
import PDFView from 'react-native-view-pdf';
import privacy_policy_base64 from 'mta_assets/legal/privacy-policy.json';

const PrivacyPolicy = ({navigation}) =>
(
    <View style={{ flex: 1 }}>
    <PDFView
      fadeInDuration={250.0}
      style={{ flex: 1 }}
      resource={privacy_policy_base64.file.data}
      resourceType={'base64'}
      onError={(error) => console.log('Cannot render PDF', error)}
    />
  </View>
);

export default PrivacyPolicy;