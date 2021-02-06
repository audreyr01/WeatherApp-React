import React from "react";

export default function DescriptiveAttributes() {
  return (
    <div className="row">
      <div className="col-4">
        <span className="humidity description">Humidity: 10%</span>
      </div>

      <div className="col-4">
        <span className="description">Light Rain</span>
      </div>

      <div className="col-4">
        <span className="wind description">Wind: 5mph</span>
      </div>
    </div>
  );
}
