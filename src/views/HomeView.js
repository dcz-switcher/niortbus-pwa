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
            <LineButton onTap={() => onSelect()} start="Trévin / parpin" end="Pôle Universitaire" number="1"/>
            
            <LineButton onTap={() => onSelect()} start="Ebaupin / Bois Chamaillard" end="Brizeaux CAF" number="2"/>
            <LineButton onTap={() => onSelect()} start="Pôle Universitaire" end="Terre de sport" number="3"/>
            <LineButton onTap={() => onSelect()} start="Mairie Aiffre" end="Sainte Pezenne" number="4"/>
            <LineButton onTap={() => onSelect()} start="Parpin / château Driguet" end="Chaintre brûlée" number="5"/>
        </div>
    </div>
);

export default HomeView;