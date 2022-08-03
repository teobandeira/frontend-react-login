import  React, { useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";
import { api, createSession } from "../services/api";

// https://www.youtube.com/watch?v=5KqP3Vx8Y4s&list=PLoznRqfsyTLcj88M2NN0Fo5vaP3EcK_8c&index=8&t=2137s

export const AuthContext = createContext();

export const AuthProvider = ({children}) =>{

    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() =>{
        const recoveredUser = localStorage.getItem("user");
        if(recoveredUser){
            setUser(JSON.parse(recoveredUser));
        }
        setLoading(false);
    },[]);
    
    const login = async (email, password) => {
        
        const response = await createSession(email, password);

        console.log("login", response.data);

        // api criar uma session
        const loggedUser = response.data.user;
        const token = response.data.token;
        
        // Salva os dados do usuario logado 
        localStorage.setItem("user", JSON.stringify(loggedUser));
        localStorage.setItem("token", token);

        api.defaults.headers.Authorization = `Bearer ${token}`;

        // Seta o usuário logado
        setUser(loggedUser);
        navigate("/");

    };
    
    const logout = () =>{
        console.log("logout");
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        api.defaults.headers.Authorization = null;
        setUser(null);
        navigate("/login");
    };

    return (
        <AuthContext.Provider value={{ authenticated: !!user, user, loading, login, logout }}>
            {children}
        </AuthContext.Provider>
    );

};