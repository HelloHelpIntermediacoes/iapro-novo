'use client';
import React, { useState, useEffect } from 'react';
import Layout from '@/components/Layout';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

type Robo = {
  id: number;
  nome: string;
  descricao: string;
  imagem: string;
  categoria: string;
  link: string;
};

const robosData: Robo[] = [
  { id: 1, nome: 'Gerador de Ideias para Conteúdos', descricao: 'Campanhas com tráfego pago automatizadas por IA.', imagem: '/imagens/robo1.png', categoria: 'Marketing', link: '/robos/agencia-midia-paga' },
  { id: 2, nome: 'Roteirista de Reels e Vídeos', descricao: 'Textos persuasivos para aumentar conversões.', imagem: '/imagens/robo2.png', categoria: 'Vendas', link: '/robos/copy-de-vendas' },
  { id: 3, nome: 'Criador de Legendas Atraentes para Redes Sociais', descricao: 'Criação de propostas comerciais cativantes.', imagem: '/imagens/robo3.png', categoria: 'Vendas', link: '/robos/proposta-irresistivel' },
  { id: 4, nome: 'Gerador de Hashtags Inteligentes para Redes Sociais', descricao: 'Roteiros completos para podcasts profissionais.', imagem: '/imagens/robo4.png', categoria: 'Estratégia', link: '/robos/script-para-podcast' },
  { id: 5, nome: 'Copy para Vendas e Lançamentos', descricao: 'Criação de planos estratégicos com IA.', imagem: '/imagens/robo5.png', categoria: 'Estratégia', link: '/robos/planejador-estrategico' },
  { id: 6, nome: 'Gerador de Calendário de Conteúdos Automatizado', descricao: 'Posts automáticos para redes sociais.', imagem: '/imagens/robo6.png', categoria: 'Marketing', link: '/robos/social-media-ia' },
  { id: 7, nome: 'Gerador de Scripts para YouTube, TikTok e Vídeos', descricao: 'Scripts e estratégias para vídeos no YouTube.', imagem: '/imagens/robo7.png', categoria: 'Marketing', link: '/robos/especialista-youtube' },
  { id: 8, nome: 'Gerador de Ideias para Stories Interativos', descricao: 'Sugestões criativas de nome e identidade.', imagem: '/imagens/robo8.png', categoria: 'Marketing', link: '/robos/designer-nome-marca' },
  { id: 9, nome: 'Criador de Títulos e Ganchos Magnéticos', descricao: 'Ideias virais e roteiro para TikTok.', imagem: '/imagens/robo9.png', categoria: 'Marketing', link: '/robos/influenciador-tiktok' },
  { id: 10, nome: 'Criador de Descrições para Produtos e Serviços', descricao: 'Passo a passo para negócios online.', imagem: '/imagens/robo10.png', categoria: 'Estratégia', link: '/robos/guia-negocios-digitais' },
  { id: 11, nome: 'Criador de Funis de Vendas Inteligentes', descricao: 'Crescimento e monetização no Instagram.', imagem: '/imagens/robo11.png', categoria: 'Marketing', link: '/robos/mentor-instagram' },
  { id: 12, nome: 'Gerador de Conteúdo para Podcasts', descricao: 'Orientações profissionais e de carreira.', imagem: '/imagens/robo12.png', categoria: 'Estratégia', link: '/robos/mentor-carreira' },
  { id: 13, nome: 'Criador de Bios Estratégicas para Perfil Profissional', descricao: 'Consultoria para negócios físicos com IA.', imagem: '/imagens/robo13.png', categoria: 'Vendas', link: '/robos/mentor-negocios-fisicos' },
  { id: 14, nome: 'Criador de Conteúdos Educativos para Cursos e Aulas', descricao: 'Apresentações impactantes para captar.', imagem: '/imagens/robo14.png', categoria: 'Vendas', link: '/robos/pitch-investidores' },
  { id: 15, nome: 'Reutilizador de Conteúdos Inteligente', descricao: 'Treinamento e liderança com IA.', imagem: '/imagens/robo15.png', categoria: 'Estratégia', link: '/robos/lider-treinador' },
  { id: 16, nome: 'Especialista em Gatilhos Mentais para Posts e Vendas', descricao: 'Esse robô cria textos, legendas, roteiros e chamadas com gatilhos mentais poderosos.', imagem: '/imagens/robo16.png', categoria: 'Atendimento', link: '/robos/RobosGatilhosMentais' },
  { id: 17, nome: 'Otimização de CTA e Fechamento de Vendas', descricao: 'Gestão de relacionamento e funil.', imagem: '/imagens/robo17.png', categoria: 'Vendas', link: '/robos/gerente-clientes' },
  { id: 18, nome: 'Auditor de Perfil para Otimização de Mídia', descricao: 'Scripts para WhatsApp e vendas.', imagem: '/imagens/robo18.png', categoria: 'Vendas', link: '/robos/vendedor-automacoes' },
  { id: 19, nome: 'Criador de Séries de Conteúdos e Sequências Estratégicas', descricao: 'Textos prontos para vendas em plataformas.', imagem: '/imagens/robo19.png', categoria: 'Vendas', link: '/robos/vendedor-marketplace' },
  { id: 20, nome: 'Roterista', descricao: 'Naming e identidade de marca.', imagem: '/imagens/robo20.png', categoria: 'Marketing', link: '/robos/roteirista-viral' },
];


const categorias = ['Todos', 'Marketing', 'Vendas', 'Estratégia', 'Atendimento'];

export default function Robos() {
  const [filtro, setFiltro] = useState('Todos');
  const router = useRouter();

  // ✅ VERIFICA LOGIN E ACESSO
  useEffect(() => {
    const userData = localStorage.getItem('usuarioIAPro');
    if (!userData) {
      router.push('/login');
      return;
    }

    const usuario = JSON.parse(userData);

    // ✅ Permite acesso para Fernanda SEM verificar acesso 'liberado'
    const isFernanda = usuario.email === 'fernanda@admin.com';

    if (!isFernanda && usuario.acesso !== 'liberado') {
      router.push('/login'); // ou '/bloqueado'
    }
  }, [router]);

  const robosFiltrados =
    filtro === 'Todos' ? robosData : robosData.filter((robo) => robo.categoria === filtro);

  return (
    <Layout>
      <div className="pb-12">
        <div className="flex gap-3 flex-wrap mb-8">
          {categorias.map((cat) => (
            <button
              key={cat}
              onClick={() => setFiltro(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium border shadow-md transition-transform duration-300 ${
                filtro === cat
                  ? 'bg-[#1746a2] text-white border-[#1746a2]'
                  : 'bg-white text-[#1746a2] border-[#1746a2]'
              } hover:brightness-110 hover:scale-105`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {robosFiltrados.map((robo) =>
            robo.nome === 'Roterista' ? (
              <div key={robo.id} className="col-span-1 sm:col-span-2 flex flex-col sm:flex-row gap-4">
                {/* Card Roterista */}
                <div className="bg-white rounded-2xl shadow-md border border-yellow-200 p-4 text-center flex-1 hover:shadow-xl transition-all">
                  <div className="w-full h-[220px] relative mb-4 rounded-xl overflow-hidden">
                    <Image
                      src={robo.imagem}
                      alt={robo.nome}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-xl"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-[#1746a2] mb-1">{robo.nome}</h3>
                  <p className="text-sm text-gray-600 mb-4 px-2">{robo.descricao}</p>
                  <Link href={robo.link}>
                    <button className="bg-yellow-400 text-white px-5 py-2 rounded-full font-medium hover:brightness-110 transition-all">
                      🚀 Acessar Robô
                    </button>
                  </Link>
                </div>

                {/* Bônus */}
                <div className="bg-yellow-400 rounded-2xl p-5 flex-1 text-center shadow-md border border-yellow-500 flex flex-col justify-center">
                  <h4 className="text-md font-bold text-black mb-2">🎁 BÔNUS</h4>
                  <p className="text-sm text-black mb-4">Script exclusivo de presente para turbinar sua jornada com IA.</p>
                  <Link href="/bonus">
                    <button className="bg-black text-white px-4 py-2 rounded-full hover:brightness-110 transition-all text-sm w-fit mx-auto">
                      Ver Bônus
                    </button>
                  </Link>
                </div>
              </div>
            ) : (
              <div
                key={robo.id}
                className="bg-white rounded-2xl shadow-md border border-yellow-200 p-4 text-center hover:shadow-xl transition-all"
              >
                <div className="w-full h-[220px] relative mb-4 rounded-xl overflow-hidden">
                  <Image
                    src={robo.imagem}
                    alt={robo.nome}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-xl"
                  />
                </div>
                <h3 className="text-lg font-bold text-[#1746a2] mb-1">{robo.nome}</h3>
                <p className="text-sm text-gray-600 mb-4 px-2">{robo.descricao}</p>
                <Link href={robo.link}>
                  <button className="bg-yellow-400 text-white px-5 py-2 rounded-full font-medium hover:brightness-110 transition-all">
                    🚀 Acessar Robô
                  </button>
                </Link>
              </div>
            )
          )}
        </div>
      </div>
    </Layout>
  );
}
