import { ShoppingCartIcon } from "@heroicons/react/16/solid";
import { formatearPrecio } from "../../utils/funciones";
import { useMyContext } from "../../hooks/useMyContext";
import { Link, useParams } from "react-router-dom";
import { useApiContext } from "../../hooks/useApiContext";

export default function Pizza() {
    const { pizzas, loading, error } = useApiContext();
    const { id: idStr } = useParams();
    const { agregarPizza } = useMyContext();

    if (loading || !pizzas) return <div className="flex justify-center items-center min-h-screen text-4xl">Cargando Pizza...</div>;
    if (error) return <div className="flex justify-center items-center min-h-screen text-red-500 text-4xl">{error}</div>;

    const idNum = parseInt(idStr);
    const pizza = pizzas.find(p => String(p.id) === idStr);

    if (!pizza) return (
        <div className="flex flex-col justify-center items-center min-h-screen text-2xl text-center">
            Pizza no encontrada (ID: {idStr} → {idNum})
            <br />
            <a href="/" className="text-blue-500 underline mt-4 block">← Volver a Home</a>
        </div>
    );

    const handleAgregar = () => {
        agregarPizza({ id: pizza.id, name: pizza.name, price: pizza.price, img: pizza.img, ingredients: pizza.ingredients });
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-amber-50 p-4">
            <div className="flex flex-col lg:flex-row rounded-lg border-4 border-black shadow-2xl bg-white max-w-4xl w-full">
                <img
                    className="object-cover h-80 lg:h-96 rounded-t-lg lg:rounded-l-lg w-full lg:w-96 shadow-2xl"
                    src={pizza.img}
                    alt={pizza.name}
                />

                <div className="flex flex-col grow p-6 items-center space-y-4">
                    <h1 className="text-3xl font-bold text-center text-gray-800">{pizza.name}</h1>

                    <ul className="flex flex-wrap justify-center border-y-2 py-3 w-full text-center max-w-md">
                        <span className="font-bold text-lg whitespace-nowrap mr-2">Ingredientes:</span>
                        {pizza.ingredients.map((ingrediente, index) => (
                            <li key={index} className="text-sm px-1 font-medium">
                                {ingrediente}{index < pizza.ingredients.length - 1 ? ',' : ''}
                            </li>
                        ))}
                    </ul>

                    <p className="text-center text-gray-700 leading-relaxed max-w-prose">{pizza.desc}</p>

                    <div className="w-full text-center py-3 border-y-2">
                        <span className="text-2xl font-black text-green-600">Precio: {formatearPrecio(pizza.price)}</span>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 w-full justify-center">
                        <Link to="/"><button className="bg-gray-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-600 transition-all flex items-center justify-center gap-2 shadow-lg">
                            ← Volver
                        </button></Link>
                        <button
                            onClick={handleAgregar}
                            className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                        >
                            Añadir al carrito <ShoppingCartIcon className="size-5" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
