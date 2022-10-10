import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './redux/store';
import DataProvider from './context/Dataprovider';

import {
  ThemeProvider,
  createTheme,
  StyledEngineProvider
} from "@mui/material/styles";

const theme = createTheme();


const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
  <ThemeProvider theme={theme}>
  <StyledEngineProvider>
  <Provider store={store}>
  <DataProvider>
  <App />
  </DataProvider>
  </Provider>
  </StyledEngineProvider>
  </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
