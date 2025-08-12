import React from "react";

// Bora Viajar - single-file React component
// Tailwind CSS utility classes assumed to be available in the host project
// Replace image URLs with your own assets as needed

export default function BoraViajarApp() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Header / Navbar */}
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-emerald-400 to-sky-500 flex items-center justify-center text-white font-bold">BV</div>
            <div>
              <h1 className="text-lg font-semibold">Bora Viajar</h1>
              <p className="text-sm text-gray-500">Descubra o Chile e muito mais</p>
            </div>
          </div>

          <nav className="hidden md:flex gap-6 items-center text-sm">
            <a href="#experiencias" className="hover:text-sky-600">Experiências</a>
            <a href="#expedicoes" className="hover:text-sky-600">Expedições</a>
            <a href="#sobre" className="hover:text-sky-600">Sobre nós</a>
            <a href="#contato" className="px-4 py-2 bg-sky-600 text-white rounded-md shadow-sm hover:opacity-95">Contato</a>
          </nav>

          <button className="md:hidden p-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="relative">
        <div className="h-96 bg-[url('https://images.unsplash.com/photo-1526481280698-2e3d0e6d6f1d?auto=format&fit=crop&w=1600&q=60')] bg-cover bg-center flex items-center">
          <div className="max-w-7xl mx-auto px-6">
            <div className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-extrabold">Bora Viajar — viva o Chile como nunca</h2>
              <p className="mt-3 text-gray-700">Passeios curados, guias locais e experiências autênticas — de Santiago ao Atacama, passando pelos vinhedos.</p>
              <div className="mt-5 flex gap-3">
                <a href="#experiencias" className="px-4 py-2 bg-emerald-500 text-white rounded-md shadow">Ver experiências</a>
                <a href="#contato" className="px-4 py-2 border border-gray-200 rounded-md">Fale conosco</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experiences Grid */}
      <main className="max-w-7xl mx-auto px-6 -mt-12">
        <section id="experiencias" className="bg-white rounded-2xl p-6 shadow">
          <h3 className="text-2xl font-bold">Nossas experiências</h3>
          <p className="text-gray-600 mt-2">Tours pensados para você: cultura, natureza e vinhos.</p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <article className="rounded-lg overflow-hidden shadow-sm bg-gray-50">
              <img src="https://images.unsplash.com/photo-1558980664-10a6d6a6a8d1?auto=format&fit=crop&w=800&q=60" alt="Santiago" className="h-44 w-full object-cover" />
              <div className="p-4">
                <h4 className="font-semibold">Santiago - City tour</h4>
                <p className="text-sm text-gray-600 mt-1">Conheça os pontos imperdíveis da capital, com degustação e guia local.</p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-sm font-bold">R$ 290</span>
                  <a href="#" className="text-sky-600 text-sm">Reservar</a>
                </div>
              </div>
            </article>

            <article className="rounded-lg overflow-hidden shadow-sm bg-gray-50">
              <img src="https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=60" alt="Atacama" className="h-44 w-full object-cover" />
              <div className="p-4">
                <h4 className="font-semibold">Atacama - Deserto</h4>
                <p className="text-sm text-gray-600 mt-1">Explore formações espetaculares e lagoas altiplânicas.</p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-sm font-bold">R$ 1.150</span>
                  <a href="#" className="text-sky-600 text-sm">Reservar</a>
                </div>
              </div>
            </article>

            <article className="rounded-lg overflow-hidden shadow-sm bg-gray-50">
              <img src="https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=60" alt="Salar" className="h-44 w-full object-cover" />
              <div className="p-4">
                <h4 className="font-semibold">Salar do Uyuni</h4>
                <p className="text-sm text-gray-600 mt-1">Uma jornada surreal pelo maior salar do mundo.</p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-sm font-bold">R$ 2.350</span>
                  <a href="#" className="text-sky-600 text-sm">Reservar</a>
                </div>
              </div>
            </article>

            <article className="rounded-lg overflow-hidden shadow-sm bg-gray-50">
              <img src="https://images.unsplash.com/photo-1473654729523-203e25dfda10?auto=format&fit=crop&w=800&q=60" alt="Vinicola" className="h-44 w-full object-cover" />
              <div className="p-4">
                <h4 className="font-semibold">Vinícolas - Valle de Colchagua</h4>
                <p className="text-sm text-gray-600 mt-1">Degustação e visita a tradições vinícolas centenárias.</p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-sm font-bold">R$ 430</span>
                  <a href="#" className="text-sky-600 text-sm">Reservar</a>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* Testimonials + Agencies */}
        <section className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow">
            <h4 className="text-xl font-bold">Depoimentos</h4>
            <div className="mt-4 space-y-4">
              <blockquote className="bg-gray-50 p-4 rounded">
                <p className="italic">"Guia excelente, passeio impecável — uma experiência para repetir."</p>
                <footer className="mt-2 text-sm text-gray-600">— Ana Souza</footer>
              </blockquote>

              <blockquote className="bg-gray-50 p-4 rounded">
                <p className="italic">"Organização e cuidado do início ao fim. Recomendo 100%."</p>
                <footer className="mt-2 text-sm text-gray-600">— Felipe Martins</footer>
              </blockquote>
            </div>
          </div>

          <aside className="bg-white p-6 rounded-2xl shadow">
            <h5 className="font-semibold">Nossas agências</h5>
            <p className="text-sm text-gray-600 mt-2">Providencia — Santiago</p>
            <p className="text-sm text-gray-600">San Pedro de Atacama — Atacama</p>
            <div className="mt-4">
              <a href="#contato" className="block px-4 py-2 bg-sky-600 text-white rounded-md text-center">Fale com a agência</a>
            </div>
          </aside>
        </section>

        {/* About and Contact */}
        <section id="sobre" className="mt-6 bg-white rounded-2xl p-6 shadow">
          <h4 className="text-xl font-bold">Sobre a Bora Viajar</h4>
          <p className="text-gray-600 mt-2">Somos uma agência apaixonada por viagens. Criamos roteiros locais com guias experientes, foco em segurança e experiências memoráveis.</p>

          <div id="contato" className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <form className="space-y-3">
              <input placeholder="Nome" className="w-full p-3 border rounded" />
              <input placeholder="E-mail" className="w-full p-3 border rounded" />
              <input placeholder="Telefone / WhatsApp" className="w-full p-3 border rounded" />
              <textarea placeholder="Mensagem" className="w-full p-3 border rounded h-28" />
              <button type="submit" className="px-4 py-2 bg-emerald-500 text-white rounded">Enviar</button>
            </form>

            <div>
              <h6 className="font-semibold">Endereço</h6>
              <p className="text-sm text-gray-600 mt-2">Providencia, Santiago — Chile</p>
              <p className="text-sm text-gray-600 mt-1">Horário: seg–sex 09:00–18:00</p>

              <h6 className="font-semibold mt-4">Contato</h6>
              <p className="text-sm text-gray-600">+56 9 1234 5678</p>
              <p className="text-sm text-gray-600">contato@boraviajar.com</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-10 bg-white border-t py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} Bora Viajar. Todos os direitos reservados.</p>
          <div className="flex items-center gap-3">
            <a href="#" className="text-sm text-sky-600">Política de Privacidade</a>
            <a href="#" className="text-sm text-sky-600">Termos</a>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp button */}
      <a href="https://wa.me/56912345678" target="_blank" rel="noreferrer" className="fixed right-6 bottom-6 bg-emerald-500 p-4 rounded-full shadow-lg text-white"> 
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </a>
    </div>
  );
}
