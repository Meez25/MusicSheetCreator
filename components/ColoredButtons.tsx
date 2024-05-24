import { Note } from "@/types/types";

type ButtonsProps = {
  fill: boolean;
  color: string;
  selectNote: (note: Note) => void;
}

const colorMap = {
  "blue-300": "#93c5fd",
  "red-500": "#f43f5e",
  "yellow-300": "#fde047",
  "green-600": "#16a34a",
  "orange-500": "#f97316",
  "purple-400": "#c084fc",
  "pink-300": "#f9a8d4",
  "black": "#000000"
}

const findCorrectColor = (color: string) => {
  for (const [key, value] of Object.entries(colorMap)) {
    if (color.includes(key)) {
      return value;
    }
  }
  return "#000000";
}


export const ColoredButtons: React.FC<ButtonsProps> = ({ fill, color, selectNote }) => {

  const handleOnClick = () => {
    selectNote({ full: fill, color: findCorrectColor(color), tailwindColor: color });
  }

  if (fill) {
    return (
      <div
        onClick={handleOnClick}
        className={`border-black border h-10 w-10 ${color}`}
      ></div>
    )
  }
  return (
    <div
      onClick={handleOnClick}
      className={`${color} border-4 h-10 w-10`}
    ></div>
  )
}
