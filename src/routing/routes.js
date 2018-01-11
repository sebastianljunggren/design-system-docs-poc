import React from 'react';
import {Route} from 'react-router-dom';
import components from '../components';
import Home from '../pages/Home';

const homeRoute = <Route exact path="/" component={Home} key="home"/>

const componentRoutes = components.map(ComponentDocumentation => {
    const metadata = ComponentDocumentation.metadata();
    return <Route path={`/components/${metadata.id}`} component={ComponentDocumentation} key={`component.${metadata.id}`}/>

});

export default [homeRoute, ...componentRoutes];