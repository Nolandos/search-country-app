import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../components/Home/Home';
import Contact from '../components/Contact/Contact';
import NotFound from '../components/NotFound/NotFound';

const Routes = () => {
    return (
    <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/contact" component={ Contact } />
        <Route path="*" component = {NotFound} />
    </Switch>
   )
}
export default Routes;