import React, { Component } from "react";
import WOW from "wow.js";
class ProductAddComponent extends Component {
    constructor(props) {
        super(props);
        
    }
    componentWillMount() {
        //Run before render view
        new WOW().init();
    }
    render() {
    return (
        <div className="wow">
        
        
      <div className="panel panel-widget forms-panel" style={{width: '60%'}}>
        <div className="forms">
          <div
            className="form-grids widget-shadow"
            data-example-id="basic-forms"
          >
            <div className="form-title">
              <h4>Basic Form :</h4>
            </div>
            <div className="form-body">
              <form>
             
                <div className="form-group">
              
                  <label htmlFor="exampleInputEmail1">Email address</label>{" "}
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    placeholder="Email"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Password</label>{" "}
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Password"
                  />
                </div>

                <button type="submit" className="btn btn-default">
                  Submit
                </button>{" "}
              </form>
            </div>
          </div>
        </div>
      </div>

      </div> 
    );
  }
}

export default ProductAddComponent;
