'use client';
import { useState } from 'react';
import Layout from '@/components/Layout';
import { useRouter } from 'next/navigation';

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // Lógica fictícia para validação local
    if (email === 'admin@iapro.com' && senha === '123456') {
      localStorage.setItem('usuarioIAPro', JSON.stringify({ email }));
      router.push('/dashboard');
    } else {
      setErro('E-mail ou senha inválidos.');
    }
  };

  return (
    <Layout>
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="bg-white rounded-2xl shadow-xl p-10 max-w-md w-full border-t-4 border-[#f4c95d]">
          <h1 className="text-3xl font-bold text-center text-[#1746a2] mb-6">🔐 Login IA Pro</h1>

          {erro && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded mb-4 text-sm">
              {erro}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">📧 E-mail</label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1746a2]"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">🔑 Senha</label>
              <input
                type="password"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1746a2]"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#1746a2] text-white font-bold py-2 rounded-lg hover:bg-[#102c57] transition"
            >
              Entrar
            </button>
          </form>

          <p className="text-sm text-center text-gray-600 mt-6">
            Não tem uma conta?{' '}
            <a href="/register" className="text-[#f4c95d] hover:underline font-semibold">
              Cadastre-se aqui
            </a>
          </p>
        </div>
      </div>
    </Layout>
  );
}
