import { useState } from "react";

// const ColorList = [
//   "fill-green-600",
//   "fill-red-500",
//   "fill-blue-300",
//   "fill-yellow-300",
//   "fill-pink-300",
//   "fill-purple-400",
//   "fill-orange-500",
//   "stroke-green-600",
//   "stroke-red-500",
//   "stroke-blue-300",
//   "stroke-yellow-300",
//   "stroke-pink-300",
//   "stroke-purple-400",
//   "stroke-orange-500",
//   "stroke-2",
// ]

const Note: React.FC<{ color: string }> = ({ color }) => {
  let formattedColor = color;
  if (color.startsWith("border-")) {
    formattedColor = color.replace("border-", "fill-");
    return (
      <svg className={`${formattedColor} z-10 flex-none`} width="48" height="48" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="24" cy="24" rx="23" ry="19" className={formattedColor} stroke="black" />
        <circle cx="24" cy="24" r="15" fill="white" />
      </svg>
    )
  }
  else if (color.startsWith("bg-")) {
    formattedColor = color.replace("bg-", "fill-");
    return (
      <svg className={`${formattedColor} z-10 flex-none`} width="48" height="48" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="24" cy="24" rx="23" ry="20" stroke="black" />
      </svg>
    )
  }
}

const Cell: React.FC<{ borderBottom?: boolean, selectColor: string }> = ({ borderBottom, selectColor }) => {
  const [clicked, setClicked] = useState<boolean>(false);
  const [assignedColor, setAssignedColor] = useState<string>("");

  const handleOnClick = () => {
    if (!selectColor) {
      return;
    }
    setClicked(!clicked);
    setAssignedColor(selectColor);
  };

  return (
    <div
      onClick={handleOnClick}
      className="relative h-6 w-6 border box-border flex items-center justify-center"
    >
      {borderBottom && <div className="absolute box-content bg-black min-h-[2px] w-6"></div>}
      {clicked &&
        <Note color={assignedColor} />
      }

    </div>
  );
};

export const Grid: React.FC<{ selectedColor: string }> = ({ selectedColor }) => {
  const notes = new Array(1500).fill(0);
  return (
    <div className="flex justify-center">
      <div className="grid grid-rows-15 grid-flow-col">
        {notes.map((_, i) => {
          if (i % 15 === 3 || i % 15 === 5 || i % 15 === 7 || i % 15 === 9 || i % 15 === 11) {
            return (
              <Cell key={i} borderBottom={true} selectColor={selectedColor} />
            );
          }
          return (
            <Cell key={i} borderBottom={false} selectColor={selectedColor} />
          );
        })}
      </div>
    </div>
  );
};
