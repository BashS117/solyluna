import { createContext,useState, useEffect } from "react";

export const PerfumesContext = createContext();

export const PerfumesProvider = ({ children }) => {
//Get products
const [products,setProducts]=useState(null);
const [ filteredProducts, setFilteredProducts]=useState(null)
 







// getProduct by Title
  const [searchByTitle,setSearchByTitle]= useState(null)
  console.log('search:', searchByTitle);

  useEffect(()=>{
    fetch('https://api.escuelajs.co/api/v1/products')
    .then(response=> response.json())
    .then(data=> setProducts(data))

  }, [])

  const filteredeProductsByTitle=(products, searchByTitle)=>{
    return products?.filter(product=>product.title.toLowerCase().includes(searchByTitle.toLowerCase()))

  }
  useEffect(()=>{
   if(searchByTitle) setFilteredProducts(filteredeProductsByTitle( products,searchByTitle ))
  }, [products,searchByTitle])




////Shoping Cart-increment quantity
    const [count,setCount]=useState(0);

      //Product Detail -Open/Close
    const [isProductDetailOpen,setisProductDetailOpen]= useState(false);
    const openProductDetail =()=> setisProductDetailOpen(true);
    const closeProductDetail =()=> setisProductDetailOpen(false);

      //CheckOut SIDE MENU -Open/Close
      const [isCheckOutSideMenuOpen,setisCheckOutSideMenuOpen]= useState(false);
      const openCheckOutSideMenu =()=> setisCheckOutSideMenuOpen(true);
      const closeCheckOutSideMenu =()=> setisCheckOutSideMenuOpen(false);
  


    //Product Detail -Show Product
const [productToShow, setProductToShow]=useState({
    title: '',
    price: '',
    description: '',
    images:[],
});



    // shoping cart-add products to cart
    const [cartProducts, setCartProducts]=useState([]);

    //shoppingCart - oRder
    const [order, setOrder]=useState([]);

    
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
            isCheckOutSideMenuOpen,
            setisCheckOutSideMenuOpen,
            openCheckOutSideMenu,
            closeCheckOutSideMenu,
            order,
            setOrder,
            products,
            setProducts,
            searchByTitle,setSearchByTitle,
            filteredProducts
        }}>
            {children}
        </PerfumesContext.Provider>
    )
}