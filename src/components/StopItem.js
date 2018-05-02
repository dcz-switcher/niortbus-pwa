import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './StopItem.css';


export default class StopItem extends Component{
    constructor(props){
        super(props);

        this.state = {};
    }

    // syntax for get access to "this"
    clickHandler = () => {
        const value = (this.props.expanded) ? null : this.props.id;
        
        this.props.clicked(value);
    }

    render(){

        const stop = this.props.stop;
        const color = this.props.color;
        const expanded = this.props.expanded;


        const hourScroll = (expanded) ? (stop.stops.map((item, index) => {
            return (
                <div key={index} className='HourScroller-item'>{item}</div>
            )
        })) : null;

        return (
            <div className='Stop-item' onClick={this.clickHandler}>
                <div className='Stop-detail'>
                    <div className='Hour'>{stop.stops[0]}</div>
                    <div className='Dot'></div>
                    <div className='Name'>{stop.name}</div>
                </div>
                { expanded &&
                    <div className='Hour-scroller' style={{backgroundColor: color}}>
                        {hourScroll}
                    </div>
                }
                <div className='Stop-action'>
                    <div className='Line'></div>
                </div>
            </div>
        )
    }
}

StopItem.propTypes = {
    id: PropTypes.number.isRequired,
    clicked: PropTypes.func.isRequired,
    stop: PropTypes.object.isRequired,
    color: PropTypes.string.isRequired,
    expanded: PropTypes.bool.isRequired,
};
