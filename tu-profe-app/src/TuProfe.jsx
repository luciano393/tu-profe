import React from "react";

import { Provider } from 'react-redux';
import generateStore from "./redux/store";
import { AppRouter } from "./routes/AppRouter";

import './styles/style.scss';


function App() {

  const store = generateStore();

  return (
    <Provider store= { store }>
      <AppRouter />
    </Provider>
  );
}

export default App;
