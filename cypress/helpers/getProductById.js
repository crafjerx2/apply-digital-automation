import { products } from "../fixtures/products"

export const getProductById = (id = 1) => {
    //console.log({ products })
    return products.find(product => product.id === id);
}
