// context/AuthContext.tsx
'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import Cookies from 'js-cookie'
import { api } from '@/services/api';
import { AxiosResponse } from 'axios';

type AuthContextType = {
  isLoged: () => Promise<AxiosResponse>;
  logout: () => Promise<void>;
  login: (email:string,password:string) => Promise<AxiosResponse>;
  getToken: () => string | undefined;
  getAuthorization: () => {Authorization:string}  | undefined; 
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    async function login(email:string,password:string){
        return await api.post('/auth/login',{ email, password })
    }

    async function isLoged(){
        return await api.post('/auth/verify',{},{
                    headers: getAuthorization()
        })
    }
    
    async function logout(){
        
    }

    function getToken(){
        return Cookies.get('token');
    }

    function getAuthorization(){
        const token = getToken();
        if(!token) return undefined
        return { Authorization: `Bearer ${token}` }
    }



    return (
        <AuthContext.Provider value={{ isLoged,logout,login,getToken,getAuthorization }}>
            {children}
        </AuthContext.Provider>
    );
};

// Hook personalizado para acessar o contexto
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within a UserProvider');
  return context;
};
