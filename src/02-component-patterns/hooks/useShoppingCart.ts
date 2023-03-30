import { useState } from "react";
import { Product, ProductInCart } from "../interfaces/interfaces";


export const useShoppingCart = () => {


    const [shoppingCart, setShoppingCart] = useState<{ [key:string]: ProductInCart }>({});

    const onProductCountChange = ({ count, product }: { count: number, product: Product} ) => {
        // console.log(count, product);

        setShoppingCart( oldShoppingCart => {

            const productInCar: ProductInCart = oldShoppingCart[product.id] || { ...product, count: 0 };

            if( Math.max( productInCar.count + count, 0 ) > 0) {
                productInCar.count += count;
                return {
                    ...oldShoppingCart,
                    [product.id]: productInCar
                }
            }

            const { [product.id]: toDelete, ...rest } = oldShoppingCart;
            return rest;

            // if( count === 0) {

            //     const { [product.id]: toDelete, ...rest } = oldShoppingCart;
            //     return rest;
            // }

            // return {
            //     ...oldShoppingCart,
            //     [ product.id ]: { ...product, count}

            // }

        })
        
    }


    return {
        shoppingCart,
        onProductCountChange
    }
}