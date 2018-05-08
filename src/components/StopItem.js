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
                <div key={index} className='HourScroller-item' onClick={() => this.props.hourClicked(index)}>{item}</div>
            )
        })) : null;

        return (expanded) ?
        (
            <div className='Stop-item'>
                <div className='Stop-detail-expanded' style={{backgroundColor: color}}>
                    <div className='Dot'></div>
                    <div className='Name'>{stop.name}</div>
                </div>
                <div className='Hour-scroller' style={{backgroundColor: color}}>
                    {hourScroll}
                </div>
                <div className='Stop-action'>
                    <div className='Line'></div>
                </div>
            </div>
        ):(
            <div className='Stop-item' onClick={this.clickHandler}>
                <div className='Stop-detail'>
                    <div className='Hour'>{stop.stops[this.props.hourIndexSelected]}</div>
                    <div className='Dot'></div>
                    <div className='Name'>{stop.name}</div>
                </div>
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
    hourClicked: PropTypes.func.isRequired,
    hourIndexSelected: PropTypes.number.isRequired,
    stop: PropTypes.object.isRequired,
    color: PropTypes.string.isRequired,
    expanded: PropTypes.bool.isRequired,
};
