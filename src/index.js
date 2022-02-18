// imports
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider as StoreProvider} from "react-redux";
import {createStore, applyMiddleware, compose} from "redux";
import ReduxThunk from "redux-thunk";

// local imports
import App from "./App";
import reducers from "./reducers";

// global styles
import "./styles/index.css";

ReactDOM.render(
    <StoreProvider
        store={createStore(
            reducers,
            {},
            compose(
                applyMiddleware(ReduxThunk)
            )
        )}
    >
        <App />
    </StoreProvider>,
  document.getElementById('root')
);