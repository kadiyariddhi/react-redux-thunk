import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes  } from 'react-router-dom';
import Dashboard from './Component/dashboard';
import store from './Redux/store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes >
          <Route path='/' element={<Dashboard />} />
        </Routes >
      </BrowserRouter>
    </Provider>
  );
};

export default App;
