import React from "react";

export default class Header extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      // test commit
      <div className="content-header">
        <div className="row">
          <div className="col-lg-3">
            <img src="images/sample-logo.png" alt="Logo for KlinterAI" title="Logo for KlinterAI" />
          </div>
          <div className="col-lg-9">
            <a href="/client-login" className="link">Client Login</a>
          </div>
        </div>
      </div>
    )
  }

}