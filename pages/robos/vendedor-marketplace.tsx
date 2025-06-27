'use client';
import Layout from '@/components/Layout';
import { useState } from 'react';

export default function VendedorMarketplace() {
  const [tema, setTema] = useState('');
  const [publico, setPublico] = useState('');

  const scriptBase = `
🤖 Vendedor em Marketplace com IA

Objetivo: Criar uma estratégia automatizada para vender em marketplaces como Shopee, Mercado Livre, Amazon etc.

Produto: ${tema || '[descreva o produto]'}
Público-Alvo: ${publico || '[descreva o público]'}

Estratégia sugerida:
1. Otimização de título, descrição e imagens com base em IA.
2. Precificação inteligente e dinâmica.
3. Respostas automáticas para perguntas frequentes.
4. Estratégia de posicionamento e visibilidade no marketplace.
5. Gatilhos para avaliações positivas e fidelização.

Gere um plano prático e personalizado para esse tipo de venda.
`;

  const linkGPT = `https://chat.openai.com/?model=gpt-4&prompt=${encodeURIComponent(scriptBase)}`;

  return (
    <Layout>
      <div className="max-w-3xl mx-auto py-12 px-6 bg-white shadow-xl rounded-xl">
        <h1 className="text-4xl font-bold text-[#1746a2] mb-6">🛒 Vendedor de Marketplace com IA</h1>

        <p className="text-lg text-gray-700 mb-8">
          Crie uma estratégia completa e automatizada para vender mais em marketplaces como Shopee, Mercado Livre e Amazon
          usando inteligência artificial.
        </p>

        <div className="space-y-6 mb-8">
          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-2">📦 Produto</label>
            <input
              type="text"
              value={tema}
              onChange={(e) => setTema(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1746a2]"
              placeholder="Ex: Fone de ouvido Bluetooth"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-2">🎯 Público-alvo</label>
            <input
              type="text"
              value={publico}
              onChange={(e) => setPublico(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1746a2]"
              placeholder="Ex: Jovens entre 18 e 35 anos que compram online"
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
