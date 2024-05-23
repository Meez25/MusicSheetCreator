export const SelectedColor = ({ color }: { color: string }) => {
  return (
    <div className="flex justify-center my-5 items-center gap-4">
      <p>Couleur sélectionnée:</p>
      <div className={`h-10 w-10 border-4 ${color}`}></div>
    </div>
  )
}
