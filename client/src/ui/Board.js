import React from "react";
import Tile from "./Tile";

function Board({ puzzle, grid, handleChange }) {
  return (
    <div className="board">
      <Tile puzzle={puzzle} grid={grid} handleChange={handleChange} />
    </div>
  );
}

export default Board;
