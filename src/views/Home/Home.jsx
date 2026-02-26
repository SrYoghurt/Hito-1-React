import { useEffect, useState } from "react";
import CardPizza from "../../components/CardPizza/CardPizza";
import Header from "../../components/Header/Header";

export default function Home() {
  const [pizzas, setPizzas] = useState([]);

  const consultarApi = async () => {
    try {
      const URL = 'http://localhost:5000/api/pizzas';
      const response = await fetch(URL);
      const data = await response.json();
      setPizzas(data);

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    consultarApi();
  }, [])

  return (
    <div>
      <Header />
      <div className="grid grid-cols-3 justify-items-center bg-amber-50 p-4 gap-4 ">
        {pizzas.map(pizza => (
          <div key={pizza?.id}>
            <CardPizza
              nombre={pizza?.name}
              precio={pizza?.price}
              ingredientes={pizza?.ingredients}
              img={pizza?.img}
            />
          </div>
        ))}
      </div>
    </div>

  )
}
