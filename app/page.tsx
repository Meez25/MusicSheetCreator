"use client"
import { Board } from "@/components/Board";
import { Header } from "@/components/Header";
import { RiGithubFill } from '@remixicon/react'
import Link from "next/link";
import { useState } from "react";

const GITHUB_URL = "https://github.com/Meez25/MusicSheetCreator"

export default function Home() {
  const [numberOfStaff, setNumberOfStaff] = useState(1);
  return (
    <main className="my-10 h-full">
      <Link href={GITHUB_URL} target="_blank" >
        <RiGithubFill
          className="absolute top-0 left-0 m-6"
          size={48}
        />
      </Link>
      <Header setNumberOfStaff={setNumberOfStaff} numberOfStaff={numberOfStaff} />
      <Board numberOfStaff={numberOfStaff} />
    </main>
  );
}
