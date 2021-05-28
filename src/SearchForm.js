import React from "react";

export default function SearchForm() {
    return(
        <div className="SearchForm">
            <form>
              <div className="row">
                <div className="col-9">
                  <input type="search" placeholder="Enter city" className="form-control" />
                </div>
                <div className="col-3">
                  <input type="submit" value="search" className="btn btn-warning" />
                </div>
              </div>
            </form>
        </div>
    )
}