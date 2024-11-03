import React, { useContext, useState } from 'react'
import Header from '../../../ui/Header'
import { FaArrowLeft, FaShoppingCart, FaTrash } from 'react-icons/fa'
import { purpleBtnClass, whiteBtnClass } from '../../../utils/classes'
import Container from '../../../ui/Container'
import CartProducts from '../components/CartProducts'
import Footer from '../../../ui/Footer'
import { ShoppingCartContext } from '../../../context/ShoppingCartContext'
import { useNavigate } from 'react-router-dom'
import userApiReq from '../../../utils/userApiWithAuth'
import swalNotify from '../../../utils/swal'
import { BarLoader } from 'react-spinners'

export default function Cart() {
    const { state, dispatch } = useContext(ShoppingCartContext)

    const [loading, setLoading] = useState(false)
    const navi = useNavigate()

    const checkout = async () => {
        try {
            setLoading(false)

            const data = {
                products: state.items?.map((i) => ({
                    productID: i._id,
                    quantity: i.quantity
                })),
                totalAmount: state.total
            }
            const response = await userApiReq('/api/user/checkout', "POST", data)
            swalNotify('success', "Success", "Your Order has been created")
            navi('/user/order/history')
            console.log(response)
        } catch (error) {
            console.log(error)
            swalNotify('error', "Error", error.response.data.message)
        }
        finally { setLoading(false) }
    }

    return (
        <>
            <Header black={true} />
            <div className="cart py-32">
                <Container>
                    <div className="navigator flex gap-3 items-center">
                        <FaArrowLeft /> <span>Back to store</span>
                    </div>
                    <div className="header text-primary font-bold text-2xl">
                        <h2>My Shopping Cart</h2>
                    </div>
                </Container>

                {/* Product Display */}
                <Container>
                    {state.items.length > 0 && (
                        <div className="grid lg:grid-cols-2 gap-5 mt-10">
                            <div className="wrap">
                                {state.items?.map((prd, index) => (
                                    <CartProducts id={prd.id} _id={prd._id} name={prd.name} sub_name={prd.description} price={prd.price} img={prd.img} quantity={prd.quantity} key={index} />
                                ))}

                            </div>
                            <div className="wrap bg-primary p-10 text-white">
                                <h1 className='text-2xl font-bold mb-10'>My Order</h1>

                                <div className="wrap mb-5">
                                    <ul className='leading-9'>
                                        {state.items.map((i, index) => (
                                            <li className='flex justify-between items-center'><span>{i.quantity}x {i.name}</span> <span>${i.quantity * i.price}</span></li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="wrap border-t border-y-gray-300  border-opacity-30 py-8">
                                    <div className="flex rounded-full overflow-clip justify-between border">
                                        <input type="text" placeholder='Enter promo code' className='w-full p-2 bg-transparent' /> <button className={`${whiteBtnClass}`}> Redeem</button>
                                    </div>
                                </div>

                                <div className="flex justify-between items-center mb-5">
                                    <span className='font-bold text-lg text-white'>Total</span>
                                    <span className='font-bold text-2xl text-white'>{state.total}</span>
                                </div>
                                <div className="btn-wrap">
                                    <button className={`${whiteBtnClass} w-full text-sm`} onClick={checkout}>  {loading ? <BarLoader color="#000" /> : "Check out"}</button>
                                </div>
                            </div>
                        </div>
                    )}
                    {state.items.length === 0 && (
                        <div className="bg-primary bg-opacity-20 leading-10 rounded-3xl p-10 text-center lg:w-1/2 mx-auto mt-10">
                            <h1 className='text-3xl font-bold'>No Items Found</h1>
                            <span>You haven't added any item to you cart.</span> <br />
                            <button className={`mx-auto p-2 bg-primary rounded-xl text-white flex gap-2 justify-center items-center px-3 hover:scale-[0.8] transition-all`} onClick={() => navi('/perfumes')}>Go shopping now <FaShoppingCart /></button>
                        </div>
                    )}

                </Container>
            </div>
            <Footer />
        </>
    )
}
