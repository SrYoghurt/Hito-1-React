import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserContext } from "../../hooks/useUserContext";
import { validate } from "../../utils/funciones";

export default function LoginCliente() {
    const [loginData, setloginData] = useState({
        correo: "",
        contraseña: "",
    });
    const [errors, setErrors] = useState({});
    const [loginError, setLoginError] = useState('');
    const { handleLogin, token, loading } = useUserContext();  
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoginError('');

        const validation = validate(loginData);
        setErrors(validation);

        if (Object.keys(validation).length === 0) {
            const ok = await handleLogin(loginData.correo, loginData.contraseña); 

            if (ok) {
                setTimeout(() => navigate('/'), 1500); 
            } else {
                setLoginError('Error en login. Verifica tus datos.');  
            }
        }
    };

    return (
        <div className="flex flex-col justify-center bg-amber-50 items-center">
            <form className="flex flex-col text-black gap-4" onSubmit={handleSubmit}>
                <legend className="text-4xl dancing-script font-semibold">Inicia Sesión con tu correo</legend>

                <div className="py-2">
                    <label htmlFor="correo">Ingresa tu correo: </label>
                    <input
                        type="email"
                        name="correo"
                        id="correo"
                        placeholder="juanita@mail.com"
                        required
                        value={loginData.correo || ''}
                        onChange={(e) => setloginData({ ...loginData, correo: e.target.value })}
                        className="w-full bg-gray-100 rounded-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    {errors.correo && <p className="text-red-500 text-sm mt-1">{errors.correo}</p>}
                </div>

                <div className="py-2">
                    <label htmlFor="contraseña">Ingresa tu contraseña: </label>
                    <input
                        minLength={6}
                        type="password"
                        name="contraseña"
                        id="contraseña"
                        placeholder="minimo 6 caracteres"
                        required
                        value={loginData.contraseña || ''}
                        onChange={(e) => setloginData({ ...loginData, contraseña: e.target.value })}
                        className="w-full bg-gray-100 rounded-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    {errors.contraseña && <p className="text-red-500 text-sm mt-1">{errors.contraseña}</p>}
                </div>

                <div className="flex flex-col justify-center items-center gap-2">
                    {errors.correo && <p className="text-red-500 text-sm font-semibold">{errors.correo}</p>}
                    {errors.contraseña && <p className="text-red-500 text-sm font-semibold">{errors.contraseña}</p>}
                    {loginError && <p className="text-red-500 text-sm font-semibold">{loginError}</p>}
                    {token && <p className="text-green-500 text-sm font-semibold">Sesión Iniciada... Redirigiendo</p>}
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className="bg-amber-500 text-white rounded-md mt-4 p-2 hover:bg-amber-600 transition-colors disabled:opacity-50"
                >
                    {loading ? 'Ingresando...' : 'Iniciar Sesión'}
                </button>

                <Link to="/register" className="text-center text-blue-600 hover:text-blue-800 font-medium">
                    ¿No tienes cuenta? Regístrate
                </Link>
            </form>
        </div>
    );
}
