import { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const UserContextProvider = ({ children }) => {

    const [token, setToken] = useState(() => {
        return localStorage.getItem('token') === 'true';
    });

    const [usuario, setUsuario] = useState({});

    const handleLogin = (correo, contraseña) => {
        setUsuario({ correo, contraseña });
        setToken(true);
        localStorage.setItem('token', 'true');
    };

    const handleLogout = () => {
        setUsuario({});
        setToken(false);
        localStorage.removeItem('token');
    };

    return (
        <UserContext.Provider value={{
            usuario,
            setUsuario,
            token,
            setToken,
            handleLogin,
            handleLogout
        }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUserContext = () => useContext(UserContext);
