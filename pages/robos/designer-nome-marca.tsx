'use client';
import Layout from '@/components/Layout';
import { useState } from 'react';

export default function DesignerNomeMarca() {
  const [tema, setTema] = useState('');
  const [publico, setPublico] = useState('');

  const scriptBase = `
🎨 Designer de Nome e Marca com IA

Objetivo: Criar um nome criativo e identidade de marca com apoio da inteligência artificial.

Área/Segmento: ${tema || '[defina o tema ou segmento]'}
Público-Alvo: ${publico || '[defina o público]'}

Instruções:
1. Gerar 5 sugestões de nomes de marca criativos e memoráveis.
2. Sugerir conceito visual e cores.
3. Criar slogan relacionado ao público.
4. Indicar como comunicar a marca com impacto.
5. Sugestão de estilo para logotipo e fontes.

Crie uma identidade de marca completa com base nessas informações.
`;

  const linkGPT = `https://chat.openai.com/?model=gpt-4&prompt=${encodeURIComponent(scriptBase)}`;

  return (
    <Layout>
      <div className="max-w-3xl mx-auto py-12 px-6 bg-white shadow-xl rounded-xl">
        <h1 className="text-4xl font-bold text-[#1746a2] mb-6">🎨 Designer de Nome e Marca com IA</h1>

        <p className="text-lg text-gray-700 mb-8">
          Gere ideias criativas e alinhadas para o nome do seu projeto ou negócio, junto com identidade visual, slogan e
          posicionamento de marca com inteligência artificial.
        </p>

        <div className="space-y-6 mb-8">
          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-2">🏷️ Segmento ou tema</label>
            <input
              type="text"
              value={tema}
              onChange={(e) => setTema(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1746a2]"
              placeholder="Ex: Loja de roupas femininas, fintech, hamburgueria"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-2">🎯 Público-alvo</label>
            <input
              type="text"
              value={publico}
              onChange={(e) => setPublico(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1746a2]"
              placeholder="Ex: Jovens entre 18 e 30 anos que valorizam design moderno"
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
