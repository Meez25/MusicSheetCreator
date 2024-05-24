import { useEffect, useRef, useState } from "react";

import { drawLine } from "@/utils/drawLine";
import useWindowDimensions from "@/hooks/useWindowDimensions";
import { findClosestSquare } from "@/utils/findClosestSquare";
import { Note } from "@/types/types";

const drawStaff = (ctx: CanvasRenderingContext2D, spaceBetweenTwoLineInStaff: number, width: number, numberOfSection: number) => {
  const middle = numberOfSection / 2;
  for (let i = middle - 2; i <= middle + 2; i++) {
    drawLine({ ctx, start: { x: 0, y: i * spaceBetweenTwoLineInStaff }, end: { x: width, y: i * spaceBetweenTwoLineInStaff }, lineWidth: 2 });
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

  if (note.full) {
    ctx.ellipse(x, y, 20, 30, 55 * Math.PI / 180, 0, 2 * Math.PI);
    ctx.fillStyle = note.color;
    ctx.fill();
    ctx.lineWidth = 2;
    ctx.strokeStyle = "black";
    ctx.stroke();
  } else {
    ctx.ellipse(x, y, 16, 30, 55 * Math.PI / 180, 0, 2 * Math.PI);
    ctx.strokeStyle = note.color;
    ctx.lineWidth = 10;
    ctx.stroke();
    ctx.beginPath();
    ctx.ellipse(x, y, 20, 34, 55 * Math.PI / 180, 0, 2 * Math.PI);
    ctx.strokeStyle = "black";
    ctx.lineWidth = 2;
    ctx.stroke();
  }

}

export const Grid: React.FC<{ selectedNote: Note, height: number, numberOfSection: number }> = ({ selectedNote, height, numberOfSection }) => {
  const { width } = useWindowDimensions();
  const canvas = useRef<HTMLCanvasElement>(null);
  const spaceBetweenTwoLineInStaff = height / numberOfSection;
  const [noteInMemory, setNoteInMemory] = useState<{ [key: string]: Note }>({});


  useEffect(() => {

    const redrawCanvas = (ctx: CanvasRenderingContext2D) => {
      ctx.clearRect(0, 0, width, height);
      drawGrid(ctx, spaceBetweenTwoLineInStaff, width, height);
      drawStaff(ctx, spaceBetweenTwoLineInStaff, width, numberOfSection);

      // Redraw notes from memory
      Object.entries(noteInMemory).forEach(([key, note]) => {
        const [x, y] = key.split(",").map(Number);
        drawNote(ctx, x, y, note);
      });
    }

    const ctx = canvas.current?.getContext("2d");
    if (!ctx) {
      return;
    }
    redrawCanvas(ctx);

  }, [width, height, spaceBetweenTwoLineInStaff, numberOfSection, noteInMemory]);

  const handleOnClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const clickX = e.nativeEvent.offsetX;
    const clickY = e.nativeEvent.offsetY;
    const { x, y } = findClosestSquare({ clickX, clickY, squareSize: spaceBetweenTwoLineInStaff / 2 });
    const key = `${x},${y}`;
    setNoteInMemory((prev) => {
      const newMemory = { ...prev };

      if (key in newMemory) {
        delete newMemory[key];  // Remove the note
      } else {
        newMemory[key] = selectedNote;  // Add the note
        drawNote(canvas.current?.getContext("2d")!, x, y, selectedNote);
      }

      return newMemory;
    });
  }

  return (
    <canvas
      ref={canvas}
      height={height}
      width={width}
      onClick={(e) => handleOnClick(e)}
      className="border-2 border-grey my-8"
    >
    </canvas>
  )
};
