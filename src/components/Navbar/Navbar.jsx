import { UserIcon, ShoppingCartIcon, KeyIcon, LockClosedIcon, LockOpenIcon } from "@heroicons/react/16/solid"
import { formatearPrecio } from "../../utils/formatearPrecios";
export default function Navbar() {
    const total = 25000;
    const token = false;
    return (
        <>
            <nav className="flex justify-between py-1">
                <div className="flex gap-3">
                    <h1 className="text-2xl p-1.5">Pizzeria Miki y Monchi</h1>
                    <button className="text-lg hover:cursor-pointer">Inicio</button>
                </div>

                <div className="flex gap-1">

                    {token ? (
                        <>
                            <button className="flex items-center gap-1 border rounded-sm m-1.5 p-1 hover:cursor-pointer"><KeyIcon className="size-5 text-white-700" /> Registrate</button>
                            <button className="flex items-center gap-1 border rounded-sm m-1.5 p-1 hover:cursor-pointer"><LockClosedIcon className="size-5 text-white-700" />Conectarse</button>
                        </>) : (
                        <>
                            <button className="flex items-center gap-1 border rounded-sm m-1.5 p-1 hover:cursor-pointer"><UserIcon className="size-5 text-white-700" />Perfil</button>
                            <button className="flex items-center gap-1 border rounded-sm m-1.5 p-1 hover:cursor-pointer"><LockOpenIcon className="size-5 text-white-700" /> Cerrar Sesión</button>
                        </>
                    )
                    }
                    <button className="flex items-center gap-1 border rounded-sm m-1.5 p-1 hover:cursor-pointer"><ShoppingCartIcon className="size-5 text-white-700" />Total: {formatearPrecio(12490)}</button>
                </div>
            </nav>
        </>
    )
}