import React from 'react';
import PropTypes from 'prop-types';

import './StopItem.css';

const StopItem = () => (
    <div className='Stop-item'>
        <div className='Stop-detail'>
            <div className='Hour'>99:99</div>
            <div className='Dot'></div>
            <div className='Name'>Name</div>
        </div>
        <div className='Stop-action'>
            <div className='Line'></div>
        </div>
    </div>
);


export default StopItem;