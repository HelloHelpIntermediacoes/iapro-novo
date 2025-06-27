'use client';
import Layout from '@/components/Layout';
import { useState } from 'react';

export default function VendedorAutomacoes() {
  const [tema, setTema] = useState('');
  const [publico, setPublico] = useState('');

  const scriptBase = `
🤖 Vendedor com Automações

Objetivo: Criar um processo de vendas automatizado com inteligência artificial.

Produto ou Serviço: ${tema || '[descreva o produto/serviço]'}
Público-Alvo: ${publico || '[descreva o público]'}

A automação deve incluir:
1. Gatilhos de atração e interesse.
2. Sequência de mensagens automáticas (WhatsApp, e-mail, Instagram etc.).
3. Perguntas qualificadoras.
4. Envio automático de proposta personalizada.
5. Follow-up com gatilhos de urgência e escassez.

Monte um funil completo e personalizado com base nisso.
`;

  const linkGPT = `https://chat.openai.com/?model=gpt-4&prompt=${encodeURIComponent(scriptBase)}`;

  return (
    <Layout>
      <div className="max-w-3xl mx-auto py-10 px-4">
        <h1 className="text-3xl font-bold text-[#1746a2] mb-4">🤖 Vendedor com Automações</h1>
        <p className="mb-6 text-gray-700">
          Crie um processo automatizado de vendas com IA. Ideal para quem quer vender mesmo sem estar disponível o tempo todo.
        </p>

        <div className="space-y-4 mb-6">
          <div>
            <label className="block font-medium mb-1">Produto ou Serviço:</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded px-3 py-2"
              value={tema}
              onChange={(e) => setTema(e.target.value)}
              placeholder="Ex: Curso online de maquiagem"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Público-alvo:</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded px-3 py-2"
              value={publico}
              onChange={(e) => setPublico(e.target.value)}
              placeholder="Ex: Mulheres de 20 a 40 anos interessadas em beleza"
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
