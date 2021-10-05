import React from 'react';
import {
    Route,
    Redirect
} from 'react-router-dom';
import Blogposts from "../pages/Blogposts";

function PrivateRoute({isAuthenticated, privatePath, name}) {
    return (
        <>
            {isAuthenticated ?
                <Route path={privatePath}>
                    <Blogposts/>
                </Route> :
                <Redirect to="/"/>
            }
        </>
    )
}

export default PrivateRoute