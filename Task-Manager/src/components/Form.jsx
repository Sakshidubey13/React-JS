import React from "react";

export default function Form() {
  return (
    <form>
      <div className="container-fluid">
        <div className="container">
          <div className="row mb-3">
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
              Title
            </label>
            <div className="col-sm-10">
              <input type="email" className="form-control" id="inputEmail3" />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">
              Description
            </label>
            <div className="col-sm-10">
              <input
                type="password"
                className="form-control"
                id="inputPassword3"
              />
            </div>
          </div>
          <fieldset className="row mb-3">
            <legend className="col-form-label col-sm-2 pt-0">Status</legend>
            <div className="col-sm-10">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gridRadios"
                  id="gridRadios1"
                  defaultValue="option1"
                  defaultChecked=""
                />
                <label className="form-check-label" htmlFor="gridRadios1  bg-success p-3">
                  Completed
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gridRadios"
                  id="gridRadios2"
                  defaultValue="option2"
                />
                <label className="form-check-label" htmlFor="gridRadios2">
                  Running
                </label>
              </div>
              <div className="form-check disabled">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gridRadios"
                  id="gridRadios3"
                  defaultValue="option3"
                  disabled=""
                />
                <label className="form-check-label" htmlFor="gridRadios3">
                  Pending
                </label>
              </div>
            </div>
          </fieldset>

          <button type="submit" className="btn btn-primary">
            Add
          </button>
        </div>
      </div>
    </form>
  );
}
