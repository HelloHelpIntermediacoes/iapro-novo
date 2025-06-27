'use client';
import Layout from '@/components/Layout';
import { useState } from 'react';

export default function MentorNegociosFisicos() {
  const [tema, setTema] = useState('');
  const [publico, setPublico] = useState('');

  const scriptBase = `
🏪 Mentor de Negócios Físicos com IA

Objetivo: Criar um plano de crescimento e estruturação para um negócio físico utilizando inteligência artificial.

Tipo de Negócio: ${tema || '[defina o tipo de negócio]'}
Público-Alvo: ${publico || '[defina o público-alvo]'}

Inclua no plano:
1. Diagnóstico do ponto comercial e diferenciais locais.
2. Estratégias para aumentar o fluxo de clientes.
3. Gestão de equipe, finanças e atendimento.
4. Marketing digital e local integrado com IA.
5. Ações práticas para fidelização e expansão.

Crie um plano estratégico completo com foco em negócios físicos.
`;

  const linkGPT = `https://chat.openai.com/?model=gpt-4&prompt=${encodeURIComponent(scriptBase)}`;

  return (
    <Layout>
      <div className="max-w-3xl mx-auto py-12 px-6 bg-white shadow-xl rounded-xl">
        <h1 className="text-4xl font-bold text-[#1746a2] mb-6">🏪 Mentor de Negócios Físicos com IA</h1>

        <p className="text-lg text-gray-700 mb-8">
          Obtenha um plano detalhado de crescimento para negócios físicos, com estratégias personalizadas criadas com inteligência artificial.
        </p>

        <div className="space-y-6 mb-8">
          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-2">🏷️ Tipo de negócio</label>
            <input
              type="text"
              value={tema}
              onChange={(e) => setTema(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1746a2]"
              placeholder="Ex: Loja de roupas, salão de beleza, restaurante"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-2">🎯 Público-alvo</label>
            <input
              type="text"
              value={publico}
              onChange={(e) => setPublico(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1746a2]"
              placeholder="Ex: Mulheres jovens, famílias, profissionais da área"
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
