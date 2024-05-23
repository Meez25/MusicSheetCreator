"use client"
import { useState } from "react";

import { Buttons } from "./Buttons";
import { Grid } from "./Grid";

export const Board: React.FC = () => {
  const [selectedColor, setSelectedColor] = useState<string>("");

  const bgColors = ["bg-blue-300", "bg-red-500", "bg-yellow-300", "bg-green-600", "bg-orange-500", "bg-purple-400", "bg-pink-300", "bg-black"];
  const borderColors = ["border-blue-300", "border-red-500", "border-yellow-300", "border-green-600", "border-orange-500", "border-purple-400", "border-pink-300", "border-black"];

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
