
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyA_dX0XYHMOtpH9FugrrFs7InLMoSRMJFA',
  authDomain: 'walmart-b499d.firebaseapp.com',
  projectId: 'walmart-b499d',
  storageBucket: 'walmart-b499d.appspot.com',
  messagingSenderId: '1089749848054',
  appId: '1:1089749848054:web:69921bcf8e76105f9381d7'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {
    db
}