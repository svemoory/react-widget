import React, { Component } from "react";
import { MLSStats } from "./react-mlsdata";
import BIWidget from "./BIWidget";




export default class Widget extends React.Component {
   constructor(props) {
    super(props);
   }
  render() {
   
    return <div>  <MLSStats collection={this.props.collection} filter={this.props.filter} select={this.props.select} >
        {({ loading, error, data }) => (
          <div>
            {loading && <h2>{`${loading}`}</h2>}
            {error && <h2>{`${error}`}</h2>}
            {data && <BIWidget data={data.value} geotype={this.props.geotype} geoname={this.props.geoname} widgettype={this.props.widgettype} />}
          </div>
        )}
      </MLSStats></div>;    
  }
}


