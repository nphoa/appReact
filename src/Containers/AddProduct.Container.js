import React, { Component } from 'react';
import{connect} from 'react-redux';
import * as actions from '../Actions/index';
import * as urls from '../API/URL';
import callApi from '../API/apiCaller';
import ProductAddComponent from '../Components/ProductAdd.Component';
class AddProductContainer extends Component {

  constructor(props){
    super(props);
  }
  componentDidMount(){
    

  }
  render() {
    return (
      <ProductAddComponent/>
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
      
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(AddProductContainer);
