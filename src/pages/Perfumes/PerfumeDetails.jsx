import React from 'react'
import Header from '../../ui/Header'
import Footer from '../../ui/Footer'
import Container from '../../ui/Container'
import { FaArrowLeft, FaArrowRight, FaMinus, FaPlus, FaStar } from 'react-icons/fa'
import { purpleBtnClass } from '../../utils/classes'
import ProductCard from './components/ProductCard'
import { useNavigate } from 'react-router-dom'

export default function PerfumeDetails() {
    const dum = [1, 2, 3, 4, 5]

    const navi = useNavigate()

    const featureFunc = (img, text) => ({ img, text })
    const featureArr = [
        featureFunc('i1.png', "BPA free plastic"),
        featureFunc('i2.png', "Long Lasting"),
        featureFunc('i3.png', "Leak Proof"),
        featureFunc('i4.png', "Organic"),
    ]
    return (
        <>
            <Header black={true} />
            <div className="wrap ">
                <Container>
                    <div className="grid gap-5 lg:grid-cols-2 py-32 perfume-detail">
                        <div className="img-wrap flex">
                            <div className="img-display">
                                <img src="/asset/perfume.png" alt="Perfume Name" className='w-[400px]' />
                                <div className="navigation flex gap-3 justify-center items-center">
                                    <span className='flex gap-3 rounded-full bg-primary-light text-white p-3'><FaArrowLeft /></span>
                                    <span className='flex gap-3 rounded-full bg-primary-light text-white p-3'><FaArrowRight /></span>
                                </div>
                            </div>
                            <div className="extra-img">
                                <img src="/asset/splash1.png" alt="slide 1" className='rounded-full w-[50px]' />
                                <img src="/asset/splash2.png" alt="slide 2" className='rounded-full w-[50px] mt-2' />
                            </div>
                        </div>
                        <div className="detail-wrap">
                            <div className="reviews-wrap flex gap-5 text-gray-600">
                                <div className="star-wrap flex gap-2 text-primary">
                                    {dum.map((i, index) => (
                                        <FaStar key={index} />
                                    ))}
                                </div>
                                <small>12 Reviews</small>
                            </div>

                            <div className="text-wrap mt-3">
                                <div className="head mb-5">
                                    <h1 className='text-4xl'>Gentleman</h1>
                                    <small>by Givenchy</small>
                                </div>
                                <div className="text-sm">
                                    <p>Its gold color is the reflection of the rising sun at dawn on the ocean: The dynamic head note of Coco de Mer and Lemon Grass makes it a perfect fragrance for both men and women. </p> <br />
                                    <p>Base Note: Almond, Cypress and Lavender</p> <br />
                                    <p>Middle Note: Pepper and Cinnamon</p> <br />
                                    <p>Top Note: White Musk</p>
                                </div>

                                <div className="features mt-10">
                                    <div className="grid grid-cols-4 gap-10">
                                        {featureArr.map((i, index) => (
                                            <div className="wrap text-center" key={index}>
                                                <div className="img-wrap flex justify-center ">
                                                    <div className="flex border  border-primary p-5 lg:p-3 h-[70px] w-[70px] rounded-full">
                                                        <img src={`/asset/${i.img}`} alt="i1" className='' />
                                                    </div>
                                                </div> <br />
                                                <p className='capitalize'>{i.text}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="add-wrap p-10 flex flex-wrap gap-10 items-center justify-between bg-primary mt-10">
                                    <h1 className='text-2xl font-bold text-white'>#45,0000</h1>

                                    <div className="qty-wrap flex bg-white rounded-full p-3 4 justify-center items-center">
                                        <span className='text-xs text-primary'><FaMinus /></span>
                                        <input type="text" value={1} className='w-1/2 border-0 text-center' />
                                        <span className='text-xs text-primary'><FaPlus /></span>
                                    </div>
                                    <button className={`${purpleBtnClass} border border-white w-full`} onClick={() => navi('/perfumes/cart')}>Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="wrap">
                        <div className="heading text-3xl font-bold text-primary text-center mb-5">
                            <h1>Similar Products</h1>
                        </div>
                        <div className="grid lg:grid-cols-4 gap-10">
                            {dum.map((i, index) => (
                                <ProductCard key={index} />
                            ))}
                        </div>
                    </div>
                </Container>
            </div>
            <Footer />
        </>
    )
}
