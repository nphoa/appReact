import React, { Component } from "react";
import PlanItemComponent from '../Components/PlanItem.Component';
import {  Link } from "react-router-dom";
class PlanListComponent extends Component {
  showListItem = (plans) => {
    var result = null;  
    if(plans && plans.length > 0){
        result = plans.map((plan,index) => {
            return <PlanItemComponent plan={plan} key={index} onDelete = {this.props.onDelete}/>
        });
    }
    return result;  
  };
  render() {
    return (
      
      <div>
      <Link to="/plan/add"  className="btn btn-large btn-block btn-success" style={{width: 100}}>Add New</Link>

      <br/>
      
      <div className="panel panel-widget">
      
        <div className="tables">
          <h4>Plan List</h4>
          <table className="table">
            <thead>
              <tr>
                <th>STT</th>
                <th>Tên</th>
                <th>Ngày bắt đầu</th>
                <th>Ngày kết thúc</th>
                <th>Hành động</th>
              </tr>
            </thead>
            <tbody>
                {this.showListItem(this.props.plans)}
            </tbody>
            
          </table>
        </div>
      </div>

      </div>
    );
  }
}

export default PlanListComponent;
