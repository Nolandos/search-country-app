import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../components/Home/Home';
import Contact from '../components/Contact/Contact';
import NotFound from '../components/NotFound/NotFound';
import CountryFlagList from '../components/CountryFlagList/CountryFlagList';
import CountyDetails from '../components/CountryDetails/CountryDetails';
import Continents from '../components/Continents/Continents';

const Routes = () => {
    return (
    <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path='/countries' component={ CountryFlagList }/>
        <Route path='/countries/country/:id' component={ CountyDetails }/>
        <Route path='/continents' component={ Continents } />
        <Route path="/contact" component={ Contact } />
        <Route path="*" component = { NotFound } />
    </Switch>
   )
}
export default Routes;