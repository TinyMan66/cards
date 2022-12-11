import React from 'react';
import './App.css';
import {store} from "./store";
import {HashRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {Pages} from "../features/old/pages/Pages";

const App = () => {
    return (
        <Provider store={store}>
            <HashRouter>
                <div className="App">
                    <Pages/>
                </div>
            </HashRouter>
        </Provider>
    );
}
export default App;