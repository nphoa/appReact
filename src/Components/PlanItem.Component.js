import React, { Component } from "react";

class PlanItemComponent extends Component {
    onDelete  = (id) => {
        this.props.onDelete(id);    
    }
    render() {
    let { plan } = this.props;
    return (
        <tr>
        <td>{plan.id}</td>
        <td>{plan.name}</td>
        <td>{plan.start_Date}</td>
        <td>{plan.end_Date}</td>
        <td>
           <button type="button" className="btn btn-success" style={{ marginRight:"10px" }}>Sửa</button>
           <button type="button" className="btn btn-danger" onClick={(e) =>this.onDelete(plan.id)}>Delete</button>
        </td>
      </tr>
    );
  }
}

export default PlanItemComponent;
