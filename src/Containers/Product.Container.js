import React, { Component } from 'react';
import{connect} from 'react-redux';
import * as actions from '../Actions/index';
import * as urls from '../API/URL';
import ProductListComponent from '../Components/ProductList.Component';
import callApi from '../API/apiCaller';
class ProductContainer extends Component {

  constructor(props){
    super(props);
  }
  componentDidMount(){
    console.log('componentDidMount');
    callApi(urls.GET_ALL_PRODUCT,'GET',null).then(res=>{
        this.props.fetchAllProduct(res.data);
    });

  }
  render() {
    let {products} =  this.props;
    return (
      <ProductListComponent products = {products}/>
    );
  }
}

const mapStateToProps = (state) => {
  return{
    products:state.product
  }
}
const mapDispatchToProps = (dispatch,props) => {
    return {
      fetchAllProduct:(products)=>{
        dispatch(actions.fetchAllProduct(products));
      }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ProductContainer);
