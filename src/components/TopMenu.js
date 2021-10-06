import React from 'react';
import {Link} from 'react-router-dom';

function TopMenu({isAuthenticated, toggleIsAuthenticated}) {

    return (
        <nav>
            <div className="nav-container">
                <ul className="ul-nav-container">
                    <li>
                        <Link to="/" exact activeClassName="active-link">Home</Link>
                    </li>

                    <li>
                        {isAuthenticated ?
                            <Link to="/blogposts" activeClassName="active-link">Blogposts</Link> : ''}
                    </li>

                    <li>
                        {isAuthenticated ?
                            <button onClick={() => toggleIsAuthenticated(!isAuthenticated)}>Uitloggen</button> :
                            <Link to="/login" >Login</Link>
                        }
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default TopMenu;