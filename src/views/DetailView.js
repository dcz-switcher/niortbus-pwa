import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './DetailView.css';

import DetailHeader from './../components/DetailHeader';
import StopItem from './../components/StopItem';

export default class DetailView extends Component{

    constructor(props){
        super(props);

        this.state = {};
    }


    isVisible() {
        //return 'Detail-view ' + ( (this.props.visible) ? 'show' : '' );
        return 'Detail-view show';
    }

    render() {

        const line = this.props.line;
        const data = line.data;

        console.log(data.periodes[0]['aller']);

        return (
            <div className={this.isVisible()}>
                <button style={style.backBtn} onClick={() => this.props.onClick() }> BACK </button>
                <DetailHeader start={data.departure} end={data.arrival} color={line.color} numberPosition={line.numberPosition} />
                <div>
                    {
                        data.periodes[0]['aller'].map((stop, index) => {
                            return <StopItem key={index} name={stop.name}/>
                        })
                    }
                </div>
            </div>
        );
    }
}


const style = {
    backBtn : {
        position: 'absolute',
        top: '10px',
        right: '10px',
        color: 'white',
    }
}


DetailView.propTypes = {
    onClick: PropTypes.func.isRequired,
    line: PropTypes.shape({
        busId: PropTypes.string.isRequired,
        color: PropTypes.string.isRequired,
        start: PropTypes.string.isRequired,
        end: PropTypes.string.isRequired,
        numberPosition: PropTypes.string.isRequired,
        data: PropTypes.object.isRequired,
    }).isRequired,
}