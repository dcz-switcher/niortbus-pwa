import React from 'react';
import PropTypes from 'prop-types';

import './ModalPeriod.css';

const ModalPeriod  = ({onCancel}) => (
    <div className='Modal-period'>
        <div className='Overlay-opacity' onClick={onCancel}></div>
        <div className='Modal-content'>selector</div>
    </div>
);

export default ModalPeriod;

ModalPeriod.propTypes = {
    onCancel: PropTypes.func.isRequired,
}
