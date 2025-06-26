import React, { useState } from 'react';
import Layout from '../components/Layout';
import Image from 'next/image';

type Robo = {
  id: number;
  nome: string;
  descricao: string;
  imagem: string;
  categoria: string;
};

const robosData: Robo[] = [
  { id: 1, nome: 'Roteirista Viral', descricao: 'Gera roteiros para vídeos virais.', imagem: '/imagens/robo1.png', categoria: 'Marketing' },
  { id: 2, nome: 'Copy de Vendas', descricao: 'Textos de vendas persuasivos.', imagem: '/imagens/robo2.png', categoria: 'Vendas' },
  { id: 3, nome: 'Proposta Irresistível', descricao: 'Gera propostas que encantam.', imagem: '/imagens/robo3.png', categoria: 'Vendas' },
  { id: 4, nome: 'Script para Podcast', descricao: 'Roteiros completos para podcasts.', imagem: '/imagens/robo4.png', categoria: 'Estratégia' },
  { id: 5, nome: 'Social Mídia IA', descricao: 'Criação de posts automáticos.', imagem: '/imagens/robo5.png', categoria: 'Marketing' },
  { id: 6, nome: 'Instagram Reels', descricao: 'Ideias para vídeos curtos virais.', imagem: '/imagens/robo6.png', categoria: 'Marketing' },
  { id: 7, nome: 'Designer Express', descricao: 'Sugestões visuais para seu conteúdo.', imagem: '/imagens/robo7.png', categoria: 'Marketing' },
  { id: 8, nome: 'Atendimento Simples', descricao: 'Respostas automáticas para clientes.', imagem: '/imagens/robo8.png', categoria: 'Atendimento' },
  { id: 9, nome: 'Pitch Vendedor', descricao: 'Pitches rápidos e prontos.', imagem: '/imagens/robo9.png', categoria: 'Vendas' },
  { id: 10, nome: 'TikTok Mini Roteiros', descricao: 'Gatilhos para vídeos curtos.', imagem: '/imagens/robo10.png', categoria: 'Marketing' },
  { id: 11, nome: 'Consultor Estratégico', descricao: 'Posicionamento e ideias estratégicas.', imagem: '/imagens/robo11.png', categoria: 'Estratégia' },
  { id: 12, nome: 'Consultor de Marca', descricao: 'Crie identidade visual com IA.', imagem: '/imagens/robo12.png', categoria: 'Estratégia' },
  { id: 13, nome: 'Anúncio Pronto', descricao: 'Textos de anúncio em segundos.', imagem: '/imagens/robo13.png', categoria: 'Marketing' },
  { id: 14, nome: 'Funil IA', descricao: 'Monte um funil de vendas inteligente.', imagem: '/imagens/robo14.png', categoria: 'Estratégia' },
  { id: 15, nome: 'Conversão Rápida', descricao: 'Foco em fechar vendas direto.', imagem: '/imagens/robo15.png', categoria: 'Vendas' },
  { id: 16, nome: 'Robo Zap Turbo', descricao: 'Textos prontos para WhatsApp.', imagem: '/imagens/robo16.png', categoria: 'Atendimento' },
  { id: 17, nome: 'Gerador de Portfólio', descricao: 'Monte seu portfólio automaticamente.', imagem: '/imagens/robo17.png', categoria: 'Estratégia' },
  { id: 18, nome: 'E-mail Marketing IA', descricao: 'Campanhas de e-mail com IA.', imagem: '/imagens/robo18.png', categoria: 'Marketing' },
  { id: 19, nome: 'Organizador de Ideias', descricao: 'Organize projetos e temas com IA.', imagem: '/imagens/robo19.png', categoria: 'Estratégia' },
  { id: 20, nome: 'Nome para Negócio', descricao: 'Sugestões criativas de nomes.', imagem: '/imagens/robo20.png', categoria: 'Estratégia' },
];

const categorias = ['Todos', 'Marketing', 'Vendas', 'Atendimento', 'Estratégia'];

export default function Robos() {
  const [filtro, setFiltro] = useState('Todos');

  const robosFiltrados =
    filtro === 'Todos'
      ? robosData
      : robosData.filter((robo) => robo.categoria === filtro);

  return (
    <Layout>
      <div className="pb-12">
        <h1 className="text-3xl font-bold text-[#1746a2] mb-6"></h1>

        <div className="flex gap-3 flex-wrap mb-8">
          {categorias.map((cat) => (
            <button
              key={cat}
              onClick={() => setFiltro(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium border ${
                filtro === cat
                  ? 'bg-[#1746a2] text-white border-[#1746a2]'
                  : 'bg-white text-[#1746a2] border-[#1746a2]'
              } hover:bg-[#102c57] hover:text-white transition`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {robosFiltrados.map((robo) => (
            <div
              key={robo.id}
              className="bg-white border border-[#f4c95d] rounded-xl shadow hover:shadow-lg p-4 text-center transition-all"
            >
              <div className="w-full h-[180px] relative mb-4">
                <Image
                  src={robo.imagem}
                  alt={robo.nome}
                  layout="fill"
                  objectFit="contain"
                  className="rounded-md"
                />
              </div>
              <h3 className="text-lg font-semibold text-[#1746a2]">{robo.nome}</h3>
              <p className="text-sm text-gray-600 mt-1 mb-4">{robo.descricao}</p>
              <button className="bg-[#f4c95d] text-[#1a1a1a] px-4 py-2 rounded-full font-medium hover:bg-yellow-400 transition">
                Acessar Robô
              </button>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
