import React, { Component } from "react";
import ProductItemComponent from '../Components/ProductItem.Component';
import {  Link } from "react-router-dom";
class ProductListComponent extends Component {
  showListItem = (products) => {
    var result = null;  
    if(products && products.length > 0){
        result = products.map((product,index) => {
            return <ProductItemComponent product={product} key={index}/>
        });
    }
    return result;  
  };
  render() {
    return (
      
      <div>
      <Link to="/product/add"  className="btn btn-large btn-block btn-success" style={{width: 100}}>Add New</Link>

      <br/>
      
      <div className="panel panel-widget">
      
        <div className="tables">
          <h4>Product List</h4>
          <table className="table">
            <thead>
              <tr>
                <th>STT</th>
                <th>Mã</th>
                <th>Tên</th>
                <th>Gía</th>
                <th>Trạng thái</th>
                <th>Hành động</th>
              </tr>
            </thead>
            <tbody>
                {this.showListItem(this.props.products)}
            </tbody>
            
          </table>
        </div>
      </div>

      </div>
    );
  }
}

export default ProductListComponent;
