import React from 'react';
import ReactDOM from 'react-dom';
import TuProfe from './TuProfe';

import firebaseConfig from './config/firebase-config';
import {
  FirebaseAppProvider
} from 'reactfire'


ReactDOM.render(
  <FirebaseAppProvider firebaseConfig={firebaseConfig}>
    <TuProfe />
  </FirebaseAppProvider>,
  document.getElementById('root')
);


