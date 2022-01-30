import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store/store';
import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next';
import './i18n';
import { GlobalStyle } from './components/GlobalStyle';

ReactDOM.render(
  <I18nextProvider i18n={i18next}>
    <Provider store={store}>
      <Router>
        <React.StrictMode>
          <GlobalStyle />
          <App />
        </React.StrictMode>
      </Router>
    </Provider>
  </I18nextProvider>,
  document.getElementById('root')
);
