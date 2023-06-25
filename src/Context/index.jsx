import { createContext, useState, useEffect } from "react";

export const PerfumesContext = createContext();

export const PerfumesProvider = ({ children }) => {
    //Get products
    const [products, setProducts] = useState(null);
    const [filteredProducts, setFilteredProducts] = useState(null)









    // getProduct by Title
    const [searchByTitle, setSearchByTitle] = useState(null)
    // getProduct by Title
    const [searchByCategory, setSearchByCategory] = useState(null)

    console.log('search:', searchByTitle);


    useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/products')
            .then(response => response.json())
            .then(data => setProducts(data))

    }, [])

    const filteredeProductsByTitle = (products, searchByTitle) => {
        return products?.filter(product => product.title.toLowerCase().includes(searchByTitle.toLowerCase()))

    }

    const filteredeProductsByCategory = (products, searchByCategory) => {
        return products?.filter(product => product.category.name.toLowerCase().includes(searchByCategory.toLowerCase()))

    }

    const filterBy = (searchType, products, searchByTitle, searchByCategory) => {
        if (searchType === "BY_TITLE") {
            return filteredeProductsByTitle(products, searchByTitle)
        }

        if (searchType === "BY_CATEGORY") {
            return filteredeProductsByCategory(products, searchByCategory)
        }
        if (searchType === "BY_TITLE_AND_CATEGORY") {
            return filteredeProductsByCategory(products, searchByCategory).filter(product => product.title.toLowerCase().includes(searchByTitle.toLowerCase()))
        }

        if (!searchType) {
            return products
        }

    }


    useEffect(() => {
        if (searchByTitle && searchByCategory) setFilteredProducts(filterBy('BY_TITLE_AND_CATEGORY', products, searchByTitle, searchByCategory))
        if (searchByTitle && !searchByCategory) setFilteredProducts(filterBy('BY_TITLE', products, searchByTitle, searchByCategory))
        if (!searchByTitle && searchByCategory) setFilteredProducts(filterBy('BY_CATEGORY', products, searchByTitle, searchByCategory))
        if (!searchByTitle && !searchByCategory) setFilteredProducts(filterBy(null, products, searchByTitle, searchByCategory))

    }, [products, searchByTitle, searchByCategory])




    ////Shoping Cart-increment quantity
    const [count, setCount] = useState(0);

    //Product Detail -Open/Close
    const [isProductDetailOpen, setisProductDetailOpen] = useState(false);
    const openProductDetail = () => setisProductDetailOpen(true);
    const closeProductDetail = () => setisProductDetailOpen(false);

    //CheckOut SIDE MENU -Open/Close
    const [isCheckOutSideMenuOpen, setisCheckOutSideMenuOpen] = useState(false);
    const openCheckOutSideMenu = () => setisCheckOutSideMenuOpen(true);
    const closeCheckOutSideMenu = () => setisCheckOutSideMenuOpen(false);



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
            searchByTitle,
            setSearchByTitle,
            filteredProducts,
            searchByCategory,
            setSearchByCategory
        }}>
            {children}
        </PerfumesContext.Provider>
    )
}