import { useEffect, useState } from "react";
import CardPizza from "../CardPizza/CardPizza";
import Header from "../Header/Header";

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
      <div className="flex flex-wrap justify-center p-4 gap-4 bg-amber-50">

        {pizzas.map(pizza => (<div className="w-1/3 min-w[300px] max-w-[calc(33.33%-16px)]" key={pizza?.id}>
          <CardPizza
            nombre={pizza?.name}
            precio={pizza?.price}
            ingredientes={pizza?.ingredients}
            img={pizza?.img}
          />
        </div>))}
      </div>
    </div>

  )
}
