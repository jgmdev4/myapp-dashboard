import React from "react";
import "./text.css";
const BookList = props => {
  return props.bookDetails.map((val, idx) => {
    let name = `${idx}`
      
    return (
      <div className="form-row" key={val.index}>
        <div className="col ">
         
          <input
            type="text"
            className="form-control  input"
            placeholder="Name"
            name="name"
            data-id={idx}
            id={name}
          />
          
        </div>
       
       
       
       
        <div className="col p-4">
          {idx === 0 ? (
            <button
              onClick={() => props.add()}
              type="button"
              className="btn btn-primary text-center"
            >
              <i className="fa fa-plus-circle" aria-hidden="true" />
            </button>
          ) : (
            <button
              className="btn btn-danger"
              onClick={() => props.delete(val)}
            >
              <i className="fa fa-minus" aria-hidden="true" />
            </button>
          )}
        </div>
      </div>
    );
  });
};
export default BookList;
