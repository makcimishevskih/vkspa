import { useEffect } from "react";

const useScroll = (data: any[], elemClassName: string) => {
	useEffect(() => {
		const scroll = document.querySelector(`.${elemClassName}`);
		if (scroll) {
			scroll.scrollTop = scroll?.scrollHeight;
		}
	}, [data, elemClassName]);
};

export default useScroll;
