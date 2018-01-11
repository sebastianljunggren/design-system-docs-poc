import React, {Component} from 'react';
import {routes, ComponentsMenu, GuidesMenu, Navbar} from './routing';

class App extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <div className="container-fluid mt-5">
                    <div className="row">
                        <nav className="col-md-4 col-lg-3">
                            <GuidesMenu className="mb-1"/>
                            <ComponentsMenu/>
                        </nav>
                        <div className="col-md-8 col-lg-9">
                            {routes}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
