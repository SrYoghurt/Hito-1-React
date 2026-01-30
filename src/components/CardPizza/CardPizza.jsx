import { ArrowTopRightOnSquareIcon, ShoppingCartIcon } from "@heroicons/react/16/solid"
import { formatearPrecio } from "../../utils/formatearPrecios"
export default function Cardpizza({ nombre, precio, ingredientes, img }) {
  return (
    <div className="flex flex-col rounded-sm border-2 border-black text-black my-5 w-64 h-96">
      <img className="object-cover h-50" src={img} alt="foto de pizza" />
      <h3 className="ml-3 text-lg font-semibold py-1">{nombre}</h3>
      <div className="flex flex-col border-y-2 grow">
        <p className="flex justify-center font-semibold ">Ingredientes:</p>
        <p className="flex justify-center text-sm p-1.5">{ingredientes}</p>
      </div>

      <div className="flex flex-col">
        <p className="flex justify-center font-semibold">Precio:{formatearPrecio(precio)}</p>
        <div className="flex justify-center align-middle">
          <button className="bg-amber rounded-sm px-2 py-1 hover:bg-gray-500 hover:text-amber-50 flex  items-center gap-1 hover:cursor-pointer">Ver más<ArrowTopRightOnSquareIcon className="size-4"/></button>
          <button className="bg-amber rounded-sm px-2 py-1 hover:bg-gray-500 hover:text-amber-50 flex  items-center gap-1 hover:cursor-pointer">Añadir<ShoppingCartIcon className="size-4" /></button>
        </div>
      </div>
    </div>
  )
}
