'use client';
import Layout from '@/components/Layout';
import { useState } from 'react';

export default function PropostaIrresistivel() {
  const [servico, setServico] = useState('');
  const [cliente, setCliente] = useState('');

  const scriptBase = `
💼 Proposta Irresistível com IA

Objetivo: Criar uma proposta de valor clara, objetiva e irresistível para conquistar novos clientes.

Tipo de Serviço: ${servico || '[descreva o serviço]'}
Cliente Ideal: ${cliente || '[descreva o cliente ideal]'}

Estrutura recomendada:
1. Introdução com benefício direto
2. Problema do cliente
3. Solução única com diferenciais
4. Prova social ou resultados
5. Chamada para ação

Crie uma proposta personalizada e de alto impacto com base nesses dados.
`;

  const linkGPT = `https://chat.openai.com/?model=gpt-4&prompt=${encodeURIComponent(scriptBase)}`;

  return (
    <Layout>
      <div className="max-w-3xl mx-auto py-10 px-4">
        <h1 className="text-3xl font-bold text-[#1746a2] mb-4">💼 Proposta Irresistível</h1>
        <p className="mb-6 text-gray-700">
          Gere uma proposta comercial estratégica e impactante para o seu serviço, com foco em conversão e valor percebido.
        </p>

        <div className="space-y-4 mb-6">
          <div>
            <label className="block font-medium mb-1">Tipo de Serviço:</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded px-3 py-2"
              value={servico}
              onChange={(e) => setServico(e.target.value)}
              placeholder="Ex: Consultoria de Marketing Digital"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Cliente Ideal:</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded px-3 py-2"
              value={cliente}
              onChange={(e) => setCliente(e.target.value)}
              placeholder="Ex: Donos de pequenos negócios"
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
