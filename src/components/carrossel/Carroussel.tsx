'use client'

import { useState } from "react";
import Card from "../card-carrossel/Card";

interface CardProperties {
  userImage: string;
  title: string;
  comment: string;
}

interface Props {
  cards: CardProperties[];
}

export default function Carroussel({ cards }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % cards.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  return (
    <div className="w-full relative h-full flex items-center justify-center">
      {cards.map((value, index) => {
        let classname = "";
        if (index === activeIndex) {
          classname = "card-carrossel-animated-activated";
        } else if (index === (activeIndex + 1) % cards.length) {
          classname = "card-carrossel-animated-right";
        } else if (index === (activeIndex - 1 + cards.length) % cards.length) {
          classname = "card-carrossel-animated-left";
        } else {
          classname = "card-carrossel-animated";
        }
        return (
          <Card key={index} {...value} className={classname}/>
        );
      })}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded cursor-pointer hover:bg-gray-900 transition-all"
      >
        Anterior
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded cursor-pointer hover:bg-gray-900 transition-all"
      >
        Próximo
      </button>
    </div>
  );
}