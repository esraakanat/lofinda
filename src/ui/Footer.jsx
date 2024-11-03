import React from 'react'
import { purpleBtnClass } from '../utils/classes'
import Container from './Container'

export default function Footer() {
    const socialImg = ["instagram.png", "x.png", "linkedin.png"]
    return (
        <div className="wrap bg-secondary">
            <Container>
                <div className="grid lg:grid-cols-4 py-16 items-center gap-10">
                    <div className="logo-wrap">
                        <div className="img-wrap py-5 text-gray-100">
                            <img src="/logo.png" alt="Lofinda.ng" className='w-[200px] mb-2' />
                            <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum.</span>
                        </div>

                        <div className="newsletter">
                            <span className='font-bold text-lg text-primary'>Subscribe to our channel</span>

                            <div className="input-wrap flex border-[1px] border-primary rounded-full mt-2">
                                <input type="text" className='w-full bg-transparent border-0 rounded-l-full px-3' placeholder='Enter your email' /> <button className={`${purpleBtnClass}`}> Subscribe</button>
                            </div>
                        </div>
                    </div>
                    <div className="box-wrap col-span-3">
                        <div className="grid grid-cols-2 lg:grid-cols-3 gap-10">
                            <div className="box text-gray-300">
                                <div className="heading font-bold text-xl text-primary">
                                    <span>Quick Link</span>
                                </div>
                                <div className="wrap">
                                    <ul className='leading-9'>
                                        <li><a href="#">Shop</a></li>
                                        <li><a href="#">About Us</a></li>
                                        <li><a href="#">Delivery</a></li>
                                        <li><a href="#">Brand</a></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="box text-gray-300">
                                <div className="heading font-bold text-xl text-primary">
                                    <span>Quick Link</span>
                                </div>
                                <div className="wrap">
                                    <ul className='leading-9'>
                                        <li><a href="#">Payment</a></li>
                                        <li><a href="#">Refund</a></li>
                                        <li><a href="#">Delivery Policy</a></li>
                                        <li><a href="#">FAQs</a></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="box text-gray-300">
                                <div className="heading font-bold text-xl text-primary">
                                    <span>Quick Link</span>
                                </div>
                                <div className="wrap">
                                    <ul className='leading-9'>
                                        <li>123, Street name, Lagos, Nigeria</li>
                                        <li>+234 (0)80XXXXXXXXX</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="caption flex justify-between items-center py-5 border-t-[1px] border-t-primary">
                    <span className='text-white text-lg'>&copy; 2024. Alejo. All rights reserved.</span>
                    <div className="img-wrap flex gap-5 items-center">
                        {socialImg.map((i, index) => (
                            <img src={`/asset/${i}`} alt={i} />
                        ))}
                    </div>
                </div>
            </Container>
        </div>
    )
}
