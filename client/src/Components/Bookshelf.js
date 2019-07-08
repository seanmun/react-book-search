import React, { Component } from 'react'


class Bookshelf extends Component {

  render(props) {
    return (
      <div className="container">
        <div className="row">
        {props.children}
        </div>
      </div>
);
}
}
 export default Bookshelf;