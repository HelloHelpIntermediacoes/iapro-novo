'use client';
import Layout from '@/components/Layout';
import { useState } from 'react';

export default function TerapeutaIA() {
  const [tema, setTema] = useState('');
  const [publico, setPublico] = useState('');

  const scriptBase = `
🧠 Terapeuta com IA

Objetivo: Simular uma sessão terapêutica de apoio emocional, autoconhecimento e organização mental com uso de IA.

Tema da Sessão: ${tema || '[defina o tema]'}
Perfil do Paciente: ${publico || '[defina o público]'}

A sessão deve incluir:
1. Perguntas de reflexão guiadas
2. Técnicas de respiração ou relaxamento
3. Sugestões de mudanças práticas
4. Validação emocional e escuta ativa
5. Plano leve de autocuidado

Gere uma sessão estruturada com acolhimento e leveza.
`;

  const linkGPT = `https://chat.openai.com/?model=gpt-4&prompt=${encodeURIComponent(scriptBase)}`;

  return (
    <Layout>
      <div className="max-w-3xl mx-auto py-10 px-4">
        <h1 className="text-3xl font-bold text-[#1746a2] mb-4">🧠 Terapeuta com IA</h1>
        <p className="mb-6 text-gray-700">
          Simule uma conversa terapêutica para ajudar com clareza emocional, foco e bem-estar. Ideal para momentos de dúvida ou sobrecarga.
        </p>

        <div className="space-y-4 mb-6">
          <div>
            <label className="block font-medium mb-1">Tema da sessão:</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded px-3 py-2"
              value={tema}
              onChange={(e) => setTema(e.target.value)}
              placeholder="Ex: Ansiedade no trabalho"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Perfil do paciente:</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded px-3 py-2"
              value={publico}
              onChange={(e) => setPublico(e.target.value)}
              placeholder="Ex: Jovem adulto em início de carreira"
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
