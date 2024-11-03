import React from 'react'
import Container from '../../../ui/Container'
import { purpleBtnClass } from '../../../utils/classes'
import { FaStar } from 'react-icons/fa'

export default function BestSelling() {
    return (
        <div className="wrap bg-secondary">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
                <div className="text-wrap text-primary-light p-5 lg:ml-12 py-16 lg:py-auto">
                    <div className="heading text-4xl">
                        <h1 className='text-primary font-extrabold'>Best Seller</h1>
                    </div>
                    <div className="detail">
                        <h3 className='text-3xl my-4'>Kodak White</h3>
                        <small className='text-gray-400'>Musky and Soft</small> <br />

                        <div className="text-wrap py-4">
                            <span>Base Scent - </span> <span> Musk, White Elm and Mint</span> <br />
                            <span>Middle Scents - </span> <span> Cinnamon and Apricot </span> <br />
                            <span>Lower Scent - </span> <span> Rose Bud </span> <br />
                        </div>

                        <span className='italic'>“ A scent that leaves you positively anxious to smell more “</span> <br />

                        <button className={`${purpleBtnClass} w-1/3 my-3`}> Buy Now</button>
                    </div>

                    <div className="grid grid-cols-3 mt-5">
                        <div className="text-wrap text-3xl">
                            <span>$1.5K+</span> <br />
                            <span className='text-sm'>Revenue Generated</span>
                        </div>
                        <div className="text-wrap text-3xl">
                            <span>$10K+</span> <br />
                            <span className='text-sm'>Product Sale</span>
                        </div>
                        <div className="text-wrap text-3xl">
                            <span className='flex gap-x-2 items-center'>4.8 <FaStar size={10} /></span>
                            <span className='text-sm'>Revenue Generated</span>
                        </div>
                    </div>
                </div>

                <div className="img-wrap">
                    <img src="/asset/p1.png" alt="bestselling" />
                </div>
            </div>

        </div>
    )
}
