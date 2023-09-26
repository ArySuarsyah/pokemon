import Header from "@/components/Header";
import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";

export default function Index() {
  const [pokemonData, setPokemonData] = useState({});

  const getPokemon = useCallback(async () => {
    try {
      const response = await axios.get(
        "https://www.eginugraha.com/classification.json",
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setPokemonData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, []);

  useEffect(() => {
    getPokemon();
  }, [getPokemon]);

  console.log(pokemonData);
  return (
    <div>
      <Header />
      <div className="flex flex-row gap-5 p-10">
        <div className="flex flex-col justify-center items-center gap-2 p-5 shadow-[0_2px_5px_1px_rgba(0,0,0,0.3)] rounded-lg">
          <span className="self-start">#1</span>
          <Image width={150} height={150} src="/frame 1.png" alt="" />
          <span>Ivysaur</span>
          <div className="flex flex-row gap-2">
            <span>Grass</span>
            <span>Grass</span>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-2 p-5 shadow-[0_2px_5px_1px_rgba(0,0,0,0.3)] rounded-lg">
          <Image width={150} height={150} src="/frame 1.png" alt="" />
          <span>Ivysaur</span>
          <div>
            <span>Grass</span>
            <span>Grass</span>
          </div>
        </div>
      </div>
    </div>
  );
}
