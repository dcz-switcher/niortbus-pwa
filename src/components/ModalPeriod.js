import React from 'react';
import PropTypes from 'prop-types';

import './ModalPeriod.css';

const ModalPeriod  = ({periods, onSelect, onCancel}) => (
    <div className='Modal-period'>
        <div className='Overlay-opacity' onClick={onCancel}></div>
        <div className='Modal-content'>soon ...</div>
    </div>
);

export default ModalPeriod;

ModalPeriod.propTypes = {
    periods: PropTypes.array.isRequired,
    onSelect: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired,
}
