import React, { Component } from 'react';
import{connect} from 'react-redux';
import * as actions from '../Actions/index';
import * as urls from '../API/URL';
import PlanListComponent from '../Components/PlanList.Component';
import callApi from '../API/apiCaller';
class PlanContainer extends Component {

  constructor(props){
    super(props);
  }
  getAllPlan = ()=>{
    callApi(urls.GET_ALL_PLAN,'GET',null).then(res=>{
        this.props.fetchAllPlan(res.data);
    });
  }
  componentDidMount(){
    //console.log('componentDidMount');
    this.getAllPlan();

  }
  onDelete = (id) =>{
    callApi(urls.GET_DELETE_PLAN.toString() + `?id=${id}` ,'GET',null).then(res=>{
        this.getAllPlan();
    });
  }
  render() {
    let {plans} =  this.props;
    console.log(plans);
    return (
      <PlanListComponent plans = {plans} onDelete = {this.onDelete}/>
    );
  }
}

const mapStateToProps = (state) => {
  return{
    plans:state.plan
  }
}
const mapDispatchToProps = (dispatch,props) => {
    return {
      fetchAllPlan:(plans)=>{
        dispatch(actions.fetchAllPlan(plans));
      }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(PlanContainer);
