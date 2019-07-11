import React from "react";
import { Jumbotron, Image, Tabs, Tab } from "react-bootstrap";
import ProductDetailTabItem from "./ProductDetailTabItem";
import { connect } from "react-redux";

function ProductDetail(props) {
  const data = props.data.find(item=>item.imei===props.match.params.id);
  return (
    <div className="container-fluid">
      <Jumbotron>
        <h1>Product Details</h1>
      </Jumbotron>
      <div className="row">
        <div className="col-sm-4">
          <Image style={{height:300}} src="/assets/images/img_3.png" fluid />
        </div>
        <div className="col-sm-8">
          <h2 id="name">{data.name}</h2>
          <br />
          <label>Serial No: </label>
          <p>{data.serialNo}</p>
          <br />
          <label>Order No: </label>
          <p>{data.orderNo}</p>
          <br />
          <label>IMEI: </label>
          <p>{data.imei}</p>
          <br />
          <label>Type: </label>
          <p>{data.type}</p>
          <br />
          <label>Model No: </label>
          <p>{data.modelNo}</p>
          <br />
          <label>Order Date: </label>
          <p>{data.orderedDate}</p>
          <br />
          <label>Delivery Date: </label>
          <p>{data.orderedDate}</p>
          <br />
         
          <p />
        </div>
      </div>
   
    </div>
  );
}

const mapStateToProps = state => {
  return {
    data: state.prd.data
  };
};

export default connect(mapStateToProps)(ProductDetail);
