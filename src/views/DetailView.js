import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './DetailView.css';

import DetailHeader from './../components/DetailHeader';
import StopItem from './../components/StopItem';
import ModalPeriod from './../components/ModalPeriod';
import DetailPeriod from './../components/DetailPeriod';

export default class DetailView extends Component{

    constructor(props){
        super(props);

        this.state = {
            stopItemExpanded: null,
            hourIndexSelected: 0,
            invertDirection: false,
            showModalPeriod: false,
        };
    }


    isVisible() {
        return 'Detail-view show';
    }

    hourClickedHandler = (index) => {
        this.setState({hourIndexSelected: index});
    }
    

    onInvertHandler = () => {
        this.setState({stopItemExpanded: null});
        this.setState({invertDirection: !this.state.invertDirection});
    }

    render() {

        const line = this.props.line;
        const data = line.data;

        var direction = 'aller';
        var start = data.departure;
        var end = data.arrival;
        
        if (this.state.invertDirection) {
            direction = 'retour';
            start = data.arrival;
            end = data.departure;
        }
        
        const modalPeriod = (this.state.showModalPeriod) ? (
            <ModalPeriod onCancel={() => this.setState({showModalPeriod: false})}/>
        ) : null;


        console.log(data.periodes[0][direction]);

        return (
            <div className={this.isVisible()}>

                <DetailHeader start={start} end={end} 
                        color={line.color} 
                        numberPosition={line.numberPosition}
                        onBack={this.props.onBack}
                        onInvert={this.onInvertHandler}
                        />

                <DetailPeriod onTap={() => this.setState({showModalPeriod: true})}/>              

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

                {modalPeriod}

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