import React, { Component } from "react";
import { Image, Col, Card, Button } from "react-bootstrap";
import {Link } from "react-router-dom";
import { connect } from "react-redux";

function ProductItem(props) {
  const data = props.data;
  return (
    <Col sm={6} md={4} lg={3}>
      <Card className="m-1">
        <div className="m-1">
          <Image style={{height:200}} src="/assets/images/img_3.png" fluid />
          <h6
            style={{
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
              maxLines: 1
            }}
          >
            {data.name}
          </h6>
          <span style={{ color: "blue"}}>Price : </span>
          {"$ "+(data.price)}
          <br />
          <span style={{ color: "blue" }}>Warranty Period : </span>
          {data.warrantyPeriod}
          <br />
          <span style={{ color: "blue" }}>OrderedDate : </span>
          {data.orderedDate}
            <br /><br />
          <Link
            style={{ color: "black", textDecoration: "none" }}
            to={"/detail/"+data.imei}
          >
            <Button className='m-1' variant="secondary">View Detail</Button>
          </Link>
          <Button className='m-1'
            variant={props.cart.hasOwnProperty(data.serialNo)?"info":"secondary"}
            onClick={() => props.onAddToCartClick(data.serialNo)}
          >
            {props.cart.hasOwnProperty(data.serialNo)?"Added":"Add to Cart"}
          </Button>
        </div>
      </Card>
    </Col>
  );
}

const mapStateToProps = state => {
  return {
    cart: state.crt.cart
  };
};

export default connect(mapStateToProps)(ProductItem);
