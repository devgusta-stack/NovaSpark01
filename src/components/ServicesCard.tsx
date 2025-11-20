"use client";

export default function ServicesCard() {
  const services = [
    { title: "Desenvolvimento Web", desc: "Sites modernos e responsivos sob medida." },
    { title: "Plataformas Personalizadas", desc: "Soluções digitais inteligentes para seu negócio." },
    { title: "Landing Pages", desc: "Conversão otimizada para vendas e leads." },
    { title: "Automação e Integração", desc: "Ferramentas para agilizar processos e integrar sistemas." },
  ];

  return (
    <section className="py-20 bg-gray-800 text-gray-100 text-center">
      <h2 className="text-4xl font-bold mb-12 text-cyan-400">Nossos Serviços</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {services.map((s) => (
          <div key={s.title} className="bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-cyan-400 transition">
            <h3 className="text-2xl font-bold mb-4">{s.title}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
