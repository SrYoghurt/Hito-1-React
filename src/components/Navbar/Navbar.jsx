import { UserIcon, ShoppingCartIcon, KeyIcon, LockClosedIcon, LockOpenIcon } from "@heroicons/react/16/solid"
import { formatearPrecio } from "../../utils/funciones";
import { Link, NavLink } from "react-router-dom";
import { useMyContext } from "../../context/CartContext";
import { useUserContext } from "../../context/UserContext";

export default function Navbar() {
    const { total, pizzas } = useMyContext();
    const { token, handleLogout } = useUserContext();

    return (
        <>
            <nav className="flex justify-between py-1">
                <div className="flex gap-3  items-center">
                    <h1 className="text-2xl p-1.5">Pizzeria Miki y Monchi</h1>
                    <NavLink
                        to="/"
                        className={({ isActive }) => `text-lg ${isActive ? 'underline' : 'hover:underline'}`}> Inicio </NavLink>
                </div>

                <div className="flex gap-1">

                    {token ? (
                        <>
                            <NavLink
                                to='/profile'
                                className={({ isActive }) => `flex items-center gap-1 border rounded-sm m-1.5 p-1 hover:cursor-pointer ${isActive ? 'bg-gray-800' : ''} `}
                            >
                                <UserIcon className="size-5 text-white-700" />
                                Perfil
                            </NavLink>
                            <button
                                className="flex items-center gap-1 border rounded-sm m-1.5 p-1 hover:cursor-pointer"
                                onClick={handleLogout}><LockOpenIcon className="size-5 text-white-700" /> Cerrar Sesión</button>
                        </>) : (
                        <>
                            <NavLink
                                to="/register"
                                className={({ isActive }) => `flex items-center gap-1 border rounded-sm m-1.5 p-1 hover:cursor-pointer ${isActive ? 'bg-gray-800' : ''}`}
                            ><KeyIcon className="size-5 text-white-700" /> Registrate</NavLink>
                            <NavLink
                                to="/login"
                                className={({ isActive }) =>
                                    `flex items-center gap-1 border rounded-sm m-1.5 p-1 hover:cursor-pointer ${isActive ? 'bg-gray-800' : ''}`
                                }
                            >
                                <LockClosedIcon className="size-5" /> Inicia Sesión
                            </NavLink>
                        </>
                    )
                    }
                    <NavLink
                        to="/cart"
                        className={({ isActive }) =>
                            `relative flex items-center gap-1 border rounded-sm m-1.5 p-1 hover:cursor-pointer group ${isActive ? 'bg-gray-800' : ''}`
                        }
                    >
                        <ShoppingCartIcon className="size-5 text-white-700" />
                        <span>Total: {formatearPrecio(total)}</span>
                        {pizzas.length > 0 && (<span className="absolute -top-1 -right-1 bg-red-500 text-xs rounded-full px-1 text-white">
                            {pizzas.reduce((sum, p) => sum + p.count, 0)}
                        </span>
                        )}

                    </NavLink>
                </div>
            </nav >
        </>
    )
}