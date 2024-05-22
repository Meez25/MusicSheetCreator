import { Board } from "@/components/Board";

export default function Home() {
  return (
    <main className="my-10 h-full">
      <h1 className="text-4xl justify-center flex mb-10">Créateur de partition colorées</h1>
      <Board />
    </main>
  );
}
