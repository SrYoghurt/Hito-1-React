import { createContext, useCallback, useContext, useEffect, useState } from 'react';

const APIContext = createContext();

export const APIProvider = ({ children }) => {
    const [pizzas, setPizzas] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const consultarApi = useCallback(async () => {    // ← useCallback para memoizar
        try {
            setLoading(true);
            setError(null);
            const URL = 'http://localhost:5000/api/pizzas';
            const response = await fetch(URL);

            if (!response.ok) {                          // ← VERIFICAR response.ok
                throw new Error(`Error ${response.status}: ${response.statusText}`);
            }

            const data = await response.json();
            setPizzas(data);
        } catch (error) {
            setError(error.message);
            console.error('Error API:', error);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        consultarApi();
    }, [consultarApi]);

    const refresh = () => consultarApi();

    const value = { pizzas, loading, error, refresh, setPizzas };


    return (
        <APIContext.Provider value={value}>
            {children}
        </APIContext.Provider>
    );
};

export const useApiContext = () => useContext(APIContext);