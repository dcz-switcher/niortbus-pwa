import React, { Component } from 'react';

import './App.css';

import HomeView from './views/HomeView';
import DetailView from './views/DetailView';

class App extends Component {

    constructor(props){
        super(props);

        this.state = {
            showDetail: false,
        };
    }


    render() {
        return (
            <div className="App">
                <HomeView onSelect={this.onSelectHandler}/>
                <DetailView visible={this.state.showDetail} onClick={this.onBack}/>
            </div>
        );
    }

    onBack = () => {
        this.setState({showDetail: !this.state.showDetail})
    }

    onSelectHandler = () => {
        this.setState({showDetail: !this.state.showDetail})
    }
}

export default App;
