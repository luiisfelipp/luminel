// Importar Firebase SDK
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Configuración de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBou-AVDDwZHG8n4VczUPDioOxLxa9xJsM",
    authDomain: "luminel-e6873.firebaseapp.com",
    projectId: "luminel-e6873",
    storageBucket: "luminel-e6873.firebasestorage.app",
    messagingSenderId: "70291032437",
    appId: "1:70291032437:web:ea1c741be4222ec97fab3c"
};

// Inicializar Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Inicializar servicios de Firebase
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

// Exportar servicios
export { firebaseApp, db, auth };
