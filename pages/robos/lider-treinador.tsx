'use client';
import Layout from '@/components/Layout';
import { useState } from 'react';

export default function LiderTreinador() {
  const [tema, setTema] = useState('');
  const [publico, setPublico] = useState('');

  const scriptBase = `
🧭 Líder Treinador com IA

Objetivo: Criar um plano de liderança inspiradora, com treinamentos práticos e estratégias motivacionais para equipes de alta performance.

Contexto da Liderança: ${tema || '[descreva o tipo de liderança ou área de atuação]'}
Perfil da Equipe: ${publico || '[descreva o perfil da equipe]'}

Incluir no plano:
1. Estratégias de liderança humanizada.
2. Treinamentos práticos com metas.
3. Estímulo ao protagonismo dos membros.
4. Métodos de feedback e engajamento.
5. Cronograma semanal de desenvolvimento.

Gere um plano completo e inspirador.
`;

  const linkGPT = `https://chat.openai.com/?model=gpt-4&prompt=${encodeURIComponent(scriptBase)}`;

  return (
    <Layout>
      <div className="max-w-3xl mx-auto py-12 px-6 bg-white shadow-xl rounded-xl">
        <h1 className="text-4xl font-bold text-[#1746a2] mb-6">🧭 Líder Treinador com IA</h1>

        <p className="text-lg text-gray-700 mb-8">
          Gere um plano de liderança inspiradora com inteligência artificial, com foco em treinar equipes, engajar talentos e construir resultados sustentáveis.
        </p>

        <div className="space-y-6 mb-8">
          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-2">📌 Contexto da liderança</label>
            <input
              type="text"
              value={tema}
              onChange={(e) => setTema(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1746a2]"
              placeholder="Ex: Time comercial em expansão"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-2">👥 Perfil da equipe</label>
            <input
              type="text"
              value={publico}
              onChange={(e) => setPublico(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1746a2]"
              placeholder="Ex: Equipe jovem com alta rotatividade"
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
