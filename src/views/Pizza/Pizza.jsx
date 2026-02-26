import { ArrowTopRightOnSquareIcon, ShoppingCartIcon } from "@heroicons/react/16/solid"
import { formatearPrecio } from "../../utils/funciones"
import  { useState, useEffect } from 'react';


export default function Pizza() {
    const [pizza, setPizza] = useState({});
    const [error, setError] = useState(null);

    const consultarApi = async () => {
        try {
            const URL = 'http://localhost:5000/api/pizzas/p001';
            const response = await fetch(URL);
            const data = await response.json();
            setPizza(data);

        } catch (error) {
            console.error("Error fetching pizza:", error); 
            setError("No pudimos cargar la pizza. Inténtalo de nuevo más tarde.");
        }
    }

    useEffect(() => {
        
        consultarApi();
    }, [])
    return (
        <div className="flex justify-center items-center min-h-screen  bg-amber-50">
            {error ? (
                <div className="text-red-500">{error}</div>
            ) : pizza && (
                    <div className="flex rounded-sm border-2 border-black text-black my-5 bg-amber-50 align-middle items-center max-w-2xl">
        
                    <div className="object-cover h-60 rounded  shadow-2xl w-full ">
                        <img className="object-cover h-60 rounded  shadow-2xl w-full " src={pizza?.img} alt="foto de pizza" />
                    </div>

                    <div className="flex flex-col  grow items-center">
                        <h3 className="ml-3 text-lg font-semibold py-1 items-center">{pizza?.name}</h3>
                        <ul className="flex flex-wrap items-center ml-1 border-y" >  
                            <span className="font-semibold">Ingredientes:</span>
                            {pizza?.ingredients?.map((ingrediente, index) => (
                                <li className="flex justify-center text-sm p-1.5" key={index}>{ingrediente}{index < pizza.ingredients.length - 1 ? ',' : '.'}</li>
                            ))}
                        </ul>
                        <p className="text-center px-2 text-sm mt-2">{pizza?.desc}</p>
                        <p className="text-center font-semibold mt-2 border-y">Precio: <span className="text-green-600">{formatearPrecio(pizza?.price)}</span></p>
                        <div className="flex justify-center align-middle mt-2">
                            <button className="bg-amber rounded-sm px-2 py-1 hover:bg-gray-500 hover:text-amber-50 flex items-center gap-1 hover:cursor-pointer">Ver más<ArrowTopRightOnSquareIcon className="size-4" /></button>
                            <button className="bg-amber rounded-sm px-2 py-1 hover:bg-gray-500 hover:text-amber-50 flex items-center gap-1 hover:cursor-pointer">Añadir<ShoppingCartIcon className="size-4" /></button>
                        </div>
                    </div>
                </div >
            )}
        </div>
    )
}