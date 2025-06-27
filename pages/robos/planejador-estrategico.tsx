'use client';
import Layout from '@/components/Layout';
import { useState } from 'react';

export default function PlanejadorEstrategico() {
  const [objetivo, setObjetivo] = useState('');
  const [prazo, setPrazo] = useState('');

  const scriptBase = `
🧩 Planejador Estratégico com IA

Objetivo: Criar um plano estratégico com base em metas reais e prazos definidos.

Objetivo Principal: ${objetivo || '[defina o objetivo]'}
Prazo Desejado: ${prazo || '[defina o prazo]'}

Estrutura sugerida:
1. Análise de cenário atual
2. Definição de metas SMART
3. Cronograma detalhado
4. Recursos necessários
5. Indicadores de sucesso
6. Revisão e adaptação

Gere um plano estratégico completo com base nesses dados.
`;

  const linkGPT = `https://chat.openai.com/?model=gpt-4&prompt=${encodeURIComponent(scriptBase)}`;

  return (
    <Layout>
      <div className="max-w-3xl mx-auto py-10 px-4">
        <h1 className="text-3xl font-bold text-[#1746a2] mb-4">📊 Planejador Estratégico</h1>
        <p className="mb-6 text-gray-700">
          Gere um planejamento estratégico completo com base no seu objetivo e prazo desejado.
        </p>

        <div className="space-y-4 mb-6">
          <div>
            <label className="block font-medium mb-1">Objetivo Principal:</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded px-3 py-2"
              value={objetivo}
              onChange={(e) => setObjetivo(e.target.value)}
              placeholder="Ex: Aumentar vendas em 30%"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Prazo Desejado:</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded px-3 py-2"
              value={prazo}
              onChange={(e) => setPrazo(e.target.value)}
              placeholder="Ex: 3 meses"
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
