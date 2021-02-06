import React from "react";

export default function WeatherApp() {
  return (
    <form className="SearchEngine">
      <div className="row">
        <div className="col-9">
          <input
            type="search"
            placeholder="TYPE A CITY..."
            autoComplete="off"
            autoFocus="on"
            className="form-control"
          />
        </div>

        <div className="col-3">
          <input
            type="submit"
            value="Search"
            id="search-button"
            className="form-control btn btn-primary"
          />
        </div>
      </div>
    </form>
  );
}
