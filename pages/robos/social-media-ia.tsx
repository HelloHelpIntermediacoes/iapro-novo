'use client';
import Layout from '@/components/Layout';
import { useState } from 'react';

export default function SocialMediaIA() {
  const [tema, setTema] = useState('');
  const [publico, setPublico] = useState('');

  const scriptBase = `
📱 Social Mídia IA

Objetivo: Criar uma sequência de postagens criativas e estratégicas com apoio da inteligência artificial.

Tema Central: ${tema || '[defina o tema]'}
Público-Alvo: ${publico || '[defina o público]'}

Série de posts sugerida:
1. Post educativo
2. Post de curiosidade
3. Post com chamada para ação
4. Post de bastidores ou história
5. Post com prova social ou resultado

Formato: título + legenda + sugestão de imagem + hashtags

Gere os conteúdos com base nesses pontos.
`;

  const linkGPT = `https://chat.openai.com/?model=gpt-4&prompt=${encodeURIComponent(scriptBase)}`;

  return (
    <Layout>
      <div className="max-w-3xl mx-auto py-10 px-4">
        <h1 className="text-3xl font-bold text-[#1746a2] mb-4">📱 Social Mídia IA</h1>
        <p className="mb-6 text-gray-700">
          Gere postagens completas para redes sociais com IA — desde legendas e ideias até hashtags e imagens.
        </p>

        <div className="space-y-4 mb-6">
          <div>
            <label className="block font-medium mb-1">Tema da campanha:</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded px-3 py-2"
              value={tema}
              onChange={(e) => setTema(e.target.value)}
              placeholder="Ex: Marketing digital para iniciantes"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Público-alvo:</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded px-3 py-2"
              value={publico}
              onChange={(e) => setPublico(e.target.value)}
              placeholder="Ex: Donas de negócio local"
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
