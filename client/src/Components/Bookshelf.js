import React from "react";

 // function Board(props) {
//   return <div className="wrapper">{props.children}</div>;
// }

 function Bookshelf(props) {
  return <div className="container">
    <div className="row">

 {props.children}

     </div>
  </div>;
}

 export default Bookshelf;