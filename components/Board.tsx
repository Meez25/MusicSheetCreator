"use client"
import { useState } from "react";

import { Grid } from "./Grid";
import { SelectedNote } from "./SelectedNote";
import { NotePicker } from "./NotePicker";
import { Note } from "@/types/types";

export const Board: React.FC = () => {
  const [selectedNote, setSelectedNote] = useState<Note>({ full: true, color: "black" });

  return (
    <>
      <Grid selectedNote={selectedNote} height={600} numberOfSection={10} />
      {selectedNote && <SelectedNote note={selectedNote} />}
      <NotePicker setSelectedNote={setSelectedNote} />
    </>
  );
}
