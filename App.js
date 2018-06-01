import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { createStackNavigator } from 'react-navigation';

//Welcome
import welcome from './src/screens/welcome/welcome';

//Signup & Login
import signup from './src/screens/signup/signup';
import login from './src/screens/login/login';

//Dashboard
import dashboard from './src/screens/dashboard/dashboard';

//Settings
import settings from './src/screens/settings/settings';

//Upload Rx
import uploadPrescription from './src/screens/orderRx/screens/uploadPrescription/uploadPrescription';
import selectPharmacy from './src/screens/orderRx/screens/selectPharmacy/selectPharmacy';
import patientOptions from './src/screens/orderRx/screens/patientOptions/patientOptions';
import orderConfirmed from './src/screens/orderRx/screens/orderConfirmed/orderConfirmed';

//Insurnace
import insurance from './src/screens/insurance/insurance';
import singleInsurance from './src/screens/insurance/screens/singleInsurance/singleInsurance'

//Personal Details
import personalDetails from './src/screens/personalDetails/personalDetails';

const Navigation = createStackNavigator({
  Welcome: {screen: welcome},
  Signup: {screen: signup},
  Login: {screen: login},
  Dashboard: {screen: dashboard},
  Settings: {screen: settings},
  UploadPrescription: {screen: uploadPrescription},
  SelectPharmacy: {screen: selectPharmacy},
  PatientOptions: {screen: patientOptions},
  OrderConfirmed: {screen: orderConfirmed},
  Insurance: {screen: insurance},
  SingleInsurance: {screen: singleInsurance},
  PersonalDetails: {screen: personalDetails}
});

export default Navigation;
