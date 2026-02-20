import { useState } from "react";
import { validate } from "../../utils/funciones";

export default function RegistroCliente() {
    const [usuario, setUsuario] = useState({
        correo: "",
        contraseña: "",
        contraseñaDos: "",
    });
    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState(false);



    const handleSubmit = (e) => {
        e.preventDefault();
        setSuccess(false);
        const validation = validate();
        setErrors(validation);
        if (Object.keys(validation).length === 0) {
            setSuccess(true);
        }
    };



    return (
        <div className="flex flex-col justify-center bg-amber-50 items-center">
            <form action="" className="flex flex-col text-black gap-4" onSubmit={handleSubmit}>
                <legend className="text-4xl dancing-script font-semibold">Registro de Nuevo Cliente</legend>
                <div className="py-2">
                    <label htmlFor="correo">Ingresa tu correo: </label>
                    <input type="email" name="correo" id="correo" placeholder="juanita@mail.com" required
                        onChange={(e) => setUsuario({ ...usuario, correo: e.target.value })}
                        className="w-full bg-gray-100 rounded-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                    {errors.correo && <p className="text-red-500 text-sm mt-1">{errors.correo}</p>}
                </div>
                <div className="py-2">
                    <label htmlFor="contraseña">Ingresa tu contraseña: </label>
                    <input minLength={6} type="password" name="contraseña" id="contraseña" placeholder="minimo 6 caracteres" required
                        onChange={(e) => setUsuario({ ...usuario, contraseña: e.target.value })}
                        className="w-full bg-gray-100 rounded-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                    {errors.contraseña && <p className="text-red-500 text-sm mt-1">{errors.contraseña}</p>}
                </div>
                <div className="py-2">
                    <label htmlFor="confirmarContraseña">Confirma tu contraseña: </label>
                    <input minLength={6} type="password" name="confirmarContraseña" id="confirmarContraseña" placeholder="repite tu contraseña" required
                        onChange={(e) => setUsuario({ ...usuario, contraseñaDos: e.target.value })}
                        className="w-full bg-gray-100 rounded-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                </div>
                <div className="flex justify-center">
                    {errors.contraseñaDos && <p className="text-red-500 text-sm mt-1 ">{errors.contraseñaDos}</p>}
                    {success && <p className="text-green-500 text-sm mt-1">Registro exitoso</p>}
                </div>
                <button type="submit" className="bg-amber-500 text-white rounded-md mt-4 p-2 hover:bg-amber-600 transition-colors">Registrarse</button>
            </form>
        </div>
    )
}
