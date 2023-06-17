import { useContext } from "react";
import { PerfumesContext } from "../../Context";


const Card = (data) => {

    const { count, setCount,
        isProductDetailOpen,
        setProductDetailOpen,
        openProductDetail,
        closeProductDetail,
        setProductToShow,
        cartProducts, setCartProducts,
        openCheckOutSideMenu,
        closeCheckOutSideMenu } = useContext(PerfumesContext);

    const showProduct = (productDetail) => {
        openProductDetail();
        setProductToShow(productDetail);
        closeCheckOutSideMenu()
    }

    const addProductsToCart=(event,productData)=>{
        event.stopPropagation();
        setCount(count + 1)
        
        setCartProducts([...cartProducts,productData])
        openCheckOutSideMenu();
        closeProductDetail();

        
    }
    
    

    return (
        <div
            className='bg-white cursor-pointer w-56 h-60 rounded-lg'
            onClick={() => showProduct(data.data)}
        >
            <figure className='relative mb-2 w-full h-4/5'>
                <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 p-2'>{data.data.category.name}</span>
                <img className='w-full h-full object-cover rounded-lg' src={data.data.images[0]} alt={data.data.title} />

                <div
                 className=" bg-white  rounded-full m-2 p-1 absolute top-0 right-0 flex justify-center items-center">
                    <svg
                    onClick={(event)=>addProductsToCart(event,data.data)}
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>



            </figure>
            <p className="flex justify-between">
                <span className='text-sm font-light'>{data.data.title}</span>
                <span className='text-lg font-medium'>{data.data.price}</span>
            </p>
        </div>

    )
}
export default Card;