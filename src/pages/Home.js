import React, {Component} from 'react';

export default class Home extends Component {
    render() {
        return (
            <div>
                <h1>Design system documentation POC with React</h1>
                <p className="lead">
                    This is a proof of concept of how React can be used to document a design system.
                </p>
                <p>
                    Unlike a static generator like Patternlab, React enables making examples interactive.
                    In this POC, all components have an options pane where various properties can be set.
                    When options are changed, both the code sample and the rendered example is automatically updated.
                </p>
                <p>
                    <a href="https://getbootstrap.com/">Bootstrap 4</a> is used as a stand in for a design system.
                </p>
            </div>
        )
    }
}