const square = (num) => num ** 2;
const sumOfSquares  = (n, d) => square(n) + square(d);
const squareSumOfSquares = (n, d) => sumOfSquares(n, d) ** 2;

export default square;
export default sumOfSquares;
export default squareSumOfSquares;

