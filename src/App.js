import React, { Component } from 'react';

import './App.css';

import HomeView from './views/HomeView';
import DetailView from './views/DetailView';

class App extends Component {

    constructor(props){
        super(props);

        this.state = {
            busId: null,
        };
    }

    render() {

        const busId = this.state.busId;
        const showDetailView = busId !== null ? (
            <DetailView onClick={this.onBack} busId={this.state.busId} />
        ) 
        : ( null );

        return (
            <div className="App">
                <HomeView onSelect={this.onSelectHandler}/>

                {showDetailView}
            </div>
        );
    }

    onBack = () => {
        this.setState({busId: null});
    }

    onSelectHandler = (_busId) => {
        this.setState({busId: _busId});
    }
}

export default App;
