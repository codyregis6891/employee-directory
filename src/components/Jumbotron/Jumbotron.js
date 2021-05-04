import React from "react";
import "../Jumbotron/Jumbotron.css";

function Jumbotron() {
  return (
    <header className="my-5">
      <div>
        <div id="jumbo" className=" jumbotron p-5 text-center shadow-5-strong my-5 col-lg-6 col-md-6 col-sm-6 col-xs-6 offset-3 float-md-center" >
          <h1 className="mb-3 my-5">Employee Directory</h1>
          <p className="mb-3">Look for employees using the search bar</p>
        </div>
      </div>
    </header>
  )
}

export default Jumbotron;