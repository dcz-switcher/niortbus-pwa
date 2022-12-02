const Config  = {
    lines : [
        {busId : '1', color: '#ED1D25', start: 'Université', end: 'Chauray', numberPosition: '74px 0', data: require('./lines/ligne1.json')},
        {busId : '2', color: '#00854B', start: 'Bessines', end: 'Brizeaux CAF', numberPosition: '74px -74px', data: require('./lines/ligne2.json')},
        {busId : '3', color: '#5EC4AE', start: 'Pôle Universitaire', end: 'Terre de sport', numberPosition: '74px -148px', data: require('./lines/ligne3.json')},
        {busId : '4', color: '#E78093', start: 'Sainte Pezenne', end: 'Aiffres', numberPosition: '74px -222px', data: require('./lines/ligne4.json')},
        {busId : '5', color: '#2C77BB', start: 'Chaintre brûlée', end: 'Château Driguet', numberPosition: '74px -296px', data: require('./lines/ligne5.json')},
        {busId : '6', color: '#8CC63E', start: 'St Liguaire', end: 'Coubertin', numberPosition: '74px -370px', data: require('./lines/ligne6.json')},
        {busId : '7', color: '#A4548B', start: 'Pôle Atlantique', end: 'Maisons Rouges', numberPosition: '74px -444px', data: require('./lines/ligne7.json')},
        {busId : '8', color: '#DE2370', start: 'Surimeau', end: 'Hôpital', numberPosition: '74px -518px', data: require('./lines/ligne8.json')},
        {busId : '9', color: '#F49719', start: 'Pôle Atlantique', end: 'Collège Curie', numberPosition: '74px -592px', data: require('./lines/ligne9.json')},
        {busId : '10', color: '#793329', start: 'Cholette', end: 'Trente Ormeaux', numberPosition: '74px -666px', data: require('./lines/ligne10.json')},
        {busId : '11', color: '#FFCB02', start: 'Gare SNCF', end: 'Chauray Parpin', numberPosition: '74px -740px', data: require('./lines/express.json')},
    ],
}

export default Config;