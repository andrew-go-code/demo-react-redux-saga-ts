import React from 'react';
import Main from "./components/main/Main";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import Login from "./components/login/Login";
import SecuredRoute from "./components/route/SecuredRoute";

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={"/login"} component={Login} />
                <SecuredRoute exact path={"/"} comp={Main} />
            </Switch>
        </BrowserRouter>
    );
};

export default App;
