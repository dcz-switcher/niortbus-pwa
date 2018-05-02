import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './StopItem.css';


export default class StopItem extends Component{
    constructor(props){
        super(props);

        this.state = {
            showHours : false,
        };
    }

    // syntax for get access to "this"
    clickHandler = () => {
        console.log(this.props.name);
        this.setState({showHours: !this.state.showHours});
    }

    render(){

        const hourScroll = this.props.stops.map((item, index) => {
            return (
                <div key={index} className='HourScroller-item'>{item}</div>
            )
        });

        return (
            <div className='Stop-item' onClick={this.clickHandler}>
                <div className='Stop-detail'>
                    <div className='Hour'>{this.props.stops[0]}</div>
                    <div className='Dot'></div>
                    <div className='Name'>{this.props.name}</div>
                </div>
                <div className='Hour-scroller' style={{backgroundColor: this.props.color}}>
                    {hourScroll}
                </div>
                <div className='Stop-action'>
                    <div className='Line'></div>
                </div>
            </div>
        )
    }
}

StopItem.propTypes = {
    name: PropTypes.string.isRequired,
    stops: PropTypes.array.isRequired,
    color: PropTypes.string.isRequired,
};
