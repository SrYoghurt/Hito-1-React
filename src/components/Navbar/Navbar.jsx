import { UserIcon, ShoppingCartIcon, KeyIcon, LockClosedIcon, LockOpenIcon } from "@heroicons/react/16/solid"
import { formatearPrecio } from "../../utils/funciones";
import { Link } from "react-router-dom";

export default function Navbar() {

    const token = true;


    return (
        <>
            <nav className="flex justify-between py-1">
                <div className="flex gap-3  items-center">
                    <h1 className="text-2xl p-1.5">Pizzeria Miki y Monchi</h1>
                    <Link to="/"><button className="text-lg hover:cursor-pointer">Inicio</button></Link>
                </div>

                <div className="flex gap-1">

                    {token ? (
                        <>
                            <Link to="/register"><button className="flex items-center gap-1 border rounded-sm m-1.5 p-1 hover:cursor-pointer"><KeyIcon className="size-5 text-white-700" /> Registrate</button></Link>
                            <Link to="/login"><button className="flex items-center gap-1 border rounded-sm m-1.5 p-1 hover:cursor-pointer"><LockClosedIcon className="size-5 text-white-700" />Inicia Sesión</button></Link>
                        </>) : (
                        <>
                            <button className="flex items-center gap-1 border rounded-sm m-1.5 p-1 hover:cursor-pointer"><UserIcon className="size-5 text-white-700" />Perfil</button>
                            <button className="flex items-center gap-1 border rounded-sm m-1.5 p-1 hover:cursor-pointer"><LockOpenIcon className="size-5 text-white-700" /> Cerrar Sesión</button>
                        </>
                    )
                    }
                    <Link to="/cart">
                        <button className="relative flex items-center gap-1 border rounded-sm m-1.5 p-1 hover:cursor-pointer group">
                            <ShoppingCartIcon className="size-5 text-white-700" />
                            <span>Total: {formatearPrecio(25000)}</span>
                        </button>
                    </Link>
                </div>
            </nav>
        </>
    )
}