import { useContext } from "react";
import { AuthContext } from "./AuthProvider";

const useAuth = () => {
	// console.log(111, "useAuth");
	const value = useContext(AuthContext);
	return value;
};

export default useAuth;
