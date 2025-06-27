'use client';
import Layout from '@/components/Layout';
import Image from 'next/image';
import { useState } from 'react';

export default function Bonus() {
  const [tema, setTema] = useState('');

  const gerarLinkGPT = () => {
    const prompt = `Crie um roteiro de 3 cenas para Reels sobre ${tema}, com humor leve e CTA no final.`;
    return `https://chat.openai.com/?model=gpt-4&prompt=${encodeURIComponent(prompt)}`;
  };

  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-[#1746a2] mb-4 text-center">
          🎁 Área de Bônus Exclusivos
        </h1>
        <p className="text-center text-gray-600 mb-10">
          Conteúdos especiais para turbinar sua jornada com nossos robôs.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Bônus 1 - PDF */}
          <div className="bg-white rounded-2xl p-6 border border-yellow-400 shadow-md hover:shadow-xl transition">
            <Image
              src="/imagens/pdf-bonus.png"
              alt="Guia de Stories"
              width={400}
              height={250}
              className="rounded-xl mb-4 w-full object-cover"
            />
            <h3 className="text-lg font-bold text-[#1746a2] mb-2">📘 Guia de Roteiros para Stories</h3>
            <p className="text-sm text-gray-600 mb-4">
              Sequências prontas com storytelling e chamadas para ação.
            </p>
            <a
              href="/downloads/guia-stories.pdf"
              target="_blank"
              className="bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-semibold hover:bg-yellow-500 transition w-full text-center block"
            >
              📥 Baixar PDF
            </a>
          </div>

          {/* Bônus 2 - Vídeo */}
          <div className="bg-white rounded-2xl p-6 border border-yellow-400 shadow-md hover:shadow-xl transition">
            <Image
              src="/imagens/bonus-video.png"
              alt="Mini-aula CTA"
              width={400}
              height={250}
              className="rounded-xl mb-4 w-full object-cover"
            />
            <h3 className="text-lg font-bold text-[#1746a2] mb-2">🎬 Mini-aula: CTAs Matadores</h3>
            <p className="text-sm text-gray-600 mb-4">
              Aprenda em poucos minutos como criar CTAs que realmente funcionam.
            </p>
            <a
              href="https://www.youtube.com/watch?v=SEU_LINK"
              target="_blank"
              className="bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-semibold hover:bg-yellow-500 transition w-full text-center block"
            >
              ▶️ Assistir Agora
            </a>
          </div>

          {/* Bônus 3 - Prompt IA com campo de tema */}
          <div className="bg-white rounded-2xl p-6 border border-yellow-400 shadow-md hover:shadow-xl transition">
            <Image
              src="/imagens/prompt-robo.png"
              alt="Prompt IA Pro"
              width={400}
              height={250}
              className="rounded-xl mb-4 w-full object-cover"
            />
            <h3 className="text-lg font-bold text-[#1746a2] mb-2 flex items-center gap-2">
              🤖 Prompt para Reels Virais
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Gere Reels criativos com esse comando prático para IA Pro.
            </p>

            <input
              type="text"
              placeholder="Digite o tema do Reels (ex: produtividade)"
              value={tema}
              onChange={(e) => setTema(e.target.value)}
              className="w-full px-4 py-2 rounded-xl border border-gray-300 mb-4 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm"
            />

            <a
              href={tema ? gerarLinkGPT() : '#'}
              target="_blank"
              rel="noopener noreferrer"
              className={`${
                tema ? 'bg-yellow-400 hover:bg-yellow-500' : 'bg-gray-300 cursor-not-allowed'
              } text-black px-4 py-2 rounded-full text-sm font-semibold transition w-full text-center block`}
            >
              📋 Gerar no GPT com meu Tema
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}
