"use client";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Contato() {
  return (
    <>
      <Navbar />

      <section className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-gray-100 p-6">
        <h1 className="text-4xl font-bold text-cyan-400 mb-6">Entre em contato</h1>

        <p className="mb-6 text-center">
          Clique no botão abaixo para enviar mensagem pelo WhatsApp.
        </p>

        <a
          href="https://wa.me/message/YXD7L75SJYTKH1"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-cyan-400 text-gray-900 font-semibold rounded-lg hover:bg-cyan-500 transition"
        >
          Enviar mensagem no WhatsApp
        </a>
      </section>

      <Footer />
    </>
  );
}

