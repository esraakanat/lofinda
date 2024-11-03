import React from 'react'
import Container from '../../../ui/Container'
import { purpleBtnClass } from '../../../utils/classes'

export default function Abt() {
    const imgArr = [
        "mask1.png",
        "mask3.png",
        "mask2.png",
    ]
    return (
        <div className="wrap py-20 relative">
            <Container>
                <img src="/asset/8.png" alt="shine" className='absolute w-[400px] right-0 top-0' />
                <img src="/asset/7.png" alt="shine" className='absolute w-[400px] left-0 z-[-1]' />
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                    <div className="img-wrap flex justify-around items-center gap-5">
                        {imgArr.map((i, index) => (
                            <div className="wrap">
                                <img src={`/asset/${i}`} className='z-10' alt={i} />
                            </div>
                        ))}
                    </div>
                    <div className="text-wrap text-center">
                        <div className="heading">
                            <h1 className='text-4xl font-extrabold text-primary mb-4'>About Lofinda.ng</h1>
                        </div>
                        <div className="text-wrap">
                            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis vel blanditiis quis doloribus dolorem eveniet illo nostrum. Aliquid quia eius illum deserunt nulla quo aperiam placeat distinctio sit. Cum, magnam.</span> <br /> <br />
                            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis vel blanditiis quis doloribus dolorem eveniet illo nostrum. Aliquid quia eius illum deserunt nulla quo aperiam placeat distinctio sit. Cum, magnam.</span> <br /> <br />
                        </div>
                        <div className="btn-wrap">
                            <button className={`${purpleBtnClass} w-1/2`}> Read More</button>
                        </div>
                    </div>
                </div>

            </Container>
        </div>
    )
}
