"use client";

import { useState } from "react";

export default function TestimonialSlider() {
  const testimonials = [
    { name: "Mariana R.", text: "A Nova Spark transformou nosso site! Futurista e intuitivo." },
    { name: "Lucas P.", text: "Atendimento incrível e soluções digitais inovadoras." },
    { name: "Ana S.", text: "Plataforma personalizada perfeita para nossa empresa." },
  ];

  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-20 bg-gray-800 text-gray-100 text-center">
      <h2 className="text-4xl font-bold mb-12 text-cyan-400">Depoimentos</h2>
      <div className="max-w-2xl mx-auto p-6 bg-gray-900 rounded-xl shadow-lg">
        <p className="text-lg mb-4">"{testimonials[index].text}"</p>
        <h4 className="font-bold">{testimonials[index].name}</h4>
        <div className="mt-6 flex justify-center space-x-4">
          <button onClick={prev} className="px-4 py-2 bg-cyan-400 rounded hover:bg-cyan-500">Anterior</button>
          <button onClick={next} className="px-4 py-2 bg-cyan-400 rounded hover:bg-cyan-500">Próximo</button>
        </div>
      </div>
    </section>
  );
}
