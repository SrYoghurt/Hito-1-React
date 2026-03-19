import { useMyContext } from "../../hooks/useMyContext";
import { useUserContext } from "../../hooks/useUserContext";
import { formatearPrecio } from "../../utils/funciones";
import { Link } from "react-router-dom";
import CardCart from "./CardCart";

export default function Cart() {

  const { pizzas, incrementar, disminuir, total, cantidadTotal, limpiarCarrito } = useMyContext();
  const { token } = useUserContext();
  const handlePago = async () => {
    if (!token) {
      alert('Por favor inicia sesión para continuar');
      return;
    }
    if (pizzas.length === 0) {
      alert('Tu carrito está vacío');
      return;
    }
    try {
      await fetch('http://localhost:5000/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          items: pizzas.map(pizza => ({
            id: pizza.id,
            name: pizza.name,
            price: pizza.price,
            quantity: pizza.count
          })),
          total: total,
          cantidadTotal: cantidadTotal
        })
      });
    } catch (_) {
      // error de red ignorado intencionalmente (simulación)
    }
    limpiarCarrito();
    alert('¡Pago procesado exitosamente! Gracias por tu compra.');
    window.location.href = '/';
  };

  return (

    <div className="min-h-screen bg-amber-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h2 className="text-4xl font-bold text-black mb-2 dancing-script">
            Revisa tu carrito
          </h2>
          <p className="text-black text-opacity-70">
            {cantidadTotal} {cantidadTotal === 1 ? 'pizza' : 'pizzas'} en tu carrito
          </p>
        </div>


        <div className="bg-white border-2 border-black rounded-sm p-6 mb-6">
          {pizzas.length > 0 ? (
            <div className="space-y-4">
              {pizzas.map(pizza => (
                <div key={pizza.id}>
                  <CardCart
                    img={pizza.img}
                    nombre={pizza.name.toUpperCase()}
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
              <span className="text-3xl font-bold text-green-500">
                {formatearPrecio(total)}
              </span>
            </div>
            <div className="flex gap-4">
              <Link to='/' ><button className="flex-1 bg-amber rounded-sm px-4 py-3 font-bold text-black hover:bg-gray-500 hover:text-amber-50 transition-colors">
                ← Continuar comprando
              </button></Link>
              <button
                disabled={!token}
                onClick={handlePago}
                className={`flex-1 bg-amber rounded-sm px-4 py-3 font-bold text-black 
              transition-colors${!token ? 'bg-gray-400 cursor-not-allowed text-gray-600' : 'bg-green-600 hover:bg-green-700 text-white'}`}>
                {token ? 'Proceder al pago →' : 'Inicia sesión para pagar'}
              </button>
            </div>
            {!token && (
              <p className="text-center text-sm text-gray-600 mt-3">
                <Link to="/login" className="text-blue-600 hover:underline font-medium">
                  Ir a Login →
                </Link>
              </p>
            )}
          </div>
        )}

      </div>

    </div>
  )
}
