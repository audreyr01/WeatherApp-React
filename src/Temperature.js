import React from "react";

export default function Temperature() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6 Temperture">
          <span className="degrees">23 </span>
          <a href="https://yjm1h.csb.app/" className="celsius units">
            °C |
          </a>

          <a href="https://yjm1h.csb.app/" className="farenheit units">
            {" "}
            °F
          </a>
          <br />
          <span className="TruFeel">TruFeel 20°F </span>
        </div>

        <div className="col-6">
          <span className="forecast">
            01:00 <i className="fas fa-cloud-sun-rain icon"></i> ↑55 ↓45
          </span>
          <br />
          <span className="forecast">
            04:00 <i className="fas fa-cloud-sun-rain icon"></i> ↑32 ↓22
          </span>
          <br />
          <span className="forecast">
            07:00 <i className="fas fa-cloud-sun-rain icon"></i> ↑71 ↓65
          </span>
          <br />
          <span className="forecast">
            10:00 <i className="fas fa-cloud-sun-rain icon"></i> ↑60 ↓58
          </span>
          <br />
        </div>
      </div>
    </div>
  );
}
