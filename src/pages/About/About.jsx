import React from 'react'
import Container from '../../ui/Container'
import Footer from '../../ui/Footer'
import Header from '../../ui/Header'

export default function About() {
    return (
        <div className="wrap">
            <Header black={true} />
            <div className="bg-con-about">
                <Container>
                    <div className="grid lg:grid-cols-3 py-32 gap-10 overflow-clip">
                        <div className="img-wrap">
                            <div className="flex justify-center gap-3 items-center   bg-back">
                                <div className="wrap1 flex gap-3  flex-col justify-center items-center">
                                    <img src="/asset/mask3.png" alt="Mask" className='lg:h-[350px] w-[100%]' />
                                    <img src="/asset/mask1.png" alt="Mask" className='lg:w-[130px]' />
                                </div>
                                <div className="wrap2 flex gap-3 flex-col justify-center items-center">
                                    <img src="/asset/mask2.png" alt="Mask" className='lg:w-[130px]' />
                                    <img src="/asset/mask4.png" alt="Mask" className='lg:h-[350px]' />
                                </div>
                            </div>
                        </div>

                        <div className="text-wrap col-span-2">
                            <div className="heading text-3xl lg:text-5xl text-primary font-bold mb-3">
                                <h1>Our Story</h1>
                            </div>
                            <div className="text text-sm">
                                Lofinda’s story begins many aeons ago, in a  town square, a vibrant tapestry of rust-colored earth and woven mats, doubled as a co-working space. Under the shade of ancient baobab trees, developers tapped away on laptops powered by portable solar panels. In the distance, the rhythmic pounding of the talking drums intermingled with the whirring of 3D printers crafting intricate designs. <br /> <br />

                                Chief Oloye, his voice rich and deep like fermented palm wine, addressed his advisors. "My esteemed council," he boomed, "I have a most fragrant dream! I envision a perfume, a concoction so divine, it will capture the very essence of Africa - the warmth of our sun, the vibrancy of our markets, the rhythm of our drums!" <br /> <br />

                                K, ever the pragmatist, stroked his beard thoughtfully. "An ambitious vision, Chief. But to bottle the essence of Africa, we'll need a server farm that rivals the palace itself!" <br /> <br />

                                S, his eyes gleaming, chimed in, "And a website that tells the story of this fragrance, a digital marketplace as lively as the bodija market!" <br /> <br />

                                X07 nodded, a sly smile playing on their lips. "And the design, Chief, the design that will allow users to virtually experience the perfume, to smell the savanna grasslands and feel the ocean breeze on their skin." <br /> <br />

                                Chief Oloye's smile widened. "By the ancestors, this is exactly what I envisioned! Now, let's get to work and create a perfume that will have the whole world dancing to the beat of Africa!" <br /> <br />

                                Thus began the grand adventure of Lofinda, a fragrance born from the dreams of a chief, the ingenuity of his advisors, and a healthy dose of African magic! <br /> <br />
                            </div>
                        </div>
                    </div>

                    <div className="quote text-center text-primary mb-16">
                        <p className='italic text-lg px-10 mb-10'>At Lofinda.ng, we believe that perfume is more than just a fragrance-it’s a personal signature, a form of self expression that captures the essence of who you are. Our Journey began in 2024, with a passion for creating scents that evoke emotions, memories and dreams.</p>

                        <span className=' font-extrabold text-xl'>~ Chief Oloye (CEO of Lofinda)</span>
                    </div>
                </Container>
            </div>
            <Footer />
        </div>
    )
}
