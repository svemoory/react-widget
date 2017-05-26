import React from "react";
import KPIWidget from "./KPIWidget";
import MarketTrends  from "./MarketTrends";
import numeral from "numeral";


export default class BIWidget extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //expand state to accomoodate other widget data objects
      widgettype: null,
      widgetOptions: {
        geographyName: null,
        geographyType: null,
        SoldCount: null,
        MedianSalePrice: null,
        SoldAvgDOM: null,
        AvgPricePerSqFt: null
      }
    };
  }
  _fetchLinkedWidgetData(geotype, geoname,widgettype,data) {
    const widgetOptions = this.state.widgetOptions;
    //this.state.widgettype=widgettype;

    var data1=data[0];  
    if (widgettype === "kpi") {
      if (geotype !== "" && geoname !== "") {
         
            widgetOptions.geographyName = data1.GeographyName;
            widgetOptions.geographyType = data1.GeographyType;
            widgetOptions.SoldCount = data1.SoldCount;
            widgetOptions.MedianSalePrice = numeral(
              data1.SoldMedListPrice
            ).format("$ 0.00 a");
            widgetOptions.SoldAvgDOM = data1.SoldAvgDOM;
            widgetOptions.AvgPricePerSqFt = numeral(
              data1.AvgSalePricePerSqft
            ).format("$ 0.00 a");

            this.setState({
              widgetOptions,widgettype:widgettype
            });
         console.log('wt',this.state.widgettype);
      }
    }
  }
  componentDidMount() { 
    this.setState({
      widgettype: this.props.widgettype,
    })
    this._fetchLinkedWidgetData(this.props.geotype, this.props.geoname,this.props.widgettype,this.props.data);
  }
  componentWillReceiveProps(x) {
    this._fetchLinkedWidgetData(x.geotype, x.geoname,x.widgettype,x.data);   
  }
  render() {

    var widgetdisplay = "";  
    if (this.state.widgettype === "kpi") {
      widgetdisplay =
        (
         <KPIWidget {...this.state.widgetOptions} />
        );
    }
    else{
      widgetdisplay =(<MarketTrends chartType="bar"/>);
    }
    
    return <div>{widgetdisplay}</div>;
  }
}
