import { Board } from "@/components/Board";
import { RiGithubFill } from '@remixicon/react'
import Link from "next/link";

const GITHUB_URL = "https://github.com/Meez25/MusicSheetCreator"

export default function Home() {
  return (
    <main className="my-10 h-full">
      <Link href={GITHUB_URL} target="_blank" >
        <RiGithubFill
          className="absolute top-0 left-0 m-6"
          size={48}
        />
      </Link>
      <h1 className="text-4xl justify-center flex mb-10">Créateur de partitions colorées</h1>
      <Board />
    </main>
  );
}
