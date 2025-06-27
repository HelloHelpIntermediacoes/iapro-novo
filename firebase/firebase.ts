import { initializeApp, getApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getAnalytics, isSupported } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyC6gLJSMUYeq_Gk9HFAMWVcQnB01UMOqVQ",
  authDomain: "iapro-a23c2.firebaseapp.com",
  projectId: "iapro-a23c2",
  storageBucket: "iapro-a23c2.appspot.com",
  messagingSenderId: "590858119707",
  appId: "1:590858119707:web:b619bb6253c0bf420b26be",
  measurementId: "G-ESDBVFD82K"
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);

let analytics = null;
if (typeof window !== 'undefined') {
  isSupported().then((ok) => {
    if (ok) analytics = getAnalytics(app);
  });
}

export { firebaseConfig, app, auth, analytics };
