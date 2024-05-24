export const Header: React.FC<{ numberOfStaff: number, setNumberOfStaff: (arg0: number) => void }> = ({ numberOfStaff, setNumberOfStaff }) => {
  return (
    <header className="flex flex-col justify-center text-center items-center gap-5">
      <h1 className="text-4xl justify-center flex">Créateur de partitions colorées</h1>
      <div className="flex flex-row gap-5 items-center">
        <h2 className="text-2xl justify-center">Nombre de portées : {numberOfStaff}</h2>
        <button onClick={() => numberOfStaff > 1 ? setNumberOfStaff(numberOfStaff - 1) : null} className="bg-blue-300 p-2 rounded-lg">-</button>
        <button onClick={() => setNumberOfStaff(numberOfStaff + 1)} className="bg-blue-300 p-2 rounded-lg">+</button>
      </div>
    </header>
  )
}
