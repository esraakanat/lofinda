import React, { useEffect, useState } from 'react'
import Container from '../../../ui/Container'
import ProductCard from './ProductCard'
import apiRequest from '../../../utils/api-request'

export default function PerfumeProducts() {
    const dum = [1, 2, 3, 4, 5, 1, 2, 2, 3,]
    const [products, setProducts] = useState(null)

    useEffect(() => {
        getProducts()
    }, [])

    const getProducts = async () => {
        try {
            const response = await apiRequest('/api/get-products', "GET")
            setProducts(response.message)
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className="wrap py-16 pp">
            <Container>
                <div className="header flex flex-wrap gap-5 justify-between items-center mb-10">
                    <h1 className='text-2xl font-bold text-primary'>Fragrances</h1>

                    <div className="filter-wrap flex gap-4">
                        <select name="gender" className='p-3 text-primary text-sm border border-primary rounded-full'>
                            <option value="" selected>Unisex</option>
                        </select>

                        <select name="popular" className='p-3 text-primary text-sm border border-primary rounded-full'>
                            <option value="" selected>Most Popular</option>
                        </select>

                        <select name="product-type" className='p-3 text-primary text-sm border border-primary rounded-full'>
                            <option value="" selected>All Products</option>
                        </select>
                    </div>
                </div>

                <div className="wrap">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
                        {products?.map((i, index) => (
                            <ProductCard _id={i._id} img={i.imageUrl} name={i.name} description={i.description} price={i.price} key={index} />
                        ))}
                    </div>
                </div>
            </Container>
        </div>
    )
}
