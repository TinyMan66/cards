import React from 'react';
import {Header} from "./header/Header";
import {Route, Routes} from "react-router-dom";
import {routes,} from "./routes/pathRoutesList";

export const Main = () => {
    return (
        <div>
            <Header/>
            <Routes>
                {
                    routes.map(r => <Route key={r.id} path={r.path} element={<r.component/>}/>)
                };
            </Routes>
        </div>
    );
};
