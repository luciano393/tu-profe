import React from 'react';
import ReactDOM from 'react-dom';

import firebaseConfig from './config/firebase-config';
import {
  FirebaseAppProvider
} from 'reactfire'


import TuProfe from './TuProfe';


ReactDOM.render(
  <FirebaseAppProvider firebaseConfig={firebaseConfig}>
    <TuProfe />
  </FirebaseAppProvider>,
  document.getElementById('root')
);


