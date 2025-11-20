import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-6 bg-gray-900 text-gray-100">
      <div className="text-2xl font-bold text-cyan-400">Nova Spark</div>
      <div className="space-x-6">
        <Link href="/">Home</Link>
        <Link href="/sobre">Sobre</Link>
        <Link href="/servicos">Serviços</Link>
        <Link href="/portifolio">Portfólio</Link>
        <Link href="/contato">Contato</Link>
      </div>
    </nav>
  );
}
