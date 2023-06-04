import {
	query,
	collection,
	orderBy,
	limit,
	onSnapshot,
} from "firebase/firestore";
import { useEffect } from "react";
import { db } from "../firebase/firebaseInit";

interface IProps {
	name: string;
	handler: Function;
	order?: string;
}

const useSnapshot = ({ name, handler, order = "createdAt" }: IProps) => {
	useEffect((): any => {
		console.log("SNAPSHOT", name);

		const q = query(collection(db, name), orderBy(order), limit(50));
		const unsub = onSnapshot(q, QuerySnapshot => {
			let data: any = [];
			QuerySnapshot.forEach(d => {
				data.push(d.data());
			});

			handler(data);
		});
		return () => unsub;
	}, []);
};

export default useSnapshot;
