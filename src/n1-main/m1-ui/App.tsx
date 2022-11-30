import React from 'react';
import './App.css';
import {Main} from "./Main";
import {store} from "../m2-bll/store";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";

const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <div className="App">
                    <Main/>
                </div>
            </BrowserRouter>
        </Provider>
    );
}
export default App;