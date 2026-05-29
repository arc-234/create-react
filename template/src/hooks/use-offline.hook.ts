import { useEffect, useState } from "react";

const isOnline = () => navigator.onLine;

const useOffline = (): boolean => {
	const [offline, setOffline] = useState(() => isOnline());

	useEffect(() => {
		const handleOnline = () => setOffline(false);
		const handleOffline = () => setOffline(true);

		setOffline(isOnline());

		window.addEventListener("online", handleOnline);
		window.addEventListener("offline", handleOffline);

		return () => {
			window.removeEventListener("online", handleOnline);
			window.removeEventListener("offline", handleOffline);
		};
	}, []);

	return offline;
};

export default useOffline;
