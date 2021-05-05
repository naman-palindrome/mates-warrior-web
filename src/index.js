import React from 'react';
import ReactDOM from 'react-dom';
import App from './views/pages/App';
import "./views/styles/index.css"
import { store } from './store';
import { Provider } from 'react-redux';

import { ChakraProvider } from "@chakra-ui/react"

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
