import React from 'react';
import PropTypes from 'prop-types';

import './HomeView.css';

import Config from './../config';

import LineButton from './../components/LineButton';

const HomeView = ({onSelect}) => (
    <div className="Home-view">
        <header className="Home-header">
            <h4>Niort bus</h4>
            <h1>Lignes TAN</h1>
        </header>
        <div className="Home-body">
            {
                Config.lines.map((line, index) => {
                    return <LineButton key={line.busId} 
                            line={line}
                            onSelect={() => onSelect(line)} />;
                })
            }
        </div>
    </div>
);

HomeView.propTypes = {
    onSelect: PropTypes.func.isRequired,
}


export default HomeView;