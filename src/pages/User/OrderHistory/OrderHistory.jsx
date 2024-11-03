import React, { useEffect, useState } from 'react'
import { FaSearch, FaUser } from 'react-icons/fa'
import Header from '../../../ui/Header'
import Container from '../../../ui/Container'
import { PiDotsThreeOutlineVerticalFill } from 'react-icons/pi'
import Footer from '../../../ui/Footer'
import userApiReq from '../../../utils/userApiWithAuth'

export default function OrderHistory() {
    const dum = [1, 2, 3, 4, 5, 6]
    const [orders, setOrders] = useState([])

    useEffect(() => {
        getOrders()
    }, [])

    const getOrders = async () => {
        try {
            const response = await userApiReq('/api/user/orders', "GET")
            setOrders(response)
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className="wrap mt-[130px]">
            <Header black={true} />
            <Container>
                <div className="header flex justify-between">
                    <div className="relative">
                        <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
                            <FaSearch className='text-primary' />
                        </div>
                        <input
                            type="text"
                            id="phone-input"
                            aria-describedby="helper-text-explanation"
                            className="bg-gray-50 border text-gray-800 text-sm rounded-full block w-full ps-10 p-3 dark:bg-transparent border-primary placeholder-gray-400"
                            // pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                            placeholder="Search"
                            required
                        />
                    </div>

                    <div className="profile flex gap-1 items-center">
                        <p>Welcome Sheezey </p> <span className='flex p-2 rounded-full border-2 border-primary'><FaUser /></span>
                    </div>
                </div>

                <div className="filter lg:flex justify-between items-center rounded-md p-3 px-5 bg-gray-100 my-10">
                    <div className="menu flex gap-4 font-semibold text-gray-500">
                        <a href="#" className='active-order-menu'>All Order</a>
                        <a href="#">Completed</a>
                        <a href="#">Pending</a>
                        <a href="#">Cancelled</a>
                    </div>

                    <div className="relative flex gap-2 items-center lg:mt-auto mt-5">
                        <input
                            type="date"
                            id="phone-input"
                            aria-describedby="helper-text-explanation"
                            className="bg-gray-50 border text-gray-800 text-sm rounded-md block w-full p-3 dark:bg-transparent border-primary placeholder-gray-400"
                            // pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                            placeholder="First Name"
                            required
                        />
                        <p className='font-bold'>TO</p>
                        <input
                            type="date"
                            id="phone-input"
                            aria-describedby="helper-text-explanation"
                            className="bg-gray-50 border text-gray-800 text-sm rounded-md block w-full p-3 dark:bg-transparent border-primary placeholder-gray-400"
                            // pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                            placeholder="First Name"
                            required
                        />
                    </div>
                </div>

                {/* Order Table */}
                <div className="wrap mb-10 overflow-x-scroll">
                    <table className='w-full rounded-3xl overflow-clip bg-primary bg-opacity-10'>
                        <thead className='bg-primary text-gray-200'>
                            <tr>
                                <th>Order Id</th>
                                <th>Total Product</th>
                                <th>Amount</th>
                                <th>Status</th>
                                <th>Date</th>
                                <th className=' text-center'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map((i, index) => (
                                <tr className='hover:translate-x-3 transition-all hover:bg-primary hover:bg-opacity-15 rounded-3xl overflow-hidden' key={index}>
                                    <td>{i._id}</td>
                                    <td>{i.total_product} products</td>
                                    <td>${i.totalAmount}</td>
                                    <td>{i.status}</td>
                                    <td>{i.createdAt}</td>
                                    <td className=' flex justify-center'> <PiDotsThreeOutlineVerticalFill className='cursor-pointer' /></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Container>

            <Footer />
        </div>
    )
}
