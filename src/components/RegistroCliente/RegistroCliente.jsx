import { useState } from "react";

export default function RegistroCliente() {


    return (
        <div className="flex  justify-center bg-amber-50 items-center">
            <form action="" className="flex flex-col text-black gap-3" onSubmit=''>
                <legend className="text-4xl dancing-script font-semibold">Registro de Nuevo Cliente</legend>
                <div>
                    <label htmlFor="correo">Ingresa tu correo: </label>
                    <input type="text" name="correo" id="correo" placeholder="juanita@mail.com" required />
                </div>
                <div>
                    <label htmlFor="contraseña">Ingresa tu contraseña: </label>
                    <input minLength={6} type="password" name="contraseña" id="contraseña" placeholder="minimo 6 caracteres" required />
                </div>
                <div>
                    <label htmlFor="confirmarContraseña">Confirma tu contraseña: </label>
                    <input minLength={6} type="password" name="confirmarContraseña" id="confirmarContraseña" placeholder="repite tu contraseña" required />
                </div>
                <button type="submit" className="bg-amber-500 text-white rounded-md mt-4 p-2 hover:bg-amber-600 transition-colors">Registrarse</button>
            </form>
        </div>
    )
}
