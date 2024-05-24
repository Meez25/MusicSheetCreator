export const drawLine = ({ ctx, start, end, color = "black", lineWidth = 1 }:
  { ctx: CanvasRenderingContext2D, start: { x: number, y: number }, end: { x: number, y: number }, color?: string, lineWidth?: number }) => {
  ctx.lineWidth = lineWidth;
  ctx.beginPath();
  ctx.moveTo(start.x, start.y);
  ctx.lineTo(end.x, end.y);
  ctx.strokeStyle = color;
  ctx.stroke();
}
