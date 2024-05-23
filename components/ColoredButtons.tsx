type ButtonsProps = {
  fill: boolean;
  color: string;
  selectColor: (color: string) => void;
}

export const ColoredButtons: React.FC<ButtonsProps> = ({ fill, color, selectColor }) => {

  const handleOnClick = () => {
    selectColor(color)
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
