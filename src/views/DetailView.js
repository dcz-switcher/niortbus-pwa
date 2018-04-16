import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './DetailView.css';

export default class DetailView extends Component{

    constructor(props){
        super(props);

        this.state = {};
    }


    isVisible() {
        //return 'Detail-view ' + ( (this.props.visible) ? 'show' : '' );
        return 'Detail-view show';
    }

    render() {
        return (
            <div className={this.isVisible()}>
                <button onClick={() => this.props.onClick() }> BACK </button>
                <h4>Niort bus</h4>
                <h1>Detail View {this.props.line.busId}</h1>
                <div>
                    <div>{this.props.line.data.departure}</div>
                    <div>{this.props.line.data.arrival}</div>
                </div>
            </div>
        );
    }
}


DetailView.propTypes = {
    onClick: PropTypes.func.isRequired,
    line: PropTypes.objectOf(
        PropTypes.shape({
            busId: PropTypes.string.isRequired,
            color: PropTypes.string.isRequired,
            start: PropTypes.string.isRequired,
            end: PropTypes.string.isRequired,
            numberPosition: PropTypes.string.isRequired,
            data: PropTypes.object.isRequired,
        })
    ).isRequired,
}