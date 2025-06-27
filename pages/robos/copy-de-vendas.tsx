'use client';
import Layout from '@/components/Layout';
import { useState } from 'react';

export default function CopyDeVendas() {
  const [produto, setProduto] = useState('');
  const [publico, setPublico] = useState('');
  const [beneficio, setBeneficio] = useState('');

  const scriptBase = `
📝 Copy de Vendas para Vídeos e Reels

Objetivo: Criar uma copy persuasiva para um vídeo curto ou anúncio estilo Reels, TikTok, Shorts ou Instagram Ads.

Produto/Serviço: ${produto || '[defina o produto]'}
Público-alvo: ${publico || '[defina o público-alvo]'}
Benefício principal: ${beneficio || '[informe o benefício principal]'}

Prompt Base:
Crie uma copy curta e impactante, dividida em 3 partes:
1. Quebra de padrão inicial (ex: pergunta, frase chocante).
2. Apresentação da solução com benefício claro.
3. Chamada para ação (ex: clique, compre, arraste para cima).

Dê sugestões de texto com base nisso.

Ferramentas recomendadas:
- CapCut, InShot, Adobe Express
- Banco de vídeos: Pexels, Storyblocks, Pixabay

Dicas extras:
- Use emojis 🎯🔥😱
- Faça cortes rápidos nos vídeos e insira legenda em destaque
- Use músicas virais

Gere o roteiro abaixo com base nos dados inseridos.
`;

  const linkGPT = `https://chat.openai.com/?model=gpt-4&prompt=${encodeURIComponent(scriptBase)}`;

  return (
    <Layout>
      <div className="max-w-3xl mx-auto py-12 px-6 bg-white shadow-xl rounded-xl">
        <h1 className="text-4xl font-bold text-[#1746a2] mb-6">🎬 Copy de Vendas para Vídeos e Reels</h1>

        <p className="text-lg text-gray-700 mb-8">
          Crie uma copy irresistível com inteligência artificial para vídeos curtos de alta conversão (Reels, TikTok, Shorts).
        </p>

        <div className="space-y-6 mb-8">
          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-2">📦 Produto ou serviço</label>
            <input
              type="text"
              value={produto}
              onChange={(e) => setProduto(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1746a2]"
              placeholder="Ex: Curso de maquiagem profissional"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-2">🎯 Público-alvo</label>
            <input
              type="text"
              value={publico}
              onChange={(e) => setPublico(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1746a2]"
              placeholder="Ex: Mulheres de 18 a 35 anos"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-2">💎 Benefício principal</label>
            <input
              type="text"
              value={beneficio}
              onChange={(e) => setBeneficio(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1746a2]"
              placeholder="Ex: Aprenda a se maquiar sozinha e conquistar clientes"
            />
          </div>
        </div>

        <a
          href={linkGPT}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block w-full text-center bg-[#f4c95d] hover:bg-yellow-400 text-[#1a1a1a] font-bold text-lg px-6 py-3 rounded-lg transition duration-300"
        >
          🧠 Gerar Copy no ChatGPT
        </a>
      </div>
    </Layout>
  );
}
