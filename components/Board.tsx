"use client"
import { useState } from "react";

import { Grid } from "./Grid";
import { SelectedColor } from "./SelectedColor";
import { ColorPicker } from "./ColorPicker";

export const Board: React.FC = () => {
  const [selectedColor, setSelectedColor] = useState<string>("");

  return (
    <>
      <Grid selectedColor={selectedColor} />

      {selectedColor && <SelectedColor color={selectedColor} />}

      <ColorPicker setSelectedColor={setSelectedColor} />
    </>
  );
}
