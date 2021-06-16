import React from "react";

function Form(props){
return (
  <div className="container">
    <form>
      <div class="input-group">
          <input
            onChange={props.handleInputChange}
            onClick={props.handleFormSubmit}
            value={props.search}
            name="search"
            type="text"
            className="form-control"
            placeholder="Search a book"
            id="search"
          />
          <div className="input-group-append">
            <button onClick={props.handleFormSubmit} className="btn btn-dark">
              <i class="fa fa-search"></i>
            </button>
          </div>
        </div>
    </form>
  </div>
);
}

export default Form;
