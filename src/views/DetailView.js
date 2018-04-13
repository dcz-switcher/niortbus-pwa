import React, {Component} from 'react';


import './DetailView.css';

export default class DetailView extends Component{

    isVisible() {
        return 'Detail-view ' + ( (this.props.visible) ? 'show' : '' );
    }

    render() {
        return (
            <div className={this.isVisible()}>
                <button onClick={() => this.props.onClick() }> BACK </button>
                <h4>Niort bus</h4>
                <h1>Detail View</h1>
            </div>
        );
    }
}
