import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...theRest }) => {
    return (
        <Route
            {...theRest}
            render={() => {
                if (localStorage.getItem("token")) {
                    return <Component />;
                } else {
                    console.log("redirecting to login");
                    return <Redirect to="loginPage" />;
                }
            }}
            />
    )
}

export default PrivateRoute;