import { useCallback, useState } from "react";

// import { initialPost } from "../pages/home/initialPost";
// import { IMessage, IPost } from "../types/types";

import useSnapshot from "../utils/useSnapshot";

const useGetFBData = <T>(name: string, order: string = "createdAt") => {
	const [innerData, setInnerData] = useState<T[]>([]);

	const handler = useCallback((data: T[]) => {
		setInnerData(() => [...data]);
	}, []);

	useSnapshot({
		name,
		order,
		handler,
	});

	return { innerData, handler };
};

export default useGetFBData;
