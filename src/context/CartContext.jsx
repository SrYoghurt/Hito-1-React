import { createContext, useContext, useState } from 'react';



const CartContext = createContext();

export const MyContextProvider = ({ children }) => {
    const [pizzas, setPizzas] = useState([]);

    const agregarPizza = (pizzaNueva) => {
        setPizzas(prev => {
            const existe = prev.find(p => p.id === pizzaNueva.id)
            if (existe) {
                return prev.map(pizza => pizza.id === pizzaNueva.id ? { ...pizza, count: pizza.count + 1 } : pizza);

            }
            return [...prev, { ...pizzaNueva, count: 1 }]
        })
    }

    const incrementar = (id) => {
        setPizzas(prev => prev.map(pizza =>
            pizza.id === id ? { ...pizza, count: pizza.count + 1 } : pizza
        ));
    };

    const disminuir = (id) => {
        setPizzas(prev => prev.filter(pizza => {
            if (pizza.id === id) {
                return pizza.count > 1;
            }
            return true;
        }).map(pizza =>
            pizza.id === id
                ? { ...pizza, count: pizza.count - 1 }
                : pizza
        ));
    };


    const limpiarCarrito = () => setPizzas([]);

    const total = pizzas.reduce((sum, pizza) => sum + (pizza.price * pizza.count), 0);

    const cantidadTotal = pizzas.reduce((sum, pizza) => sum + pizza.count, 0);




    return (
        <CartContext.Provider value={{ pizzas, setPizzas, agregarPizza, incrementar, disminuir, total, limpiarCarrito }}>
            {children}
        </CartContext.Provider>
    );
};

export const useMyContext = () => useContext(CartContext);