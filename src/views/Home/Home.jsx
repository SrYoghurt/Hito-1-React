import CardPizza from "../../components/CardPizza/CardPizza";
import Header from "../../components/Header/Header";
import { useApiContext } from "../../context/APIContext";

export default function Home() {

  const { pizzas, loading, error, refresh } = useApiContext()

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div>Cargando Pizzas...</div>
      </div>
    );
  }
  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div>Error:{error}</div>
        <button onClick={refresh}
          className="bg-amber-500 px-4 py-2 rounded text-black font-bold">
          Reintentar
        </button>
      </div>
    )
  }
  return (
    <div>
      <Header />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center bg-amber-50 p-4 gap-4 ">
        {pizzas.map(pizza => (
          <div key={pizza.id}>
            <CardPizza
              
              nombre={pizza.name}
              precio={pizza.price}
              ingredientes={pizza.ingredients}
              img={pizza.img}
              id={pizza.id}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
