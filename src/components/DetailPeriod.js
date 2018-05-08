import React from 'react';
import PropTypes from 'prop-types';

import downArrow from './../assets/ic_keyboard_arrow_down_black_24px.svg';

import './DetailPeriod.css';

const DetailPeriod = ({periodLabel, onTap}) => (
    <div className="Period-selector" onClick={onTap}>
        <div className='Period-label'>{periodLabel}</div>
        <img src={downArrow} alt='' className='Down-arrow'/>
    </div>
);

export default DetailPeriod;

DetailPeriod.propTypes = {
    periodLabel: PropTypes.string.isRequired,
    onTap: PropTypes.func.isRequired,
}