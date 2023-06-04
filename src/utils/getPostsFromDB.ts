// import { orderByChild, orderByValue, orderByKey } from "firebase/database";
import { collection, getDocs } from "firebase/firestore";

import { db } from "../firebase/firebaseInit";

export async function getDataFromDB(
	name: string,
	orderName: string = "createdAt",
) {
	const querySnapshot = await getDocs(collection(db, name));

	const data: any[] = [];

	querySnapshot.forEach((doc: any) => {
		data.push(doc.data());
	});

	// useEffect ---->
	// const q = query(
	// 	collection(db, "messages"),
	// 	orderBy("createdAt"),
	// 	limit(50),
	// );
	// const unsub = onSnapshot(q, QuerySnapshot => {
	// 	let data: any = [];
	// 	QuerySnapshot.forEach(d => {
	// 		data.push(d.data());
	// 		// console.log(d.data());
	// 	});

	// 	setMessagesDB(data);
	// });

	return data;
}
