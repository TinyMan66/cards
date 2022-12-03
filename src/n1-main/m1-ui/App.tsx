import React from 'react';
import './App.css';
import {Main} from "./Main";
import {store} from "../m2-bll/store";
import {HashRouter} from "react-router-dom";
import {Provider} from "react-redux";

const App = () => {
    return (
        <Provider store={store}>
            <HashRouter>
                <div className="App">
                    <Main/>
                </div>
            </HashRouter>
        </Provider>
    );
}
export default App;