import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
	apiKey: "AIzaSyAGyJgpstbgFux_2mzL7NDZbiyPyt1-79U",
	authDomain: "m-i-vkspa.firebaseapp.com",
	projectId: "m-i-vkspa",
	storageBucket: "m-i-vkspa.appspot.com",
	messagingSenderId: "307591283990",
	appId: "1:307591283990:web:c5a033e5c478bef054bc37",
	measurementId: "G-HSTFB52FRK",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);

// const analytics = getAnalytics(app);
