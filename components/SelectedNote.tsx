import { Note } from "@/types/types"

export const SelectedNote = ({ note }: { note: Note }) => {

  const renderedColor = note.full ? <div className={`h-10 w-10 border ${note.tailwindColor}`}></div> : <div className={`h-10 w-10 border-4 ${note.tailwindColor}`}></div>

  return (
    <div className="flex justify-center my-5 items-center gap-4">
      <p>Couleur sélectionnée:</p>
      {renderedColor}
    </div>
  )
}
