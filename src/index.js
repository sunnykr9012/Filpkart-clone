import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import { Provider } from 'react-redux';
import store from './components/Redux/store';
import { BrowserRouter as Router } from 'react-router-dom'; // Use BrowserRouter here

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <React.StrictMode>
        <Router> {/* Wrap App with Router here */}
          <App /> 
        </Router>
      </React.StrictMode>
    </Provider>
  </ThemeProvider>
);
