import React, {useState} from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';
import TopMenu from './components/TopMenu';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import Blogposts from './pages/Blogposts';
import BlogpostPage from './pages/BlogpostPage';
import PrivateRoute from './components/PrivateRoute';

function App() {
    // We houden in de state bij of iemand is "ingelogd" (simpele versie)
    const [isAuthenticated, toggleIsAuthenticated] = useState(false);

    return (
        <>
            <Router>
                <TopMenu isAuthenticated={isAuthenticated} toggleIsAuthenticated={toggleIsAuthenticated}/>
                <Switch>
                    <Route exact path="/">
                        <HomePage />
                    </Route>
                    <Route path="/blogposts">
                        {isAuthenticated ? <Blogposts />: <Redirect to="/"/>}

                    </Route>
                    <Route path="/login">
                        <LoginPage isAuthenticated={isAuthenticated} toggleIsAuthenticated={toggleIsAuthenticated}/>
                    </Route>
                    <Route path="/blog/:id">
                        {isAuthenticated ? <BlogpostPage isAuthenticated={isAuthenticated}  /> : <Redirect to="/"/> }

                    </Route>
                </Switch>
            </Router>
        </>

    );
}

export default App;
