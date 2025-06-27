'use client';
import Layout from '@/components/Layout';
import { useState } from 'react';

export default function MentorCarreira() {
  const [tema, setTema] = useState('');
  const [publico, setPublico] = useState('');

  const scriptBase = `
🎯 Mentor de Carreira com IA

Objetivo: Criar um plano estratégico de carreira usando inteligência artificial, considerando perfil, objetivos, tendências de mercado e habilidades.

Área de Atuação: ${tema || '[defina a área ou nicho]'}
Público-Alvo: ${publico || '[defina o público-alvo]'}

Inclua no plano:
1. Diagnóstico profissional e objetivos.
2. Sugestão de habilidades técnicas e comportamentais.
3. Cargos ou oportunidades compatíveis com o perfil.
4. Roteiro de ações para crescimento e visibilidade.
5. Recursos de IA para impulsionar a carreira.

Gere um plano completo e prático.
`;

  const linkGPT = `https://chat.openai.com/?model=gpt-4&prompt=${encodeURIComponent(scriptBase)}`;

  return (
    <Layout>
      <div className="max-w-3xl mx-auto py-12 px-6 bg-white shadow-xl rounded-xl">
        <h1 className="text-4xl font-bold text-[#1746a2] mb-6">🎯 Mentor de Carreira com IA</h1>

        <p className="text-lg text-gray-700 mb-8">
          Gere um plano estratégico de carreira com inteligência artificial para guiar pessoas rumo ao sucesso profissional.
        </p>

        <div className="space-y-6 mb-8">
          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-2">💼 Área de atuação</label>
            <input
              type="text"
              value={tema}
              onChange={(e) => setTema(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1746a2]"
              placeholder="Ex: Marketing Digital, Engenharia, RH"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-2">🎯 Público-alvo</label>
            <input
              type="text"
              value={publico}
              onChange={(e) => setPublico(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1746a2]"
              placeholder="Ex: Jovens recém-formados, profissionais em transição"
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
