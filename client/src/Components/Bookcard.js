import React, { Component } from 'react'


class Bookcard extends Component {

  render() {
    return (
  <div className="card">
    <img src="..." className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Book title</h5>
      <p className="card-text">Book description here.</p>
      <a className="btn btn-primary">Save</a>
    </div>
  </div>
  );
}
}

 export default Bookcard;