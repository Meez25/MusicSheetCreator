import { useEffect, useRef } from "react";

import { drawLine } from "@/utils/drawLine";
import useWindowDimensions from "@/hooks/useWindowDimensions";
import { findClosestSquare } from "@/utils/findClosestSquare";
import { Note } from "@/types/types";

const drawStaff = (ctx: CanvasRenderingContext2D, spaceBetweenTwoLineInStaff: number, width: number, numberOfSection: number) => {
  const middle = numberOfSection / 2;
  for (let i = middle - 2; i <= middle + 2; i++) {
    drawLine({ ctx, start: { x: 0, y: i * spaceBetweenTwoLineInStaff }, end: { x: width, y: i * spaceBetweenTwoLineInStaff } });
  }
}

const drawGrid = (ctx: CanvasRenderingContext2D, spaceBetweenTwoLineInStaff: number, width: number, height: number) => {
  const space = spaceBetweenTwoLineInStaff / 2;
  for (let i = space / 2; i < width; i += space) {
    drawLine({ ctx, start: { x: i, y: 0 }, end: { x: i, y: height }, color: "lightgray" });
  }
  for (let i = space / 2; i < height; i += space) {
    drawLine({ ctx, start: { x: 0, y: i }, end: { x: width, y: i }, color: "lightgray" });
  }
}

const drawNote = (ctx: CanvasRenderingContext2D, x: number, y: number, note: Note) => {
  ctx.beginPath();
  ctx.arc(x, y, 20, 0, 2 * Math.PI);
  if (note.full) {
    ctx.fillStyle = note.color;
  } else {
    ctx.strokeStyle = note.color;
    ctx.lineWidth = 4;
  }
  note.full ? ctx.fill() : ctx.stroke();
}

export const Grid: React.FC<{ selectedNote: Note, height: number, numberOfSection: number }> = ({ selectedNote, height, numberOfSection }) => {
  const { width } = useWindowDimensions();
  const canvas = useRef<HTMLCanvasElement>(null);
  const spaceBetweenTwoLineInStaff = height / numberOfSection;


  useEffect(() => {
    const ctx = canvas.current?.getContext("2d");
    if (!ctx) {
      return;
    }
    drawGrid(ctx, spaceBetweenTwoLineInStaff, width, height);
    drawStaff(ctx, spaceBetweenTwoLineInStaff, width, numberOfSection);

  }, [width, height, spaceBetweenTwoLineInStaff, numberOfSection]);

  const handleOnClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const clickX = e.nativeEvent.offsetX;
    const clickY = e.nativeEvent.offsetY;
    const { x, y } = findClosestSquare({ clickX, clickY, squareSize: spaceBetweenTwoLineInStaff / 2 });
    drawNote(canvas.current?.getContext("2d")!, x, y, selectedNote);
  }

  return (
    <canvas
      ref={canvas}
      height={height}
      width={width}
      onClick={(e) => handleOnClick(e)}
    >
    </canvas>
  )
};
