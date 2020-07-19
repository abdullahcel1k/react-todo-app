import React from 'react';

// Theme
import { ThemeProvider } from 'styled-components';
import { darkTheme } from './components/theme/theme';

// Routes
import { BrowserRouter } from "react-router-dom";
import Routes from './core/routes/Routes';

// Redux
import { Provider } from "react-redux";
import configureStore  from "./core/redux/store/ConfigureStore";

const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={darkTheme}>
          <Routes />
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
