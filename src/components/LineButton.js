import React from 'react';

import './LineButton.css';
import LineNumbers from './../assets/line-numbers.png'


const LineButton = ({start, end, number, onTap}) => (
    <div className="Line-button" onClick={() => onTap()} style={LineStyle['LineColor' + number]}>
        <div className="Line-number" style={Object.assign({backgroundImage : 'url(' + LineNumbers + ')'}, LineStyle['LineNumber' + number])}></div>
        <div className="Line-endpoints">
            <div className="Line-stop">{start}</div>
            <div className="Line-stop">{end}</div>
        </div>
    </div>

)

export default LineButton;

/**
 * permet de définir la couleur de la ligne et d'afficher l'image de son numéro
 */
const LineStyle = {
    LineNumber1 : {backgroundPosition: '74px 0'},
    LineColor1 : {backgroundColor: '#ED1D25'},

    LineNumber2 : {backgroundPosition: '74px -64px'},
    LineColor2 : {backgroundColor: '#00854B'},
    
    LineNumber3 : {backgroundPosition: '74px -128px'},
    LineColor3 : {backgroundColor: '#5EC4AE'},
    
    LineNumber4 : {backgroundPosition: '74px -192px'},
    LineColor4 : {backgroundColor: '#E78093'},
    
    LineNumber5 : {backgroundPosition: '74px -256px'},
    LineColor5 : {backgroundColor: '#2C77BB'}
}

