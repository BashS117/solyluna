const OrdersCard = props => {
    const { totalPrice, totalProducts } = props

    return (
        <div className="flex justify-between items-center border-2 border-black p-4 w-400 rounded-lg mb-5">
            <p className="flex flex-col">
                <span className="font-light">01.02.23</span>
                <span >{totalProducts} articles</span>
            </p>
            <p className="flex items-center">
                <span className="font-medium text-2xl pr-3">${totalPrice}</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
                </svg>
            </p>





        </div>
    )
}

export default OrdersCard