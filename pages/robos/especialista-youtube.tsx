'use client';
import Layout from '@/components/Layout';
import { useState } from 'react';

export default function EspecialistaYouTube() {
  const [tema, setTema] = useState('');
  const [publico, setPublico] = useState('');

  const scriptBase = `
🎥 Especialista YouTube com IA

Objetivo: Criar uma estratégia automatizada para crescer e monetizar um canal no YouTube com o apoio da inteligência artificial.

Tema do Canal: ${tema || '[defina o tema]'}
Público-Alvo: ${publico || '[defina o público]'}

Etapas recomendadas:
1. Geração de ideias de conteúdo com alto potencial de engajamento.
2. Roteirização automatizada dos vídeos.
3. Estratégia de títulos, descrições e thumbnails.
4. Calendário de postagens ideal para o público.
5. Sugestões de nicho e estilo de gravação.

Gere um plano de crescimento e monetização com base nesses dados.
`;

  const linkGPT = `https://chat.openai.com/?model=gpt-4&prompt=${encodeURIComponent(scriptBase)}`;

  return (
    <Layout>
      <div className="max-w-3xl mx-auto py-12 px-6 bg-white shadow-xl rounded-xl">
        <h1 className="text-4xl font-bold text-[#1746a2] mb-6">🎥 Especialista YouTube com IA</h1>

        <p className="text-lg text-gray-700 mb-8">
          Gere uma estratégia completa e personalizada com inteligência artificial para crescer seu canal no YouTube e
          alcançar o público ideal com consistência e engajamento.
        </p>

        <div className="space-y-6 mb-8">
          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-2">📺 Tema do canal</label>
            <input
              type="text"
              value={tema}
              onChange={(e) => setTema(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1746a2]"
              placeholder="Ex: Vlogs sobre viagens econômicas"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-2">🎯 Público-alvo</label>
            <input
              type="text"
              value={publico}
              onChange={(e) => setPublico(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1746a2]"
              placeholder="Ex: Jovens que desejam viajar com pouco dinheiro"
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
