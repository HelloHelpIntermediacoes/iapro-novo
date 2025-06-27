"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// criarColecao.ts
const app_1 = require("firebase/app");
const firestore_1 = require("firebase/firestore");
// 🔐 Suas credenciais
const firebaseConfig = {
    apiKey: "AIzaSyCzqG7Lw3b9F8MGkGHnBlUNQ4OwDquQVQc",
    authDomain: "iapro-2322c.firebaseapp.com",
    projectId: "iapro-2322c",
    storageBucket: "iapro-2322c.appspot.com",
    messagingSenderId: "550205199147",
    appId: "1:550205199147:web:bdd9bc87c8b6fc74e2db8e",
    measurementId: "G-VM8H3ZJXEK"
};
// 🔧 Inicializar Firebase
const app = (0, app_1.getApps)().length ? (0, app_1.getApp)() : (0, app_1.initializeApp)(firebaseConfig);
const db = (0, firestore_1.getFirestore)(app);
// 📦 Função para criar coleção/documento
async function criarColecao() {
    try {
        const docRef = (0, firestore_1.doc)(db, "usuarios", "usuario01"); // coleção: "usuarios", documento: "usuario01"
        await (0, firestore_1.setDoc)(docRef, {
            nome: "Felix Campos",
            email: "felipeexemplo@gmail.com",
            premium: true,
            criadoEm: new Date(),
            tipo: "admin"
        });
        console.log("✅ Documento criado com sucesso na coleção 'usuarios'.");
    }
    catch (err) {
        console.error("❌ Erro ao criar documento:", err);
    }
}
criarColecao();
