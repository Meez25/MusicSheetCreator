import { useEffect, useRef, useState } from "react";

import { drawLine } from "@/utils/drawLine";
import useWindowDimensions from "@/hooks/useWindowDimensions";

// const Note: React.FC<{ color: string }> = ({ color }) => {
//   let formattedColor = color;
//   if (color.startsWith("border-")) {
//     formattedColor = color.replace("border-", "fill-");
//     return (
//       <svg className={`${formattedColor} z-10 flex-none`} width="48" height="48" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
//         <ellipse cx="24" cy="24" rx="23" ry="19" className={formattedColor} stroke="black" />
//         <circle cx="24" cy="24" r="15" fill="white" />
//       </svg>
//     )
//   }
//   else if (color.startsWith("bg-")) {
//     formattedColor = color.replace("bg-", "fill-");
//     return (
//       <svg className={`${formattedColor} z-10 flex-none`} width="48" height="48" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
//         <ellipse cx="24" cy="24" rx="23" ry="20" stroke="black" />
//       </svg>
//     )
//   }
// }
//
// const Cell: React.FC<{ borderBottom?: boolean, selectColor: string }> = ({ borderBottom, selectColor }) => {
//   const [clicked, setClicked] = useState<boolean>(false);
//   const [assignedColor, setAssignedColor] = useState<string>("");
//
//   const handleOnClick = () => {
//     if (!selectColor) {
//       return;
//     }
//     setClicked(!clicked);
//     setAssignedColor(selectColor);
//   };
//
//   return (
//     <div
//       onClick={handleOnClick}
//       className="relative h-6 w-6 border box-border flex items-center justify-center"
//     >
//       {borderBottom && <div className="absolute box-content bg-black min-h-[2px] w-6"></div>}
//       {clicked &&
//         <Note color={assignedColor} />
//       }
//
//     </div>
//   );
// };


export const Grid: React.FC<{ selectedColor: string, height: number }> = ({ height }) => {
  const { width } = useWindowDimensions();
  const canvas = useRef<HTMLCanvasElement>(null);

  const drawStaff = (ctx: CanvasRenderingContext2D, height: number, width: number) => {
    const space = height / 10
    drawLine({ ctx, start: { x: 0, y: 3 * space }, end: { x: width, y: 3 * space } });
    drawLine({ ctx, start: { x: 0, y: 4 * space }, end: { x: width, y: 4 * space } });
    drawLine({ ctx, start: { x: 0, y: 5 * space }, end: { x: width, y: 5 * space } });
    drawLine({ ctx, start: { x: 0, y: 6 * space }, end: { x: width, y: 6 * space } });
    drawLine({ ctx, start: { x: 0, y: 7 * space }, end: { x: width, y: 7 * space } });
  }

  const drawGrid = (ctx: CanvasRenderingContext2D, height: number, width: number) => {
    const space = height / 20
    for (let i = space / 2; i < width; i += space) {
      drawLine({ ctx, start: { x: i, y: 0 }, end: { x: i, y: height }, color: "lightgray" });
    }
    for (let i = space / 2; i < height; i += space) {
      drawLine({ ctx, start: { x: 0, y: i }, end: { x: width, y: i }, color: "lightgray" });
    }
  }

  useEffect(() => {
    const ctx = canvas.current?.getContext("2d");
    if (!ctx) {
      return;
    }
    drawGrid(ctx, height, width);
    drawStaff(ctx, height, width);
  }, [width, height]);

  const handleOnClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const x = e.nativeEvent.offsetX;
    const y = e.nativeEvent.offsetY;
    console.log(x, y);
    canvas.current?.getContext("2d")?.beginPath();
    canvas.current?.getContext("2d")?.arc(x, y, 10, 0, 2 * Math.PI);
    canvas.current?.getContext("2d")?.stroke()
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
