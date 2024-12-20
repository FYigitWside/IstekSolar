import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../styles/component.css';
import '../styles/istekStyle.css';
import Navbar from '../navbar/navbar';
import Home from './home';
import About from './about';
import Product from './products';
import Footer from '../footer/footer';



const Main = () => {
    return (
<>
            <Router>
                <Navbar />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/isteksolar/about" component={About} />
                    <Route path="/isteksolar/product" component={Product} />
                </Switch>
            </Router>
            <Footer />
</>
    );
};

export default Main;