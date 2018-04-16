import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './DetailView.css';

export default class DetailView extends Component{

    isVisible() {
        //return 'Detail-view ' + ( (this.props.visible) ? 'show' : '' );
        return 'Detail-view show';
    }

    render() {
        return (
            <div className={this.isVisible()}>
                <button onClick={() => this.props.onClick() }> BACK </button>
                <h4>Niort bus</h4>
                <h1>Detail View {this.props.busId}</h1>
            </div>
        );
    }
}


DetailView.propTypes = {
    onClick: PropTypes.func.isRequired,
    busId: PropTypes.string.isRequired,
}