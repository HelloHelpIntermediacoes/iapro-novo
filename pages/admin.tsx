'use client'

import { useEffect, useState } from 'react'
import Layout from '@/components/Layout'
import { collection, getDocs, getFirestore } from 'firebase/firestore'
import { firebaseConfig } from '../firebase/firebase'
import { initializeApp, getApps, getApp } from 'firebase/app'

type Usuario = {
  nome: string
  email: string
  tipo: string
  criadoEm: any // <- alterado para 'any' para aceitar Timestamp
  pagou?: boolean
}

export default function Admin() {
  const [usuarios, setUsuarios] = useState<Usuario[]>([])
  const [carregando, setCarregando] = useState(true)

  // Inicializar Firebase apenas uma vez
  const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp()
  const db = getFirestore(app)

  useEffect(() => {
    const fetchUsuarios = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'usuarios'))
        const lista: Usuario[] = []

        querySnapshot.forEach((doc) => {
          const data = doc.data()
          lista.push({
            nome: data.nome || 'Nome não informado',
            email: data.email || 'Email não informado',
            tipo: data.tipo || 'usuário',
            criadoEm: data.criadoEm || '',
            pagou: data.pagou || false,
          })
        })

        setUsuarios(lista)
        setCarregando(false)
      } catch (error) {
        console.error('Erro ao buscar usuários:', error)
        setCarregando(false)
      }
    }

    fetchUsuarios()
  }, [])

  return (
    <Layout>
      <div className="p-10 bg-white shadow-xl rounded-xl max-w-6xl mx-auto mt-10 border-t-4 border-[#f4c95d]">
        <h1 className="text-3xl font-bold text-[#1746a2] mb-6">📋 Painel de Administração</h1>

        {carregando ? (
          <p>Carregando usuários...</p>
        ) : (
          <>
            <p className="text-gray-700 mb-4">
              Total de usuários cadastrados: <strong>{usuarios.length}</strong>
            </p>

            <div className="overflow-auto">
              <table className="min-w-full table-auto border border-gray-300 shadow-sm rounded">
                <thead className="bg-[#f9f9f9]">
                  <tr>
                    <th className="p-3 border text-left">Nome</th>
                    <th className="p-3 border text-left">E-mail</th>
                    <th className="p-3 border text-left">Tipo</th>
                    <th className="p-3 border text-left">Criado em</th>
                    <th className="p-3 border text-left">Pagou?</th>
                  </tr>
                </thead>
                <tbody>
                  {usuarios.map((user, index) => (
                    <tr key={index} className="hover:bg-gray-100">
                      <td className="p-3 border">{user.nome}</td>
                      <td className="p-3 border">{user.email}</td>
                      <td className="p-3 border">{user.tipo}</td>
                      <td className="p-3 border">
                        {typeof user.criadoEm === 'object' && user.criadoEm?.toDate
                          ? user.criadoEm.toDate().toLocaleDateString('pt-BR')
                          : user.criadoEm ?? 'Data não informada'}
                      </td>
                      <td className="p-3 border">
                        {user.pagou ? (
                          <span className="text-green-600 font-semibold">✅ Pagou</span>
                        ) : (
                          <span className="text-red-500 font-semibold">❌ Não</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>
    </Layout>
  )
}
