import React, {Component} from 'react';
import ReactDomServer from 'react-dom/server';
import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import {default as syntaxStyle} from 'react-syntax-highlighter/styles/prism';
import pretty from 'pretty';

export default function createComponentDocumentation(Display, Config, options, metadata) {
    return class DocumentationComponent extends Component {

        constructor() {
            super();
            this.state = {options};
            this.handleOptionsChange = this.handleOptionsChange.bind(this);
        }

        render() {
            const display = <Display options={this.state.options}/>;
            const codeSample = pretty(ReactDomServer.renderToStaticMarkup(display));
            return (
                <div className="row">
                    <div className="col-lg-12"><h1>{metadata.name}</h1></div>
                    <div className="col-lg-8">
                        {display}
                        <SyntaxHighlighter language='javascript' style={syntaxStyle}>{codeSample}</SyntaxHighlighter>
                    </div>
                    <div className="col-lg-4">
                        <h2>Options</h2>
                        <Config options={this.state.options} onOptionsChange={this.handleOptionsChange}/>
                    </div>
                    <div className="col-lg-12">
                        <h2>Documentation</h2>
                        <p>Docs will be added here.</p>
                    </div>
                </div>
            );
        }

        handleOptionsChange(newOptions) {
            const mergedOptions = Object.assign({}, this.state.options, newOptions);
            this.setState({options: mergedOptions});
        }

        static metadata() {
            return metadata;
        }
    }
}