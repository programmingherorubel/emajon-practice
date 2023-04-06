import { getShoppingCart } from "../fakeData/fakedb"

const dataLoader = async ()=>{
    const loaerProduct = await fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
    const products = await loaerProduct.json()
    const storeCart = getShoppingCart()
    const savedCart = []
        for(const id in storeCart){
            const addproduct =  products.find(pdct => pdct.id === id)
            if(addproduct){
                const quantity = storeCart[id];
                addproduct.quantity = quantity
                savedCart.push(addproduct)
            }
        }

    return savedCart
}

export default dataLoader