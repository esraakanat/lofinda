import React from 'react'
import Container from '../../../ui/Container'

export default function Intro({ setOpen }) {
    return (
        <div className="wrap intro">
            <Container>
                <div className="grid lg:grid-cols-2 py-32 min-h-[90vh] items-center ">
                    <div className="text-wrap text-white">
                        <div className="heading text-3xl lg:text-5xl font-extrabold mb-10">
                            <h1>
                                Ditch the Basic,
                                <span className='text-purple-400'>Unleash</span> your A-Game.
                            </h1>
                        </div>
                        <span className='text-md'>Our scents are more than just smells,
                            They're confidence in a bottle.
                            A turn-of-the-head kinda thing.
                            Ready to ditch the ordinary and embrace the extraordinary?
                        </span>

                        <div className="btn-wrap mt-10">
                            <button className='bg-white text-black shadow-xl p-3 px-5 w-1/2 rounded-full text-sm' onClick={() => setOpen(true)}>Join Waitlist <span aria-hidden="true">&rarr;</span></button>
                        </div>
                    </div>
                </div>
            </Container>
        </div>

    )
}
