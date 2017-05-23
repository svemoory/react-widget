import React from 'react';

import Widget from '../../src';


 const filter ={and: [{GeographyType: 'City'}, { GeographyName:'Sunnyvale'},{Class : 'Residential'}]} ;
const App = () => (

  <div>
    <Widget collection='kpi' select='SoldCount,SoldMedListPrice,SoldAvgDOM,AvgSalePricePerSqft,GeographyName,GeographyType' filter={filter} geotype='City' geoname='Sunnyvale' widgettype='kpi' />
  </div>
);

export default App;
