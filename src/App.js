import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import './App.css'
import ProductsTable from './Products/ProductsTable';

function App() {

    return (
        <Router>
            <div>
                <AppBar position="static">
                    <Toolbar>
                        <div>
                           Target Assignment
                        </div>
                    </Toolbar>
                </AppBar>
            </div>

            <Route exact path="/" component={ProductsTable} />
        </Router>
    );
}

export default App;
