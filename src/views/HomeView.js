import React from 'react';

import './HomeView.css';

import LineButton from './../components/LineButton';

const HomeView = ({onSelect}) => (
    <div className="Home-view">
        <header className="Home-header">
            <h4>Niort bus</h4>
            <h1>Lignes TAN</h1>
        </header>
        <div className="Home-body">
            <LineButton onTap={(busId) => onSelect(busId)} start="Trévin / parpin" end="Pôle Universitaire" busId="1"/>
            
            <LineButton onTap={(busId) => onSelect(busId)} start="Ebaupin / Bois Chamaillard" end="Brizeaux CAF" busId="2"/>
            <LineButton onTap={(busId) => onSelect(busId)} start="Pôle Universitaire" end="Terre de sport" busId="3"/>
            <LineButton onTap={(busId) => onSelect(busId)} start="Mairie Aiffre" end="Sainte Pezenne" busId="4"/>
            <LineButton onTap={(busId) => onSelect(busId)} start="Parpin / château Driguet" end="Chaintre brûlée" busId="5"/>
        </div>
    </div>
);

export default HomeView;