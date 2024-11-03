import React, { useEffect, useState } from 'react'
import Container from '../../../ui/Container'

import { purpleBtnClass } from '../../../utils/classes'
import ProductCard from '../../Perfumes/components/ProductCard'
import apiRequest from '../../../utils/api-request'

export default function Stats() {
    const dum = [1, 1, 1, 1]
    const [products, setProducts] = useState(null)

    useEffect(() => {
        getProducts()
    }, [])

    const getProducts = async () => {
        try {
            const response = await apiRequest('/api/get-products?limit=4', "GET")
            setProducts(response.message)
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className="wrap py-32">
            <Container>
                <div className="header text-center py-5">
                    <h1 className='font-extrabold text-3xl lg:text-4xl mb-2'>Top <span className='text-purple-800'>Products</span></h1>
                    <span className='font-thin'>Contrary to popular belief, Lorem Ipsum is not simply random text. <br /> It has roots in a piece of classical</span>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-10 pt-16">
                    {products?.map((i, index) => (
                        <ProductCard _id={i._id} img={i.imageUrl} name={i.name} description={i.description} price={i.price} key={index} />
                    ))}
                </div>

                <div className="btn-wrap text-center mt-5">
                    <button className={`${purpleBtnClass}`}>View Products</button>
                </div>
            </Container>
        </div>
    )
}
