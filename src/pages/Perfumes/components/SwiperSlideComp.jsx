import React from 'react'

export default function SwiperSlideComp({ header, text, btnBg, img, white }) {
    const btnClass = 'rounded-full p-3 px-5'

    return (
        <div className="wrap">
            <div className="wrap py-32 lg:py-auto  lg:min-h-screen flex items-center" style={{ background: `url('/asset/${img}')` }}>
                <div className={`text-wrap px-[16px] lg:ml-[80px] ${white ? "text-neutral-100" : "text-neutral-900"}`}>
                    <div className="header text-4xl font-bold">
                        <h1>{header}</h1>
                    </div>
                    <div className="text lg:w-1/2 my-5">
                        <p>{text}</p>
                    </div>
                    <div className="btn-wrap">
                        <a href="#">
                            <button className={`${btnClass} ${btnBg} text-white`}> View Details</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
