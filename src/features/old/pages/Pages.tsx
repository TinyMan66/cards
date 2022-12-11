import React from 'react';
import {Header} from "../../../app/header/Header";
import {Route, Routes} from "react-router-dom";
import {routes} from "../../../common/routes/pathRoutesList";

export const Pages = () => {
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
