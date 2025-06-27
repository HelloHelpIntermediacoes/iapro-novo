'use client';
import Layout from '@/components/Layout';
import { useState } from 'react';

export default function ScriptPodcast() {
  const [tema, setTema] = useState('');
  const [publico, setPublico] = useState('');

  const scriptBase = `
🎙️ Script para Podcast com IA

Objetivo: Criar um roteiro completo e envolvente para um episódio de podcast com base no tema e público.

Tema do Episódio: ${tema || '[defina o tema]'}
Público-Alvo: ${publico || '[defina o público]'}

Estrutura sugerida:
1. Introdução cativante
2. Contextualização do tema
3. Desenvolvimento com tópicos principais
4. Histórias ou exemplos práticos
5. Conclusão com chamada para ação ou reflexão

Gere um roteiro completo e dinâmico com esse objetivo.
`;

  const linkGPT = `https://chat.openai.com/?model=gpt-4&prompt=${encodeURIComponent(scriptBase)}`;

  return (
    <Layout>
      <div className="max-w-3xl mx-auto py-10 px-4">
        <h1 className="text-3xl font-bold text-[#1746a2] mb-4">🎙️ Script para Podcast</h1>
        <p className="mb-6 text-gray-700">
          Gere um roteiro completo e envolvente para seu episódio de podcast, com estrutura clara e foco no seu público.
        </p>

        <div className="space-y-4 mb-6">
          <div>
            <label className="block font-medium mb-1">Tema do Episódio:</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded px-3 py-2"
              value={tema}
              onChange={(e) => setTema(e.target.value)}
              placeholder="Ex: O impacto da IA no mercado de trabalho"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Público-Alvo:</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded px-3 py-2"
              value={publico}
              onChange={(e) => setPublico(e.target.value)}
              placeholder="Ex: Jovens empreendedores"
            />
          </div>
        </div>

        <a
          href={linkGPT}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#f4c95d] hover:bg-yellow-400 text-black font-semibold px-6 py-3 rounded-lg transition"
        >
          Acessar no ChatGPT com Script Gerado
        </a>
      </div>
    </Layout>
  );
}
