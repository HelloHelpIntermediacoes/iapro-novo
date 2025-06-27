'use client';

import { useState } from 'react';
import Layout from '@/components/Layout';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebase';
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import { useRouter } from 'next/navigation';

export default function Register() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [erro, setErro] = useState('');
  const router = useRouter();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    if (senha !== confirmarSenha) {
      setErro('As senhas não coincidem.');
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, senha);
      const usuarioFirebase = userCredential.user;

      const usuario = {
        uid: usuarioFirebase.uid,
        nome,
        email,
        tipo: 'usuario', // padrão
        acesso: 'pendente', // 🔒 ainda não liberado
        criadoEm: new Date(),
      };

      const db = getFirestore();
      const docRef = doc(db, 'usuarios', usuarioFirebase.uid);
      await setDoc(docRef, usuario);

      // Salva temporariamente no localStorage
      localStorage.setItem('usuarioIAPro', JSON.stringify(usuario));

      // Redireciona para o pagamento (⚠️ substitua pelo link real do PayPal)
      window.location.href = 'https://www.paypal.com/paypalme/SEULINKAQUI';

    } catch (error: any) {
      console.error('Erro no registro:', error);
      const mensagem = error?.message?.includes('email-already')
        ? 'E-mail já cadastrado. Tente outro.'
        : 'Erro ao criar conta.';
      setErro(mensagem);
    }
  };

  return (
    <Layout>
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="bg-white rounded-2xl shadow-xl p-10 max-w-md w-full border-t-4 border-[#1746a2]">
          <h1 className="text-3xl font-bold text-center text-[#1746a2] mb-6">📝 Criar Conta IA Pro</h1>

          {erro && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded mb-4 text-sm">
              {erro}
            </div>
          )}

          <form onSubmit={handleRegister} className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">👤 Nome completo</label>
              <input
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#1746a2]"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">📧 E-mail</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#1746a2]"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">🔐 Senha</label>
              <input
                type="password"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#1746a2]"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">🔁 Confirmar senha</label>
              <input
                type="password"
                value={confirmarSenha}
                onChange={(e) => setConfirmarSenha(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#1746a2]"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#f4c95d] hover:bg-yellow-400 text-[#1a1a1a] font-bold py-2 rounded-lg transition"
            >
              Criar Conta
            </button>
          </form>

          <p className="text-sm text-center text-gray-600 mt-6">
            Já tem uma conta?{' '}
            <a href="/login" className="text-[#1746a2] hover:underline font-semibold">
              Entrar aqui
            </a>
          </p>
        </div>
      </div>
    </Layout>
  );
}
