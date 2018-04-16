import React from 'react';
import PropTypes from 'prop-types';

import './LineButton.css';
import LineNumbers from './../assets/line-numbers.png'


const LineButton = ({line, onSelect}) => (
    <div className="Line-button" onClick={() => onSelect()} style={{backgroundColor: line.color}}>
        <div className="Line-number" style={{backgroundImage : 'url(' + LineNumbers + ')', backgroundPosition: line.numberPosition}}></div>
        <div className="Line-endpoints">
            <div className="Line-stop">{line.start}</div>
            <div className="Line-stop">{line.end}</div>
        </div>
    </div>

)

LineButton.propTypes = {
    line: PropTypes.object.isRequired,
    onSelect: PropTypes.func.isRequired,
};

export default LineButton;