import { ArrowTopRightOnSquareIcon, ShoppingCartIcon } from "@heroicons/react/16/solid";
import { formatearPrecio } from "../../utils/funciones";
import { useMyContext } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";

export default function CardPizza({ nombre, precio, ingredientes, img, id }) {
  const { agregarPizza } = useMyContext();
  const navigate = useNavigate();

  const handleAgregar = () => {
    agregarPizza({ id, name: nombre, price: precio, img, ingredients: ingredientes });
  };

  const irAPizzaPage = () => {
    navigate(`/pizza/${id}`);
  };

  return (
    <div className="flex flex-col rounded-sm border-2 border-black text-black my-5 w-64 shadow-lg hover:shadow-xl transition-shadow">
      <img className="object-cover h-50 rounded-t-sm" src={img} alt={`Pizza ${nombre}`} />
      <h3 className="ml-3 text-lg font-semibold py-1">{nombre.toUpperCase()}</h3>
      <div className="flex flex-col border-y-2 grow px-2">
        <ul className="flex flex-wrap items-center">
          <span className="font-semibold whitespace-nowrap">Ingredientes:</span>
          {ingredientes.map((ingrediente, index) => (
            <li className="text-sm px-1" key={index}>
              {ingrediente}{index < ingredientes.length - 1 ? ',' : '.'}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col p-3">
        <p className="flex justify-center font-semibold mb-3">
          Precio: <span className="text-green-500 ml-1">{formatearPrecio(precio)}</span>
        </p>
        <div className="flex gap-3 justify-center">
          <button
            onClick={irAPizzaPage}
            className=" text-black rounded px-3 py-2 hover:bg-gray-600 hover:text-white flex items-center gap-1 transition-all duration-200"
            title="Ver detalles"
          >
            Ver más <ArrowTopRightOnSquareIcon className="size-4" />
          </button>
          <button
            onClick={handleAgregar}
            className="bg-green-700 text-white rounded px-3 py-2 hover:bg-green-600 flex items-center gap-1 transition-all duration-200 shadow-md hover:shadow-lg"
            title="Agregar al carrito"
          >
            Añadir <ShoppingCartIcon className="size-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
