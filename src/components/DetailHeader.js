import React from 'react';
import PropTypes from 'prop-types';

import LineNumbers from './../assets/line-numbers.png'

import './DetailHeader.css';

const DetailHeader = ({color, numberPosition, start, end}) => (
    <div className="Line-header" style={{backgroundColor: color}}>
        <div className="Line-number" style={{backgroundImage : 'url(' + LineNumbers + ')', backgroundPosition: numberPosition}}></div>
        <div className="Line-endpoints">
            <div className="Line-stop">{start}</div>
            <div className="Line-stop">{end}</div>
        </div>
    </div>
);


DetailHeader.propTypes = {
    color: PropTypes.string.isRequired,
    numberPosition: PropTypes.string.isRequired,
    start: PropTypes.string.isRequired,
    end: PropTypes.string.isRequired,
}

export default DetailHeader;