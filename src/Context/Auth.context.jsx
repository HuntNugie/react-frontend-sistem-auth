import axios from "axios";
import {createContext, useEffect, useState} from "react";

// buat auth context
export const AuthContext = createContext();

// buat provider
export const AuthProvider = ({children}) => {
    const [isAuth, setIsAuth] = useState(false);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const api = import.meta.env.VITE_BACKEND_API;

    // checkMe
    useEffect(() => {
        const checkMe = async () => {
            try {
                const res = await axios.get(`${api}/api/auth/me`, {withCredentials: true});
                const data = res.data;
                setIsAuth(true);
                setUser(data);
            } catch (error) {
                console.log(error);
                setIsAuth(false);
                setUser(null);
            } finally {
                setLoading(false);
            }
        };
        checkMe();
    }, []);
    return <AuthContext.Provider value={{loading, isAuth, user}}>{children}</AuthContext.Provider>;
};
