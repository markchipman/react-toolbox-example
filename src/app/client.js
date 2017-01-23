import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import { AppContainer } from 'react-hot-loader';

const rootEl = document.getElementById('app');

const render = () => {
  ReactDOM.render(
    <AppContainer>
      <App />
    </AppContainer>,
    rootEl
  );
};

if (module.hot) {
  module.hot.accept(render);
}

render();