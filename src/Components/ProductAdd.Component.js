import React, { Component } from "react";
import WOW from "wow.js";
class ProductAddComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code:'',
      name:'',
      price:0,
      inventory:0,
      description:'',
      status:'1'

    }
  }
  componentWillMount() {
    //Run before render view
    new WOW().init();
  }

  onChange = (e) =>{
    //console.log(e.target.value);
    this.setState({
      [e.target.name] :e.target.value
    });
    
  }
  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  }
  render() {
    return (
      <div class="wow flipInX">
        <div className="panel panel-widget forms-panel"style={{ width: "60%" }}>
          <div className="forms">
            <div className="form-grids widget-shadow"data-example-id="basic-forms">
              <div className="form-title">
                <h4>Basic Form :</h4>
              </div>
              <div className="form-body">
                <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                    <label>Code</label>
                    <input
                      type="text"
                      className="form-control"
                      name="code"
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group">
                  <label>Price</label>
                  <input
                    type="number"
                    className="form-control"
                    name="price"
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <label>Inventory</label>
                  <input
                    type="number"
                    className="form-control"
                    name="inventory"
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <label>Description</label>
                  <textarea
                    type="text"
                    className="form-control"
                    name="description"
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <label>Status</label>  
                  <select className="form-control" name="status" onChange={this.onChange}>
                      <option value='1'>Active</option>
                      <option value='0'>Unactive</option>
                  </select>
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
