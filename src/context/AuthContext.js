import { useContext, createContext, useEffect, useState } from "react";
import {
	GoogleAuthProvider,
	onAuthStateChanged,
	signInWithRedirect,
	signInWithPopup,
	signOut,
} from "firebase/auth";
import { auth } from "../firebase";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
	const [user, setUser] = useState({});
	const googleSignIn = () => {
		const provider = new GoogleAuthProvider();
		signInWithRedirect(auth, provider);
	};

	const logOut = () => {
		signOut(auth);
	};
	useEffect(() => {
		const unsubs = onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser);
			console.log("user", currentUser);
		});
		return () => {
			unsubs();
		};
	}, []);
	return (
		<AuthContext.Provider value={{ googleSignIn, logOut, user }}>
			{children}
		</AuthContext.Provider>
	);
};
export const UserAuth = () => {
	return useContext(AuthContext);
};
