'use client';
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import Image from 'next/image';
import Link from 'next/link';

type Robo = {
  id: number;
  nome: string;
  descricao: string;
  imagem: string;
  categoria: string;
  link: string;
};

const robosData: Robo[] = [
  { id: 1, nome: 'Agência Mídia Paga', descricao: 'Campanhas com tráfego pago automatizadas por IA.', imagem: '/imagens/robo1.png', categoria: 'Marketing', link: '/robos/agencia-midia-paga' },
  { id: 2, nome: 'Copy de Vendas', descricao: 'Textos persuasivos para aumentar conversões.', imagem: '/imagens/robo2.png', categoria: 'Vendas', link: '/robos/copy-de-vendas' },
  { id: 3, nome: 'Proposta Irresistível', descricao: 'Criação de propostas comerciais cativantes.', imagem: '/imagens/robo3.png', categoria: 'Vendas', link: '/robos/proposta-irresistivel' },
  { id: 4, nome: 'Script para Podcast', descricao: 'Roteiros completos para podcasts profissionais.', imagem: '/imagens/robo4.png', categoria: 'Estratégia', link: '/robos/script-para-podcast' },
  { id: 5, nome: 'Planejador Estratégico', descricao: 'Criação de planos estratégicos com IA.', imagem: '/imagens/robo5.png', categoria: 'Estratégia', link: '/robos/planejador-estrategico' },
  { id: 6, nome: 'Social Media IA', descricao: 'Posts automáticos para redes sociais.', imagem: '/imagens/robo6.png', categoria: 'Marketing', link: '/robos/social-media-ia' },
  { id: 7, nome: 'Especialista YouTube', descricao: 'Scripts e estratégias para vídeos no YouTube.', imagem: '/imagens/robo7.png', categoria: 'Marketing', link: '/robos/especialista-youtube' },
  { id: 8, nome: 'Designer Nome Marca', descricao: 'Sugestões criativas de nome e identidade.', imagem: '/imagens/robo8.png', categoria: 'Marketing', link: '/robos/designer-nome-marca' },
  { id: 9, nome: 'Influenciador TikTok', descricao: 'Ideias virais e roteiro para TikTok.', imagem: '/imagens/robo9.png', categoria: 'Marketing', link: '/robos/influenciador-tiktok' },
  { id: 10, nome: 'Guia Negócios Digitais', descricao: 'Passo a passo para negócios online.', imagem: '/imagens/robo10.png', categoria: 'Estratégia', link: '/robos/guia-negocios-digitais' },
  { id: 11, nome: 'Mentor Instagram', descricao: 'Crescimento e monetização no Instagram.', imagem: '/imagens/robo11.png', categoria: 'Marketing', link: '/robos/mentor-instagram' },
  { id: 12, nome: 'Mentor Carreira', descricao: 'Orientações profissionais e de carreira.', imagem: '/imagens/robo12.png', categoria: 'Estratégia', link: '/robos/mentor-carreira' },
  { id: 13, nome: 'Mentor Negócios Físicos', descricao: 'Consultoria para negócios físicos com IA.', imagem: '/imagens/robo13.png', categoria: 'Vendas', link: '/robos/mentor-negocios-fisicos' },
  { id: 14, nome: 'Pitch Investidores', descricao: 'Apresentações impactantes para captar.', imagem: '/imagens/robo14.png', categoria: 'Vendas', link: '/robos/pitch-investidores' },
  { id: 15, nome: 'Líder Treinador', descricao: 'Treinamento e liderança com IA.', imagem: '/imagens/robo15.png', categoria: 'Estratégia', link: '/robos/lider-treinador' },
  { id: 16, nome: 'Terapeuta IA', descricao: 'Atendimento terapêutico automatizado.', imagem: '/imagens/robo16.png', categoria: 'Atendimento', link: '/robos/terapeuta-ia' },
  { id: 17, nome: 'Gerente Clientes', descricao: 'Gestão de relacionamento e funil.', imagem: '/imagens/robo17.png', categoria: 'Vendas', link: '/robos/gerente-clientes' },
  { id: 18, nome: 'Vendedor Automacoes', descricao: 'Scripts para WhatsApp e vendas.', imagem: '/imagens/robo18.png', categoria: 'Vendas', link: '/robos/vendedor-automacoes' },
  { id: 19, nome: 'Vendedor Marketplace', descricao: 'Textos prontos para vendas em plataformas.', imagem: '/imagens/robo19.png', categoria: 'Vendas', link: '/robos/vendedor-marketplace' },
  { id: 20, nome: 'Consultor Nome Marca', descricao: 'Naming e identidade de marca.', imagem: '/imagens/robo20.png', categoria: 'Marketing', link: '/robos/consultor-nome-marca' },
];

const categorias = ['Todos', 'Marketing', 'Vendas', 'Estratégia', 'Atendimento'];

export default function Robos() {
  const [filtro, setFiltro] = useState('Todos');

  const robosFiltrados =
    filtro === 'Todos'
      ? robosData
      : robosData.filter((robo) => robo.categoria === filtro);

  return (
    <Layout>
      <div className="pb-12">
        <h1 className="text-3xl font-bold text-[#1746a2] mb-6">🤖 Lista de Robôs Inteligentes</h1>

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
              <Link href={robo.link}>
                <button className="bg-[#f4c95d] text-[#1a1a1a] px-4 py-2 rounded-full font-medium hover:bg-yellow-400 transition">
                  Acessar Robô
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
