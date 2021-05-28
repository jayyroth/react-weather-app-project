import React from "react";
import "./SearchForm.css";

export default function SearchForm() {
    return(
        <div className="SearchForm">
            <form>
              <div className="row">
                <div className="col-9">
                  <input type="search" placeholder="Enter city" className="form-control" autoFocus="on" />
                </div>
                <div className="col-3">
                  <input type="submit" value="search" className="btn btn-warning w-100" />
                </div>
              </div>
            </form>
        </div>
    )
}