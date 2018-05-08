import React from 'react';
import PropTypes from 'prop-types';

import downArrow from './../assets/ic_keyboard_arrow_down_black_24px.svg';

import './DetailPeriod.css';

const DetailPeriod = () => (
    <div className="Period-selector" onClick={() => console.log('click')}>
        <div className='Period-label'>periode</div>
        <img src={downArrow} alt='' className='Down-arrow'/>
    </div>
);

export default DetailPeriod;