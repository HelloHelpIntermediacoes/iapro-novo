'use client';
import Layout from '@/components/Layout';
import { useState } from 'react';

export default function AgenciaMidiaPaga() {
  const [tema, setTema] = useState('');
  const [publico, setPublico] = useState('');

  const scriptBase = `
  🧠 Agência de Mídia Paga com IA

  Objetivo: Criar uma campanha de tráfego pago automatizada com inteligência artificial.

  Tema: ${tema || '[defina o tema]'}
  Público-Alvo: ${publico || '[defina o público]'}

  Etapas sugeridas:
  1. Criação do anúncio (texto, imagem e CTA).
  2. Segmentação do público ideal.
  3. Sugestão de verba e canais.
  4. Otimizações baseadas em IA.
  5. Relatório de performance semanal.

  Gere um plano detalhado para isso.
  `;

  const linkGPT = `https://chat.openai.com/?model=gpt-4&prompt=${encodeURIComponent(scriptBase)}`;

  return (
    <Layout>
      <div className="max-w-3xl mx-auto py-10 px-4">
        <h1 className="text-3xl font-bold text-[#1746a2] mb-4">🤖 Agência Mídia Paga</h1>
        <p className="mb-6 text-gray-700">
          Gere um script completo para rodar campanhas pagas com IA, incluindo criação de anúncios, verba, canais e otimizações.
        </p>

        <div className="space-y-4 mb-6">
          <div>
            <label className="block font-medium mb-1">Tema da campanha:</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded px-3 py-2"
              value={tema}
              onChange={(e) => setTema(e.target.value)}
              placeholder="Ex: Lançamento de produto fitness"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Público-alvo:</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded px-3 py-2"
              value={publico}
              onChange={(e) => setPublico(e.target.value)}
              placeholder="Ex: Mulheres de 25 a 40 anos"
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
