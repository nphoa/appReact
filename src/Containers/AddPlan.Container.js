import React, { Component } from 'react';
import{connect} from 'react-redux';
import * as actions from '../Actions/index';
import * as urls from '../API/URL';
import callApi from '../API/apiCaller';
import PlanAddComponent from '../Components/PlanAdd.Component';
import {  Redirect  } from "react-router-dom";
class AddPlanContainer extends Component {

  constructor(props){
    super(props);
  }
  componentDidMount(){
    

  }
  addPlan = (plan) => {
    console.log(plan);
    callApi(urls.POST_ADD_PLAN,'POST',plan).then((res)=>{
        this.props.history.goBack();
    });
  }
  render() {
    return (
      <PlanAddComponent onAddPlan={this.addPlan}/>
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
export default connect(mapStateToProps,mapDispatchToProps)(AddPlanContainer);
