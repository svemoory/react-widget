import React, { Component } from 'react';
import OData, { buildQuery } from 'react-odata';

const dbase = 'http://api1.mlslistings.com/resodata';
const statsbase = 'http://localhost/RETSAPI';


class MLSCount extends Component {
  render () {
    const { query } = this.props;
    const countQuery = {
      top: 0,
      count: true,
      ...query
    }
    return <MLSData {...this.props} query={countQuery}/>
  }
}

class MLSMedia extends Component {
  render() {
    const { resource = "public", collection = "Media", ListingKeyNumeric = false , MemberKeyNumeric = false, MediaType = 'Photo' } = this.props;
    const ResourceRecordKeyNumeric = ListingKeyNumeric ? ListingKeyNumeric : MemberKeyNumeric;
    const mediaQuery = {
          filter: { 
          and: [
                { ResourceRecordKeyNumeric },
                "MediaStatus eq ResourceEnums.MediaStatus'Valid'",
                `MediaCategory eq ResourceEnums.MediaCategory'${MediaType}'`
              ]
          },
          top: 1
        };
    return <MLSData {...this.props} resource={resource} collection={collection} query={mediaQuery} processed={true} />
  }
}

//Adding classes to accommodate stats and geographies
class MLSGeography extends Component {
  render() {
    const { resource = "BiEntity", collection = "vGeographyByGeographyTypes", filter="",select="", ...rest } = this.props; 
    return <MLSData base={statsbase} resource={resource} collection={collection} query={{ select, filter}} {...rest} /> 
  }
}

class MLSStats extends Component {
  render() {
    const { resource = "Growth", collection, filter, select } = this.props; 
    var actualcollection=   (collection.toLowerCase() === 'markettrends' || collection.toLowerCase() === 'year-to-year')?'MarketTrends': 
    collection.toLowerCase() === 'kpi'?'MarketTrendsLast90':   
    (collection.toLowerCase() === 'member' || collection.toLowerCase() === 'office') ? 'AgentProduction':'';    
    return <MLSData {...this.props} base={statsbase} resource={resource} collection={actualcollection} query={{ select, filter}}/> 
  }
}

//end

class MLSData extends Component {
  render() {
    const { token } = this.props;
    const auth = { headers: { ...typeof token !== "undefined" && { Authorization : `Bearer ${token}` }, 'Accept': 'application/json'}};
    const { base = dbase, collection, authHeader = auth, link, resource = 'www', limit, processed = false } = this.props;
    

    if (link) {
      return <OData {...this.props} baseUrl={link} options={authHeader} />
    }

    if (collection.toLowerCase() === 'media' && !processed ) {
      return <MLSMedia {...this.props} collection={collection} resource={resource} options={authHeader} />
    }

    return <OData {...this.props} baseUrl={`${base}/${resource}/${collection}`} options={authHeader} />
  }
}

export { MLSMedia, MLSCount,MLSGeography,MLSStats};
export default MLSData;