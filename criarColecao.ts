import admin from 'firebase-admin';
import { readFileSync } from 'fs';

// Caminho do seu JSON da chave privada do Firebase Admin SDK
const serviceAccount = JSON.parse(
  readFileSync('./serviceAccountKey.json', 'utf8')
);

// Inicializa o Firebase Admin SDK
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

const db = admin.firestore();

async function criarUsuarioComDados(uid: string, nome: string, email: string) {
  try {
    const docRef = db.collection('usuarios').doc(uid);

    await docRef.set({
      nome,
      email,
      tipo: 'usuario', // ou 'admin', 'premium', etc.
      criadoEm: new Date(),
      bio: '', // campo padrão caso use na interface
    });

    console.log('✅ Usuário criado com sucesso!');
  } catch (err) {
    console.error('❌ Erro ao criar usuário:', err);
  }
}

// 🔁 Substitua pelos dados reais do seu usuário:
const uid = 'FA0yQfuG9xRU...Tnra9mgF2'; // pegue o UID do Firebase Auth
const nome = 'Fernanda iapro';
const email = 'fernanda@admin.com';

criarUsuarioComDados(uid, nome, email);
