export const REST = {
  getBoard: function () {
    return fetch(`http://localhost:5000/puzzle`);
  },
  solveBoard: function (grid) {
    const data = {
      board: grid,
    };
    return fetch(`http://localhost:5000/solve`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  },
  validateBoard: function (grid) {
    const data = {
      board: grid,
    };
    return fetch(`http://localhost:5000/validate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  },
};
