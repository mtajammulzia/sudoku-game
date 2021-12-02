import React from "react";

function Interface({ handleInterface, status }) {
  return (
    <div className="interface">
      <div className="info-interface">
        <input readOnly value={status}></input>
      </div>
      <div className="action-interface">
        <button
          className="generator-btn btn"
          onClick={() => {
            handleInterface("create");
          }}
        >
          Create
        </button>
        <button
          className="validate-btn btn"
          onClick={() => {
            handleInterface("validate");
          }}
        >
          Validate
        </button>
        <button
          className="solve-btn btn"
          onClick={() => {
            handleInterface("solve");
          }}
        >
          Solve
        </button>
        <button
          className="clear-btn btn"
          onClick={() => {
            handleInterface("clear");
          }}
        >
          Clear
        </button>
      </div>
    </div>
  );
}

export default Interface;
