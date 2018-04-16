const Config  = {
    lines : [
        {busId : '1', color: '#ED1D25', start: 'Trévin / parpin', end: 'Pôle Universitaire', numberPosition: '74px 0', data: require('./lines/ligne1.json')},
        {busId : '2', color: '#00854B', start: 'Ebaupin / Bois Chamaillard', end: 'Brizeaux CAF', numberPosition: '74px -64px', data: require('./lines/ligne2.json')},
        {busId : '3', color: '#5EC4AE', start: 'Pôle Universitaire', end: 'Terre de sport', numberPosition: '74px -128px', data: require('./lines/ligne3.json')},
        {busId : '4', color: '#E78093', start: 'Mairie Aiffre', end: 'Sainte Pezenne', numberPosition: '74px -192px', data: require('./lines/ligne4.json')},
        {busId : '5', color: '#2C77BB', start: 'Parpin / château Driguet', end: 'Chaintre brûlée', numberPosition: '74px -256px', data: require('./lines/ligne5.json')},
    ],
}

export default Config;