import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './ModalPeriod.css';

export default class ModalPeriod extends Component{

    render() {

        const list = this.props.periods.map((period, index) => {
            return <li key={index} onClick={() => this.props.onSelect(index)}>{period.name}</li>
        });

        return (
            <div className='Modal-period'>
                <div className='Overlay-opacity' onClick={this.props.onCancel}></div>
                <div className='Modal-content'>
                    <div className='Modal-title'>Périodes</div>
                    <ul>
                    {list}
                    </ul>
                </div>
            </div>
        )
    }
}

ModalPeriod.propTypes = {
    periods: PropTypes.array.isRequired,
    onSelect: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired,
}
