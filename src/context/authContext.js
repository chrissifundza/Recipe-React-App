import React, { useEffect } from "react";
import { createContext, useState } from "react";
import { useNavigate } from "react-router";
import axios from "../api/axios";

export const AuthContext = createContext()
export const AuthContextProvider = ({children})=>{
    const [CurrentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("user")) || null);


    const login = async (inputs)=>{
        const res = await axios.post("http://localhost:8000/api/auth/login", inputs)
        setCurrentUser(res.data)
       console.log(res.data)

    }

    const logout = async (inputs)=>{
        const res = await axios.post("http://localhost:8000/api/auth/logout")
        
        setCurrentUser(null)
    }
   
    useEffect(()=>{
    localStorage.setItem("user", JSON.stringify(CurrentUser))
    },[CurrentUser])

    return <AuthContext.Provider value={{CurrentUser, login, logout}}>{children}</AuthContext.Provider>
}