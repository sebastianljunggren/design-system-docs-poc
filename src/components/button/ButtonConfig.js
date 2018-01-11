import React, {Component} from 'react';

export default class ButtonConfig extends Component {
    constructor() {
        super();
        this.handleTypeChange = this.handleTypeChange.bind(this);
        this.handleOutlineChange = this.handleOutlineChange.bind(this);
        this.handleSizeChange = this.handleSizeChange.bind(this);
    }

    render() {
        const options = this.props.options;
        return (
            <div>
                <div className="form-group">
                    <label htmlFor="type">Type</label>
                    <select className="form-control" id="type" value={options.type} onChange={this.handleTypeChange}>
                        <option value="primary">Primary</option>
                        <option value="secondary">Secondary</option>
                        <option value="success">Success</option>
                        <option value="danger">Danger</option>
                        <option value="warning">Warning</option>
                        <option value="info">Info</option>
                        <option value="light">Light</option>
                        <option value="dark">Dark</option>
                        <option value="link">Link</option>
                    </select>
                </div>
                <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="outline" checked={options.outline} onChange={this.handleOutlineChange}/>
                    <label className="form-check-label" htmlFor="outline">Outline</label>
                </div>
                <div className="form-group">
                    <label htmlFor="size">Size</label>
                    <select className="form-control" id="size" value={options.size} onChange={this.handleSizeChange}>
                        <option value="sm">Small</option>
                        <option value=''>Normal</option>
                        <option value="lg">Large</option>
                    </select>
                </div>
            </div>
        );
    }

    handleTypeChange(event) {
        this.props.onOptionsChange({type: event.target.value});
    }

    handleOutlineChange(event) {
        this.props.onOptionsChange({outline: event.target.checked});
    }

    handleSizeChange(event) {
        this.props.onOptionsChange({size: event.target.value});
    }
}