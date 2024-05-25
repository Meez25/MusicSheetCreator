"use client"
import { Board } from "@/components/Board";
import { Header } from "@/components/Header";
import { useState } from "react";


export default function Home() {
  const [numberOfStaff, setNumberOfStaff] = useState(1);
  return (
    <main className="mt-10 overflow-x-hidden">
      <Header setNumberOfStaff={setNumberOfStaff} numberOfStaff={numberOfStaff} />
      <Board numberOfStaff={numberOfStaff} />
    </main>
  );
}
