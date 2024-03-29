// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyByiNGW_ejJSYx8LReNZR-8tBqRD0PDjUQ',
  authDomain: 'starwars-app-6829d.firebaseapp.com',
  projectId: 'starwars-app-6829d',
  storageBucket: 'starwars-app-6829d.appspot.com',
  messagingSenderId: '835215618113',
  appId: '1:835215618113:web:f8839dcbe6b40d43f116c0',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;
