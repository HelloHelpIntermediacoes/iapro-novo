'use client';

import { useEffect, useState } from 'react';
import { getFirestore, doc, getDoc, setDoc, updateDoc, deleteDoc } from 'firebase/firestore';
import { auth } from '../firebase/firebase';
import Layout from '@/components/Layout';
import { updateEmail, updatePassword } from 'firebase/auth';
import { useRouter } from 'next/navigation';

export default function Configuracoes() {
  const [nome, setNome] = useState('');
  const [bio, setBio] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [uid, setUid] = useState('');
  const [novoEmail, setNovoEmail] = useState('');
  const [novaSenha, setNovaSenha] = useState('');
  const [carregando, setCarregando] = useState(false);

  const db = getFirestore();
  const router = useRouter();

  useEffect(() => {
    const usuarioLocal = localStorage.getItem('usuarioIAPro');
    if (usuarioLocal) {
      const usuario = JSON.parse(usuarioLocal);
      setUid(usuario.uid || '');
      setNome(usuario.nome || '');
      setBio(usuario.bio || '');
      setNovoEmail(usuario.email || '');
    }
  }, []);

  const handleSalvar = async () => {
    if (!uid) return setMensagem('❌ Usuário não autenticado.');
    setCarregando(true);
    try {
      const ref = doc(db, 'usuarios', uid);
      const snap = await getDoc(ref);

      if (snap.exists()) {
        await updateDoc(ref, { nome, bio });
      } else {
        await setDoc(ref, { nome, bio, tipo: 'usuario', criadoEm: new Date() });
      }

      const usuarioAtualizado = {
        uid,
        email: novoEmail,
        nome,
        bio,
        tipo: 'usuario',
      };

      localStorage.setItem('usuarioIAPro', JSON.stringify(usuarioAtualizado));
      setMensagem('✅ Alterações salvas com sucesso!');
    } catch (e) {
      console.error(e);
      setMensagem('❌ Erro ao salvar dados.');
    } finally {
      setCarregando(false);
    }
  };

  const handleAlterarEmail = async () => {
    try {
      if (auth.currentUser && novoEmail) {
        await updateEmail(auth.currentUser, novoEmail);
        setMensagem('✅ E-mail atualizado com sucesso!');
      }
    } catch (e) {
      console.error(e);
      setMensagem('❌ Erro ao atualizar e-mail.');
    }
  };

  const handleAlterarSenha = async () => {
    try {
      if (auth.currentUser && novaSenha.length >= 6) {
        await updatePassword(auth.currentUser, novaSenha);
        setMensagem('✅ Senha atualizada com sucesso!');
      } else {
        setMensagem('❌ A senha deve ter pelo menos 6 caracteres.');
      }
    } catch (e) {
      console.error(e);
      setMensagem('❌ Erro ao atualizar senha.');
    }
  };

  const handleExcluirConta = async () => {
    try {
      const ref = doc(db, 'usuarios', uid);
      await deleteDoc(ref);
      await auth.currentUser?.delete();
      localStorage.removeItem('usuarioIAPro');
      router.push('/register');
    } catch (e) {
      console.error(e);
      setMensagem('❌ Erro ao excluir conta.');
    }
  };

  return (
    <Layout>
      <div className="p-6 md:p-10 max-w-5xl mx-auto">
        <h1 className="text-2xl font-bold mb-6 text-[#1746a2]">⚙️ Configurações da Conta</h1>

        <div className="bg-white p-6 rounded-lg shadow-md border">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Formulário de Edição */}
            <div>
              <h2 className="text-lg font-semibold mb-4">🧑‍💼 Editar Perfil</h2>

              <input
                type="text"
                placeholder="Nome completo"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                className="w-full mb-4 px-4 py-2 border border-gray-300 rounded"
              />

              <input
                type="text"
                placeholder="Bio ou descrição"
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                className="w-full mb-4 px-4 py-2 border border-gray-300 rounded"
              />

              <button
                onClick={handleSalvar}
                className="bg-[#1746a2] text-white px-6 py-2 rounded hover:bg-[#0f326e]"
              >
                {carregando ? 'Salvando...' : '💾 Salvar Alterações'}
              </button>
            </div>

            {/* Ações */}
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold mb-1">📧 Novo E-mail</label>
                <input
                  type="email"
                  value={novoEmail}
                  onChange={(e) => setNovoEmail(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded"
                />
                <button
                  onClick={handleAlterarEmail}
                  className="mt-2 bg-yellow-400 text-black px-4 py-2 rounded hover:brightness-110"
                >
                  ✉️ Alterar E-mail
                </button>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-1">🔒 Nova Senha</label>
                <input
                  type="password"
                  value={novaSenha}
                  onChange={(e) => setNovaSenha(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded"
                />
                <button
                  onClick={handleAlterarSenha}
                  className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                  🔑 Alterar Senha
                </button>
              </div>

              <div className="pt-2">
                <button
                  onClick={handleExcluirConta}
                  className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-800"
                >
                  🗑️ Excluir Conta Permanentemente
                </button>
              </div>
            </div>
          </div>

          {mensagem && (
            <p className={`mt-6 text-sm ${mensagem.includes('sucesso') ? 'text-green-600' : 'text-red-600'}`}>
              {mensagem}
            </p>
          )}
        </div>
      </div>
    </Layout>
  );
}
