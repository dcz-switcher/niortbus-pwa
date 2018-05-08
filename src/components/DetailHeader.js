import React from 'react';
import PropTypes from 'prop-types';

import LineNumbers from './../assets/line-numbers.png'
import backBtn from './../assets/ic_close_white_24px.svg';
import invertArrow from './../assets/ic_compare_arrows_white_24px.svg';

import './DetailHeader.css';

const DetailHeader = ({color, numberPosition, start, end, onBack, onInvert}) => (
    <div className="Line-header" style={{backgroundColor: color}}>
        <div className="Line-number" style={{backgroundImage : 'url(' + LineNumbers + ')', backgroundPosition: numberPosition}}></div>
        <div className="Line-endpoints">
            <div className="Line-stop">{start}</div>
            <div className="Line-stop">{end}</div>
        </div>
        <img src={backBtn} className="Back-btn" onClick={onBack} alt=''/>
        <img src={invertArrow} className="Invert-arrow" onClick={onInvert} alt=''/>
    </div>
);


DetailHeader.propTypes = {
    color: PropTypes.string.isRequired,
    numberPosition: PropTypes.string.isRequired,
    start: PropTypes.string.isRequired,
    end: PropTypes.string.isRequired,
    onBack: PropTypes.func.isRequired,
    onInvert: PropTypes.func.isRequired,
}

export default DetailHeader;