import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import components from '../components/index';

export default class ComponentsMenu extends Component {
    render() {
        return (
            <div className="card">
                <h2 className="h4 card-header">
                    Components
                </h2>
                <div className="list-group list-group-flush">
                    {components.map(Documentation => {
                        const metadata = Documentation.metadata();
                        return (
                            <NavLink to={`/components/${metadata.id}`}
                                     className="list-group-item list-group-item-action"
                                     activeClassName="active"
                                     key={metadata.id}>
                                {metadata.name}
                            </NavLink>
                        )
                    })}
                </div>
            </div>
        )
    }
}