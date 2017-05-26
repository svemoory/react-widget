import React from 'react';

import Widget from '../../src';


 const filter ={and: [{GeographyType: 'City'}, { GeographyName:'Sunnyvale'},{Class : 'Residential'}]} ;
const App = () => (

  <div>
    <Widget collection='markettrends' select='SoldAvgDOM,GeographyName,GeographyType' filter={filter} geotype='City' geoname='Sunnyvale' widgettype='markettrends' />
  </div>
);

export default App;
