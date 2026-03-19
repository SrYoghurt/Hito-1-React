import { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {

    const [token, setToken] = useState(() => {
        return localStorage.getItem('token') || null;
    });

    const [usuario, setUsuario] = useState(() => {
        const usuarioGuardado = localStorage.getItem('usuario');
        return usuarioGuardado ? JSON.parse(usuarioGuardado) : null;
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleRegister = async (datos) => {
        try {
            setLoading(true);
            setError(null);
            const { correo, contraseña } = datos;
            console.log('Enviando a register:', { correo, contraseña });
            const res = await fetch('http://localhost:5000/api/auth/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email: correo, password: contraseña }),
            });
            console.log('Response status:', res.status);
            if (!res.ok) {
                const errData = await res.json().catch(() => ({}));
                throw new Error(errData.message || 'Error al registrar');
            }

            const data = await res.json();
            const { token: apiToken, email } = data;
            setToken(apiToken);
            setUsuario({ email });
            localStorage.setItem('token', apiToken);
            localStorage.setItem('usuario', JSON.stringify({ email }));
            return true;
        } catch (err) {
            setError(err.message);
            return false;
        } finally {
            setLoading(false);
        }
    };
    const handleLogin = async (correo, contraseña) => {
        try {
            setLoading(true);
            setError(null);
            const res = await fetch('http://localhost:5000/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email: correo, password: contraseña }),
            });
            if (!res.ok) {
                const errData = await res.json().catch(() => ({}));
                throw new Error(errData.message || 'Error al iniciar sesión');
            }
            const data = await res.json();
            const { token: apiToken, email } = data;

            setToken(apiToken);
            setUsuario({ email });
            localStorage.setItem('token', apiToken);
            localStorage.setItem('usuario', JSON.stringify({ email }));
            return true;
        } catch (err) {
            setError(err.message);
            return false;
        } finally {
            setLoading(false);
        }
    };
    const handleLogout = () => {
        setToken(null);
        setUsuario(null);
        localStorage.removeItem('token');
        localStorage.removeItem('usuario')
    };

    return (
        <UserContext.Provider value={{
            usuario,
            token,
            loading,
            error,
            handleLogin,
            handleRegister,
            handleLogout,
        }}>
            {children}
        </UserContext.Provider>
    );
};
