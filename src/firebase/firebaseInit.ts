// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyAGyJgpstbgFux_2mzL7NDZbiyPyt1-79U",
	authDomain: "m-i-vkspa.firebaseapp.com",
	projectId: "m-i-vkspa",
	storageBucket: "m-i-vkspa.appspot.com",
	messagingSenderId: "307591283990",
	appId: "1:307591283990:web:c5a033e5c478bef054bc37",
	measurementId: "G-HSTFB52FRK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
