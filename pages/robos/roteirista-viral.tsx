'use client';
import Layout from '@/components/Layout';
import { useState } from 'react';

export default function RoteiristaViral() {
  const [tema, setTema] = useState('');
  const [plataforma, setPlataforma] = useState('');

  const prompt = `
🎬 Roteirista de Vídeos Curtos (Reels, TikTok, Shorts)

Tema: ${tema || '[defina o tema]'}
Plataforma: ${plataforma || '[defina a plataforma]'}

Estrutura recomendada:
📌 Título impactante
🎯 Gancho envolvente (3 segundos)
📖 Desenvolvimento com storytelling criativo
🎬 Chamada para ação (ex: comentar, curtir, seguir)

Linguagem: Jovem, criativa, divertida e espontânea.

Gere um roteiro completo com essa estrutura.
`;

  const linkGPT = `https://chat.openai.com/?model=gpt-4&prompt=${encodeURIComponent(prompt)}`;

  return (
    <Layout>
      <div className="max-w-3xl mx-auto py-12 px-6 bg-white shadow-xl rounded-xl">
        <h1 className="text-4xl font-bold text-[#1746a2] mb-6">🎬 Roteirista de Vídeos Virais</h1>

        <p className="text-lg text-gray-700 mb-8">
          Gere roteiros prontos e criativos para vídeos curtos como Reels, TikToks ou Shorts.
          Use estruturas virais com gancho, storytelling e CTA envolvente.
        </p>

        <div className="space-y-6 mb-8">
          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-2">📝 Tema do vídeo</label>
            <input
              type="text"
              value={tema}
              onChange={(e) => setTema(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1746a2]"
              placeholder="Ex: Como ganhar dinheiro na internet"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-2">🎯 Plataforma</label>
            <input
              type="text"
              value={plataforma}
              onChange={(e) => setPlataforma(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1746a2]"
              placeholder="Ex: Instagram, TikTok ou YouTube Shorts"
            />
          </div>
        </div>

        <a
          href={linkGPT}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block w-full text-center bg-[#f4c95d] hover:bg-yellow-400 text-[#1a1a1a] font-bold text-lg px-6 py-3 rounded-lg transition duration-300"
        >
          🔗 Acessar no ChatGPT com Script Gerado
        </a>
      </div>
    </Layout>
  );
}
