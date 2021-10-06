import React from 'react';
import {
    useHistory,
} from 'react-router-dom';
import {useForm} from 'react-hook-form';

function LoginPage({isAuthenticated, toggleIsAuthenticated}) {
    const history = useHistory();

    function handleClick() {
        toggleIsAuthenticated(isAuthenticated = true);
        history.push('/');
    }

    return (
        <div className="page-container">
            <h2>Login Page</h2><br/>

            Druk op de knop om in te loggen!<br/>
            <button type="button" onClick={handleClick}>
                Inloggen
            </button>
        </div>
    );
}

export default LoginPage;