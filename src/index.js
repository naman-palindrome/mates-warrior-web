import React from 'react';
import ReactDOM from 'react-dom';
import App from './views/pages/App';
import "./views/styles/index.css"

import { ChakraProvider } from "@chakra-ui/react"



ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
