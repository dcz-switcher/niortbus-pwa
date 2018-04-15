import React from 'react';

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
                            onTap={(busId) => onSelect(busId)} />;
                })
            }
        </div>
    </div>
);

export default HomeView;