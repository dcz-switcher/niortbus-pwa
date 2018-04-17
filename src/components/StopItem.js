import React from 'react';
import PropTypes from 'prop-types';

import './StopItem.css';

const StopItem = ({name}) => (
    <div className='Stop-item'>
        <div className='Stop-detail'>
            <div className='Hour'>99:99</div>
            <div className='Dot'></div>
            <div className='Name'>{name}</div>
        </div>
        <div className='Stop-action'>
            <div className='Line'></div>
        </div>
    </div>
);

StopItem.propTypes = {
    name: PropTypes.string.isRequired,
};

export default StopItem;