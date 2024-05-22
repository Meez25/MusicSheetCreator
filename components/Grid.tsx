
import { useState } from "react";


const Cell: React.FC<{ borderBottom?: boolean, selectColor: string }> = ({ borderBottom, selectColor }) => {
  const [clicked, setClicked] = useState<boolean>(false);
  const [assignedColor, setAssignedColor] = useState<string>("");

  const isABorderColor = (assignedColor: string) => {
    if (assignedColor === "") return false;
    return assignedColor.startsWith("border-");
  };

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
      className={`relative h-6 w-6 border box-border flex items-center justify-center ${isABorderColor(assignedColor) && clicked ? "border-4" : ""} ${clicked ? `${assignedColor} rounded-full` : ""}`}
    >
      {borderBottom && <div className="absolute box-content bg-black min-h-[2px] w-6"></div>}
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
