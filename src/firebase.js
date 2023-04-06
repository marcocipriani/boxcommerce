// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
	getAuth,
	signInWithRedirect,
	signInWithPopup,
	GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyBfIfnDjq2jYGhOxGsvLJh7zdsZCXbmqio",
	authDomain: "mcweb-boxcommerce.firebaseapp.com",
	projectId: "mcweb-boxcommerce",
	storageBucket: "mcweb-boxcommerce.appspot.com",
	messagingSenderId: "109611705811",
	appId: "1:109611705811:web:1fe753438f8975154b3b26",
};

const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
	prompt: "select_account",
});

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;

	console.log(userAuth);
};

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);