'use client';
import Layout from '@/components/Layout';
import { useState } from 'react';

export default function GuiaNegocios() {
  const [tema, setTema] = useState('');
  const [publico, setPublico] = useState('');

  const scriptBase = `
📘 Guia de Negócios com IA

Objetivo: Criar um guia estratégico e prático para iniciar ou organizar um negócio com ajuda da inteligência artificial.

Tipo de Negócio: ${tema || '[defina o tipo de negócio]'}
Público-Alvo: ${publico || '[defina o público-alvo]'}

Inclua no plano:
1. Nome e posicionamento do negócio.
2. Público ideal e necessidade atendida.
3. Diferenciais e proposta de valor.
4. Fontes de receita e canais de aquisição.
5. Plano de ação para os primeiros 30 dias.

Crie o guia de negócios completo com base nisso.
`;

  const linkGPT = `https://chat.openai.com/?model=gpt-4&prompt=${encodeURIComponent(scriptBase)}`;

  return (
    <Layout>
      <div className="max-w-3xl mx-auto py-12 px-6 bg-white shadow-xl rounded-xl">
        <h1 className="text-4xl font-bold text-[#1746a2] mb-6">📘 Guia de Negócios com IA</h1>

        <p className="text-lg text-gray-700 mb-8">
          Obtenha um plano estruturado com a ajuda da IA para começar, ajustar ou expandir seu negócio. Ideal para novos empreendedores ou negócios locais.
        </p>

        <div className="space-y-6 mb-8">
          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-2">🏷️ Tipo de negócio</label>
            <input
              type="text"
              value={tema}
              onChange={(e) => setTema(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1746a2]"
              placeholder="Ex: Loja de roupas femininas, delivery de marmitas"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-2">🎯 Público-alvo</label>
            <input
              type="text"
              value={publico}
              onChange={(e) => setPublico(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1746a2]"
              placeholder="Ex: Mulheres de 25 a 40 anos que buscam praticidade"
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
