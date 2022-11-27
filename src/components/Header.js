import React from "react";

export default class Header extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <section className="content-header">
        <div className="row">
          <div className="col-lg-3">
            <img src="images/sample-logo.png" alt="Logo for KlinterAI" title="Logo for KlinterAI" />
          </div>
          <div className="col-lg-9" style={{"textAlign": "right"}}>
            <p style={{"textAlign": "right"}}>
              <em style={{"textAlign": "right", "width": "60%", "display": "block", "fontSize": 48, "color": "#DC8665"}}>KLINTER.AI</em>
            <a href="/client-login" className="link">Client Login</a></p>
          </div>
        </div>
      </section>
    )
  }

}