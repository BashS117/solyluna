import { createContext,useState } from "react";

export const PerfumesContext = createContext();

export const PerfumesProvider = ({ children }) => {
////Shoping Cart-increment quantity
    const [count,setCount]=useState(0);

      //Product Detail -Open/Close
    const [isProductDetailOpen,setisProductDetailOpen]= useState(false);
    const openProductDetail =()=> setisProductDetailOpen(true);
    const closeProductDetail =()=> setisProductDetailOpen(false);


    //Product Detail -Show Product
const [productToShow, setProductToShow]=useState({
    title: '',
    price: '',
    description: '',
    images:[],
});



    // shoping cart-add products to cart
    const [cartProducts, setCartProducts]=useState([]);

    
    console.log('cart:', cartProducts);

    console.log(count);


    return (
        <PerfumesContext.Provider value= {{
            count,
            setCount,
            isProductDetailOpen,
            setisProductDetailOpen,
            openProductDetail,
            closeProductDetail,
            productToShow,
            setProductToShow,
            cartProducts,
            setCartProducts,
        }}>
            {children}
        </PerfumesContext.Provider>
    )
}