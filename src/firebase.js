// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyAa9SLIiR9yoNtTUNeFN0oCWA9fvTs7Ozw",
	authDomain: "auth-dev-5823b.firebaseapp.com",
	projectId: "auth-dev-5823b",
	storageBucket: "auth-dev-5823b.appspot.com",
	messagingSenderId: "469942428665",
	appId: "1:469942428665:web:cb63599c55655ea8215328",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
