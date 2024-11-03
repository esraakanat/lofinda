import { Fragment, useEffect, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { BarLoader } from 'react-spinners'
import { FaCheckSquare, FaEnvelope, FaPhone, FaUser } from 'react-icons/fa'
import { purpleBtnClass } from '../../../utils/classes'
import apiRequest from '../../../utils/api-request'
import { getCookie } from '../../../utils/cookies'

export default function Waitlist({ open, setOpen }) {
    const [loading, setLoading] = useState(false)

    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [phone_number, setPhone_number] = useState('')
    const isJoined = window.localStorage.getItem('join')

    const cancelButtonRef = useRef(null)

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            setLoading(true)
            const data = { firstname, lastname, email, phone_number }
            const response = await apiRequest('/api/waitlist', 'POST', data)
            console.log(response)
            window.localStorage.setItem("join", "yes")
        } catch (error) {
            console.log(error)

            alert(error.response.data.message)
        } finally { setLoading(false) }
    }
    useEffect(() => {
        setTimeout(() => {
            setOpen(true)
        }, 15000);
    }, [])
    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog className="relative z-100" initialFocus={cancelButtonRef} onClose={setOpen}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed  inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 z-[100] w-screen backdrop-blur-lg overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0 mt-14">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 ">
                                {isJoined && (
                                    <div className="wrap p-10 text-center">
                                        <div className="flex justify-center items-center">
                                            <FaCheckSquare className='text-primary mb-5' size={50} />
                                        </div>

                                        <h1 className='font-bold text-2xl'>Thank you for Joining the waitlist</h1>
                                        <span className='text-primary'>You'll recieve email when we go live...</span> <br /> <br />

                                        <small className='italic'>Website launching soon</small>
                                    </div>
                                )}
                                {!isJoined && (
                                    <div className="bg-white py-10">
                                        <div className="wrap">
                                            <div className="img-wrap">
                                                <img src="/asset/waitlist-img.png" alt="Waitlist" className='mx-auto' />
                                            </div>
                                            <div className="form-wrap p-5">
                                                <div className="header text-center mb-5">
                                                    <h3 className='font-bold text-xl'>Join the Waitlist</h3>
                                                    <span className='text-sm'>You believe in our dreams too? Be one of the first to know when we go live and fully operational.</span>
                                                </div>

                                                <form className="input-wrp" onSubmit={handleSubmit}>
                                                    <div className="grid lg:grid-cols-2 gap-5">
                                                        <div className="relative">
                                                            <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
                                                                <FaUser className='text-primary' />
                                                            </div>
                                                            <input
                                                                type="text"
                                                                aria-describedby="helper-text-explanation"
                                                                className="bg-gray-50 border text-gray-800 text-sm rounded-full block w-full ps-10 p-3 dark:bg-transparent border-primary placeholder-gray-400"
                                                                placeholder="First Name"
                                                                required
                                                                value={firstname}
                                                                onChange={(e) => setFirstname(e.target.value)}
                                                            />
                                                        </div>

                                                        <div className="relative">
                                                            <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
                                                                <FaUser className='text-primary' />
                                                            </div>
                                                            <input
                                                                type="text"
                                                                aria-describedby="helper-text-explanation"
                                                                className="bg-gray-50 border text-gray-800 text-sm rounded-full block w-full ps-10 p-3 dark:bg-transparent border-primary placeholder-gray-400"
                                                                placeholder="Last Name"
                                                                required
                                                                value={lastname}
                                                                onChange={(e) => setLastname(e.target.value)}
                                                            />
                                                        </div>

                                                        <div className="relative">
                                                            <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
                                                                <FaEnvelope className='text-primary' />
                                                            </div>
                                                            <input
                                                                type="email"
                                                                aria-describedby="helper-text-explanation"
                                                                className="bg-gray-50 border text-gray-800 text-sm rounded-full block w-full ps-10 p-3 dark:bg-transparent border-primary placeholder-gray-400"
                                                                placeholder="Email"
                                                                required
                                                                value={email}
                                                                onChange={(e) => setEmail(e.target.value)}
                                                            />
                                                        </div>
                                                        <div className="relative">
                                                            <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
                                                                <FaPhone className='text-primary' />
                                                            </div>
                                                            <input
                                                                type="text"
                                                                aria-describedby="helper-text-explanation"
                                                                className="bg-gray-50 border text-gray-800 text-sm rounded-full block w-full ps-10 p-3 dark:bg-transparent border-primary placeholder-gray-400"
                                                                placeholder="Phone Number"
                                                                required
                                                                value={phone_number}
                                                                onChange={(e) => setPhone_number(e.target.value)}
                                                            />
                                                        </div>

                                                        <div className="col-span-2">
                                                            <button className={`${purpleBtnClass} w-full flex justify-center`} disabled={loading}> {loading ? <BarLoader color="#36d7b7" /> : "Submit"} </button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}
