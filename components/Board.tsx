"use client"
import { useState } from "react";

import { Buttons } from "./Buttons";
import { Grid } from "./Grid";

export const Board: React.FC = () => {
  const [selectedColor, setSelectedColor] = useState<string>("");

  const bgColors = ["bg-blue-500", "bg-red-500", "bg-yellow-500", "bg-green-500", "bg-orange-500", "bg-purple-500", "bg-pink-500"];
  const borderColors = ["border-blue-500", "border-red-500", "border-yellow-500", "border-green-500", "border-orange-500", "border-purple-500", "border-pink-500"];

  return (
    <>
      <Grid selectedColor={selectedColor} />

      {selectedColor && (
        <div className="flex justify-center my-5 items-center gap-4">
          <p>Couleur sélectionnée:</p>
          <div className={`h-10 w-10 ${selectedColor} border-4`}></div>
        </div>
      )}

      <h2 className="text-2xl text-center my-5">Choisissez une couleur</h2>

      <div className="flex flex-row justify-center my-5 gap-1">
        {bgColors.map((color, i) => {
          return (
            <Buttons key={i} fill color={color} selectColor={setSelectedColor} />
          )
        })}
      </div>

      <div className="flex flex-row justify-center gap-1">
        {borderColors.map((color, i) => (
          <Buttons key={i} color={color} fill={false} selectColor={setSelectedColor} />
        ))}
      </div>
    </>
  );
}
