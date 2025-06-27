'use client';
import Layout from '@/components/Layout';
import { useState } from 'react';

export default function InfluenciadorTikTok() {
  const [tema, setTema] = useState('');
  const [publico, setPublico] = useState('');

  const scriptBase = `
📱 Influenciador TikTok com IA

Objetivo: Criar uma estratégia para se tornar influenciador no TikTok usando inteligência artificial.

Tema/Nicho: ${tema || '[defina o nicho]'}
Público-Alvo: ${publico || '[defina o público-alvo]'}

Estrutura sugerida:
1. Ideias de conteúdo virais no nicho.
2. Roteiros curtos e impactantes com gatilhos.
3. Frequência e horários recomendados para postar.
4. Estilo de edição e linguagem visual.
5. Estratégias para engajamento e crescimento rápido.

Gere um plano de influência completo com base nisso.
`;

  const linkGPT = `https://chat.openai.com/?model=gpt-4&prompt=${encodeURIComponent(scriptBase)}`;

  return (
    <Layout>
      <div className="max-w-3xl mx-auto py-12 px-6 bg-white shadow-xl rounded-xl">
        <h1 className="text-4xl font-bold text-[#1746a2] mb-6">📱 Influenciador TikTok com IA</h1>

        <p className="text-lg text-gray-700 mb-8">
          Transforme sua presença digital com uma estratégia personalizada para TikTok. Receba ideias, roteiros, estilo visual e plano de crescimento com ajuda da IA.
        </p>

        <div className="space-y-6 mb-8">
          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-2">📌 Tema ou nicho</label>
            <input
              type="text"
              value={tema}
              onChange={(e) => setTema(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1746a2]"
              placeholder="Ex: Humor, moda, culinária, dicas financeiras"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-2">🎯 Público-alvo</label>
            <input
              type="text"
              value={publico}
              onChange={(e) => setPublico(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1746a2]"
              placeholder="Ex: Jovens de 16 a 25 anos interessados em entretenimento"
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
