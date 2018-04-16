import React, { Component } from 'react';

import './App.css';

import HomeView from './views/HomeView';
import DetailView from './views/DetailView';

class App extends Component {

    constructor(props){
        super(props);

        this.state = {
            lineSelected: null,
        };
    }

    render() {

        const _lineSelected = this.state.lineSelected;
        const showDetailView = _lineSelected !== null ? (
            <DetailView onClick={this.onBack} line={_lineSelected} />
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
        this.setState({lineSelected: null});
    }

    onSelectHandler = (line) => {
        this.setState({lineSelected: line});
    }
}

export default App;
