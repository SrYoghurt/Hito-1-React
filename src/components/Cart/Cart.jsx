import { useState } from "react";
import { pizzaCart as listadoPizzasCarrito } from "../../utils/pizzas"
import CardCart from "./CardCart";
import { formatearPrecio } from "../../utils/funciones";

export default function Cart() {
  const [pizzas, setPizzas] = useState(listadoPizzasCarrito);

  const incrementar = (id) => {
    setPizzas(pizzas.map(pizza => 
      pizza.id === id ? { ...pizza, count: pizza.count + 1 } : pizza
    ));
  };

  const disminuir = (id) => {
    setPizzas(pizzas.filter(pizza => {
      if (pizza.id === id) {
        return pizza.count > 1;
      }
      return true;
    }).map(pizza =>
      pizza.id === id ? { ...pizza, count: pizza.count - 1 } : pizza
    ));
  };

  const total = pizzas.reduce((sum, pizza) => sum + (pizza.price * pizza.count), 0);

  return (
    <div className="min-h-screen bg-amber-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">

        <div className="mb-8">
          <h2 className="text-4xl font-bold text-black mb-2 dancing-script">
            Revisa tu carrito
          </h2>
          <p className="text-black text-opacity-70">
            {pizzas.reduce((sum, pizza) => sum + pizza.count, 0)} {pizzas.reduce((sum, pizza) => sum + pizza.count, 0) === 1 ? 'pizza' : 'pizzas'} en tu carrito
          </p>
        </div>


        <div className="bg-white border-2 border-black rounded-sm p-6 mb-6">
          {pizzas.length > 0 ? (
            <div className="space-y-4">
              {pizzas.map(pizza => (
                <div key={pizza.id}>
                  <CardCart
                    img={pizza.img}
                    nombre={pizza.name}
                    precio={formatearPrecio(pizza.price)}
                    cantidad={pizza.count}
                    aumentar={() => incrementar(pizza.id)}
                    disminuir={() => disminuir(pizza.id)}
                  />
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-black text-opacity-70 py-8">
              Tu carrito está vacío
            </p>
          )}
        </div>


        {pizzas.length > 0 && (
          <div className="bg-white border-2 border-black rounded-sm p-6">
            <div className="flex justify-between items-center mb-6 pb-6 border-b-2 border-black">
              <span className="text-2xl font-bold text-black">
                Total:
              </span>
              <span className="text-3xl font-bold text-black">
                {formatearPrecio(total)}
              </span>
            </div>
            <div className="flex gap-4">
              <button className="flex-1 bg-amber rounded-sm px-4 py-3 font-bold text-black hover:bg-gray-500 hover:text-amber-50 transition-colors">
                ← Continuar comprando
              </button>
              <button className="flex-1 bg-amber rounded-sm px-4 py-3 font-bold text-black hover:bg-gray-500 hover:text-amber-50 transition-colors">
                Proceder al pago →
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
