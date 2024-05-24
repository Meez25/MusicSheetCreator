"use client"
import { useState } from "react";

import { Grid } from "./Grid";
import { SelectedNote } from "./SelectedNote";
import { NotePicker } from "./NotePicker";
import { Note } from "@/types/types";

export const Board: React.FC = () => {
  const [selectedNote, setSelectedNote] = useState<Note>({ full: true, color: "black", tailwindColor: "bg-black" });

  return (
    <>
      <Grid selectedNote={selectedNote} height={500} numberOfSection={8} />
      {selectedNote && <SelectedNote note={selectedNote} />}
      <NotePicker setSelectedNote={setSelectedNote} />
    </>
  );
}
