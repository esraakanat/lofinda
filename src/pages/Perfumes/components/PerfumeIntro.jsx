import React from 'react'
import Container from '../../../ui/Container'
import { FaArrowDown } from 'react-icons/fa'

export default function PerfumeIntro() {
    return (
        <div className="wrap py-32 perfume-intro">
            <Container>
                <div className="text-wrap min-h-[50vh] flex justify-center items-center text-center text-lg font-bold">
                    <div className="wrap">
                        <span className='italic'>We sell scents, body mist, rolls, perfumes and anything aroma related, <br /> just to ensure your absolute needs are met. <br /> We believe in smelling good, Don’t you?</span>
                        <div className="wrap mt-8 text-primary">
                            <span className='font-thin'>SCROLL DOWN</span>
                            <FaArrowDown className='mx-auto' />
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}
