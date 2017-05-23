import React from 'react';
import {  Container ,Row } from 'reactstrap';
import "./styles/index.css";
import logo from './Images/aculist-edge_logo.png';
import avgsqft from './Images/bi_avg_sq_ft.png';
import dom from './Images/bi_dom.png';
import money from './Images/bi_money.png';

export default class KPIWidget extends React.Component{    

    render(){

        var props = this.props;   
        console.log('kpi props', this.props) ;
        return (
            <Container id="kpiWidget" className="px-0" style={{width:425, height:350}}>
            <Row className="ml-0">
                <div className="col-12">
                    <div className="mt-0">
                         <div  className="text-center font-weight-bold mt-2">
                             <span className="title">
                             <span className="d-block"></span>
                           <span className="d-block"> Market Overview {props.geographyType} -{props.geographyName}</span>
                           </span>

    </div>
    <div>
        <ul className="list-group border-0">
                           <li className="list-group-item clearfix border-0 py-0 px-1">
                               <div className="col-4">
                                   <img alt="" className="mx-auto d-block" src={avgsqft}/>
                               </div>
                               <div className="col-8">
                                   <h2 className="text-center pt-3">
                                       <span>{props.MedianSalePrice}<div></div>
                                           <span className="font-weight-bold mb-1 d-block"></span>
                                           <small className="font-sm">Median Sale Price</small>
                                       </span>
                                   </h2>
                               </div>
                           </li>  
                           <li className="list-group-item clearfix border-0 py-0 px-1">
                               <div className="col-4">
                                   <img alt=""  className="mx-auto d-block" src={money}/>                                 
                               </div>
                               <div className="col-8">
                                   <h2 className="text-center pt-3">
                                       <span>{props.AvgPricePerSqFt}<div></div>
                                           <span className="font-weight-bold mb-1 d-block"></span>
                                           <small className="font-sm">Avg Price/Sq Ft</small>
                                       </span>
                                   </h2>
                               </div>
                           </li>     
                           <li className="list-group-item clearfix border-0 py-0 px-1">
                               <div className="col-4">
                                   <img alt=""  className="mx-auto d-block" src={dom}/>                                   
                               </div>
                               <div className="col-8">
                                   <h2 className="text-center pt-3">
                                       <span>{props.SoldAvgDOM}<div></div>
                                           <span className="font-weight-bold mb-1 d-block"></span>
                                           <small className="font-sm">Avg Days on Market</small>
                                       </span>
                                   </h2>
                               </div>
                           </li>                     

                          

                           <li className="list-group-item border-0 py-0 mb-2 text-center px-1">
                               <span className="d-inline-block w-100 attribution-label count-holder">

                                   Statistics based on <span  className="count">{props.SoldCount}</span> sales over the last 90 days

                                </span>

                           </li>

                           <li className="list-group-item border-0 py-0 attribution">
                               <span className="mx-auto d-block attribution-holder clearfix pos-relative">
                                   <span className="d-inline-block attribution-label">
                                       Powered by:
                                   </span>
                                   <a href="http://aculist.com/" target="_blank" className="attribution-img">
                                       <img alt=""  src={logo} />
                                   </a>
                               </span>

                           </li>


                       </ul>
        </div>
    </div>
    </div> 
    </Row>
    </Container>
        );
                };
};