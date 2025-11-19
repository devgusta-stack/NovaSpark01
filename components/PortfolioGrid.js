export default function PortfolioGrid() {
  const projects = [
    { title: "Sistema E-commerce", image: "/portfolio/ecommerce.png" },
    { title: "Landing Page Futurista", image: "/portfolio/landing.png" },
    { title: "Plataforma Interna", image: "/portfolio/platform.png" },
  ];

  return (
    <section className="py-20 bg-gray-900 text-gray-100 text-center">
      <h2 className="text-4xl font-bold mb-12 text-cyan-400">Portfólio</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((p) => (
          <div key={p.title} className="rounded-xl overflow-hidden shadow-lg hover:shadow-cyan-400 transition">
            <img src={p.image} alt={p.title} className="w-full h-48 object-cover" />
            <h3 className="mt-4 text-xl font-bold">{p.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
