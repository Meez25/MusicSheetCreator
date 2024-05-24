type FindClosestSquareProps = {
  clickX: number;
  clickY: number;
  squareSize: number;
}

export const findClosestSquare = ({ clickX, clickY, squareSize }: FindClosestSquareProps) => {
  const x = Math.floor((clickX + squareSize / 2) / squareSize) * squareSize;
  const y = Math.floor((clickY + squareSize / 2) / squareSize) * squareSize;
  return { x, y }
}
