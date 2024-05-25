"use client"
import { useState } from "react";

import { Grid } from "./Grid";
import { SelectedNote } from "./SelectedNote";
import { NotePicker } from "./NotePicker";
import { Note } from "@/types/types";

export const Board: React.FC<{ numberOfStaff: number }> = ({ numberOfStaff }) => {
  const [selectedNote, setSelectedNote] = useState<Note>({ full: true, color: "black", tailwindColor: "bg-black" });

  return (
    <section>
      {Array(numberOfStaff).fill("").map((_, i) => (
        <Grid key={i} selectedNote={selectedNote} height={400} numberOfSection={8} />
      ))}
      <div className="sticky bottom-0 inset-x-0 max-w-max mx-auto bg-white p-5 border border-black">
        {selectedNote && <SelectedNote note={selectedNote} />}
        <NotePicker setSelectedNote={setSelectedNote} />
      </div>
    </section>
  );
}
