"use client"
export const drawLine = ({ ctx, start, end, color = "black" }:
  { ctx: CanvasRenderingContext2D, start: { x: number, y: number }, end: { x: number, y: number }, color?: string }) => {
  ctx.beginPath();
  ctx.moveTo(start.x, start.y);
  ctx.lineTo(end.x, end.y);
  ctx.strokeStyle = color;
  ctx.stroke();
}
