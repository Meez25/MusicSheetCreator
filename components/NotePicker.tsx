import { Note } from '@/types/types';
import { ColoredButtons } from './ColoredButtons'

type NotePickerProps = {
  setSelectedNote: (note: Note) => void
}

const bgColors = ["bg-blue-300", "bg-red-500", "bg-yellow-300", "bg-green-600", "bg-orange-500", "bg-purple-400", "bg-pink-300", "bg-black"];
const borderColors = ["border-blue-300", "border-red-500", "border-yellow-300", "border-green-600", "border-orange-500", "border-purple-400", "border-pink-300", "border-black"];

export const NotePicker: React.FC<NotePickerProps> = ({ setSelectedNote }) => {

  return (
    <>
      <h2 className="text-2xl text-center my-5">Choisissez une couleur</h2>
      <div className="flex flex-row justify-center my-5 gap-1">
        {bgColors.map((color, i) => {
          return (
            <ColoredButtons key={i} fill color={color} selectNote={setSelectedNote} />
          )
        })}
      </div>

      <div className="flex flex-row justify-center gap-1">
        {borderColors.map((color, i) => (
          <ColoredButtons key={i} color={color} fill={false} selectNote={setSelectedNote} />
        ))}
      </div>
    </>
  )
}
