import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './DetailView.css';

import DetailHeader from './../components/DetailHeader';


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

        const line = this.props.line;
        const data = line.data;

        return (
            <div className={this.isVisible()}>
                <DetailHeader start={data.departure} end={data.arrival} color={line.color} numberPosition={line.numberPosition} />
                <button onClick={() => this.props.onClick() }> BACK </button>
            </div>
        );
    }
}


DetailView.propTypes = {
    onClick: PropTypes.func.isRequired,
    line: PropTypes.shape({
        busId: PropTypes.string.isRequired,
        color: PropTypes.string.isRequired,
        start: PropTypes.string.isRequired,
        end: PropTypes.string.isRequired,
        numberPosition: PropTypes.string.isRequired,
        data: PropTypes.object.isRequired,
    }).isRequired,
}