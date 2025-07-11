'use client';

import Layout from '@/components/Layout';
import { useState } from 'react';

const gatilhosDisponiveis = [
  'Urgência', 'Escassez', 'Prova Social', 'Autoridade', 'Reciprocidade',
  'Antecipação', 'Curiosidade', 'Pertencimento', 'Segurança', 'Novidade'
];

export default function RoboGatilhosMentais() {
  const [tema, setTema] = useState('');
  const [publico, setPublico] = useState('');
  const [objetivo, setObjetivo] = useState('');
  const [tom, setTom] = useState('');
  const [gatilhosSelecionados, setGatilhosSelecionados] = useState<string[]>([]);

  const toggleGatilho = (gatilho: string) => {
    setGatilhosSelecionados((prev) =>
      prev.includes(gatilho) ? prev.filter((g) => g !== gatilho) : [...prev, gatilho]
    );
  };

  const prompt = `
Você é um especialista em copywriting e persuasão.
Crie 3 variações de texto (legenda, roteiro, anúncio ou mensagem) sobre "${tema || '[defina o tema]'}", utilizando os seguintes gatilhos mentais:

✅ ${gatilhosSelecionados.join('\n✅ ') || '[escolha gatilhos]'}

Cada texto deve conter pelo menos 3 desses gatilhos combinados.

Dados:
- Tema: ${tema || '[tema]'}
- Público-alvo: ${publico || '[público-alvo]'}
- Objetivo: ${objetivo || '[ex: vender, atrair, engajar]'}
- Tom: ${tom || '[defina o tom]'}

Inclua no final uma chamada para ação (CTA) poderosa.
`;

  const linkGPT = `https://chat.openai.com/?model=gpt-4&prompt=${encodeURIComponent(prompt)}`;

  return (
    <Layout>
      <div className="max-w-3xl mx-auto py-10 px-4">
        <h1 className="text-3xl font-bold text-[#1746a2] mb-4">🧠 Robô Especialista em Gatilhos Mentais para Posts e Vendas</h1>
        <p className="mb-6 text-gray-700">
          Esse robô cria textos, legendas, roteiros e chamadas com <strong>gatilhos mentais poderosos</strong> para aumentar vendas e engajamento.
        </p>

        <div className="space-y-4 mb-6">
          <div>
            <label className="block font-medium mb-1">📌 Tema ou Produto:</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded px-3 py-2"
              value={tema}
              onChange={(e) => setTema(e.target.value)}
              placeholder="Ex: Mentoria para Afiliados"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">👥 Público-alvo:</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded px-3 py-2"
              value={publico}
              onChange={(e) => setPublico(e.target.value)}
              placeholder="Ex: Jovens empreendedores iniciantes"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">🎯 Objetivo:</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded px-3 py-2"
              value={objetivo}
              onChange={(e) => setObjetivo(e.target.value)}
              placeholder="Ex: Aumentar vendas, gerar conexão"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">🗣 Tom de voz:</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded px-3 py-2"
              value={tom}
              onChange={(e) => setTom(e.target.value)}
              placeholder="Ex: Profissional, descontraído, direto"
            />
          </div>

          <div>
            <label className="block font-medium mb-2">💡 Gatilhos Mentais:</label>
            <div className="flex flex-wrap gap-2">
              {gatilhosDisponiveis.map((gatilho) => (
                <button
                  key={gatilho}
                  onClick={() => toggleGatilho(gatilho)}
                  className={`px-3 py-1 rounded-full text-sm border ${
                    gatilhosSelecionados.includes(gatilho)
                      ? 'bg-[#1746a2] text-white border-[#1746a2]'
                      : 'bg-white text-[#1746a2] border-[#1746a2]'
                  }`}
                >
                  {gatilho}
                </button>
              ))}
            </div>
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
