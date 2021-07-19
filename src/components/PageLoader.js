import React, { Component } from "react";

export default class PageLoader extends Component {
  render() {
    return (
      <div className="page-loader-wrapper" style={{ display: "none" }}>
        <div className="loader">
          <div className="preloader">
            <div className="spinner-layer pl-red">
              <div className="circle-clipper left">
                <div className="circle"></div>
              </div>
              <div className="circle-clipper right">
                <div className="circle"></div>
              </div>
            </div>
          </div>
          <p>Please wait...</p>
        </div>
      </div>
    );
  }
}
