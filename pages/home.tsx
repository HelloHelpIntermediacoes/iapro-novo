import React from 'react';
import Image from 'next/image';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#fdfcf9] text-[#1a1a1a]">
      {/* Topo com logo arredondado e nome estilizado */}
      <header className="flex justify-between items-center px-6 py-4 bg-white shadow-md shadow-[#e2e2e2]">
        <div className="flex items-center gap-3">
          {/* Logotipo arredondado com borda dourada */}
          <div className="w-10 h-10 rounded-full overflow-hidden border-4 border-[#f4c95d] shadow-md flex items-center justify-center bg-white">
            <Image src="/logo.png" alt="Logo" width={32} height={32} />
          </div>
          {/* Nome estilizado */}
          <span className="text-2xl font-black text-[#1746a2] drop-shadow-sm tracking-tight">
            IA <span className="text-[#f4c95d]">Pro</span>
          </span>
        </div>
        <a
          href="/login"
          className="text-sm font-semibold text-[#1746a2] hover:underline hover:text-blue-700 transition"
        >
          Entrar / Login
        </a>
      </header>

      {/* Corpo principal centralizado */}
      <main className="flex-1 flex flex-col lg:flex-row items-center justify-center px-6 py-12 gap-12">
        {/* Lado esquerdo: imagem + texto centralizado */}
        <div className="flex-1 flex flex-col items-center text-center">
          <div className="relative w-[200px] h-[200px] mb-6 rounded-full bg-gradient-to-br from-yellow-200 via-yellow-300 to-yellow-500 shadow-[0_0_20px_rgba(244,201,93,0.6)]">
            <div className="absolute inset-1 bg-white rounded-full flex items-center justify-center shadow-inner">
              <Image
                src="/imagens/robo1.png"
                alt="Robô IA"
                width={180}
                height={180}
                className="rounded-full"
              />
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-[#1746a2] mb-4 drop-shadow-md">
            Automatize sua Renda com Robôs IA
          </h1>
          <p className="max-w-md text-base text-[#444] mb-6">
            Transforme ideias em resultados reais com ferramentas inteligentes,
            acessíveis e prontas para gerar renda e produtividade.
          </p>
          <a
            href="/robos"
            className="bg-[#f4c95d] text-[#1a1a1a] font-bold py-3 px-6 rounded-full shadow-lg hover:bg-[#eec845] hover:shadow-xl transition-all duration-300"
          >
            COMEÇAR AGORA
          </a>
        </div>

        {/* Lado direito: vídeo embutido */}
        <div className="flex-1 w-full max-w-xl">
          <div className="aspect-w-16 aspect-h-9 w-full">
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Vídeo de Apresentação"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-[315px] rounded-xl shadow-lg border border-gray-200"
            ></iframe>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
