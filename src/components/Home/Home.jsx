import CardPizza from "../CardPizza/CardPizza";
import Header from "../Header/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="flex justify-evenly bg-amber-50">
        <CardPizza
          img={'https://cdn.papajohns.cl/thumbnails/pizzas/lacordillerana_1691158882_large.jpg'}
          nombre={'Pizza Cordillerana Familiar'}
          precio={13490}
          ingredientes={['chorizo, carne, pimentón y cebolla']}
        />

        <CardPizza
          img={'https://sultanalpaso.cl/wp-content/uploads/2024/07/WhatsApp-Image-2024-07-24-at-4.23.42-PM-11.jpeg'}
          nombre={'Pizza Española Familiar'}
          precio={12490}
          ingredientes={['Base salsa de tomate, queso mozzarella, cerdo, chorizo, aceitunas, pimentón y orégano']}
        />
        <CardPizza
          img={'https://www.papajohns.com.pe/media/catalog/product/p/i/pizza-hawaiana.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700&format=jpeg'}
          nombre={'Pizza Hawaiana Familiar'}
          precio={15990}
          ingredientes={['Queso mozzarella, salsa de tomate especial, Jamón y Piña.']}
        />
      </div>
    </div>
  )
}
