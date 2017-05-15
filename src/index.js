import React from 'react';
import { MLSGeography } from 'react-mlsdata';

const Trends = () => (
    <div>       
      <MLSGeography    >
        {({ loading, error, data }) => (
          <div>
            {loading && <h2>{`${loading}`}</h2>}
            {error && <h2>{`${error}`}</h2>}
            {data && <h1>{data.value[0].CountyName}</h1>}
          </div>
        )}
      </MLSGeography>
    </div>
);

export default Trends;