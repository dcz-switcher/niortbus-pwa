import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './DetailView.css';

import DetailHeader from './../components/DetailHeader';
import StopItem from './../components/StopItem';

import backBtn from './../assets/ic_close_white_24px.svg';
import invertArrow from './../assets/ic_compare_arrows_white_24px.svg';

export default class DetailView extends Component{

    constructor(props){
        super(props);

        this.state = {
            stopItemExpanded: null,
            hourIndexSelected: 0,
            invertDirection: false,
        };
    }


    isVisible() {
        return 'Detail-view show';
    }

    hourClickedHandler = (index) => {
        this.setState({hourIndexSelected: index});
    }
    

    invertArrowClickHandler = () => {
        this.setState({stopItemExpanded: null});
        this.setState({invertDirection: !this.state.invertDirection});
    }

    render() {

        const line = this.props.line;
        const data = line.data;
        const direction = (this.state.invertDirection) ? 'retour' : 'aller';

        console.log(data.periodes[0][direction]);

        return (
            <div className={this.isVisible()}>

                <img src={backBtn} className="Back-btn" onClick={() => this.props.onBack() } alt=''/>
                <img src={invertArrow} className="Invert-arrow" onClick={this.invertArrowClickHandler} alt=''/>
                <DetailHeader start={data.departure} end={data.arrival} 
                        color={line.color} 
                        numberPosition={line.numberPosition} 
                        />
               
                <div className='Detail-stops'>
                    {
                        data.periodes[0][direction].map((stop, index) => {
                            return <StopItem key={index}
                                        id={index} 
                                        stop={stop}
                                        color={line.color}
                                        expanded={index === this.state.stopItemExpanded}
                                        hourIndexSelected={this.state.hourIndexSelected}
                                        clicked={(id) => this.setState({stopItemExpanded: id})}
                                        hourClicked={this.hourClickedHandler}
                                        />
                        })
                    }
                </div>
            </div>
        );
    }
}


DetailView.propTypes = {
    onBack: PropTypes.func.isRequired,
    line: PropTypes.shape({
        busId: PropTypes.string.isRequired,
        color: PropTypes.string.isRequired,
        start: PropTypes.string.isRequired,
        end: PropTypes.string.isRequired,
        numberPosition: PropTypes.string.isRequired,
        data: PropTypes.object.isRequired,
    }).isRequired,
}