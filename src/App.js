import React from "react";
import Home from './Home'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import "./App.css";
class App extends React.Component {
    render() {
        return (
            <Router>
                <div className="app">
                    <nav className="navbar navbar-dark bg-primary navbar-expand-lg border-bottom">
                        <a className="brand navbar-brand ms-3" href="/">Stock Stealer</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ml-auto">
                                <li className="nav-item ms-2">
                                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                                </li>
                                <li className="nav-item ms-2">
                                    <Link className="nav-link" to="/login">Login</Link>
                                </li>
                                <li className="nav-item ms-2 me-2">
                                    <Link className="nav-link" to="/signup">Signup</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <Switch>
                        <Route exact strict path="/">
                            <Home />
                        </Route>
                        <Route exact strict path="/login">
                            Login
                        </Route>
                        <Route exact strict path="/signup">
                            signup
                        </Route>
                    </Switch>
                </div>
            </Router >
        )
    }
}
export default App