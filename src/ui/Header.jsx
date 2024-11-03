import React, { useContext, useState, useEffect } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, ShoppingBagIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaRegBookmark, FaShapes, FaSignOutAlt, FaUser } from "react-icons/fa";
import { FaRegCircleUser } from "react-icons/fa6";
import { BsMinecartLoaded } from "react-icons/bs";
import { ImProfile } from "react-icons/im";
import { IoWalletOutline } from "react-icons/io5";
import { getCookie, removeCookie } from "../utils/cookies";
import swalNotify from "../utils/swal";
import { ShoppingCartContext } from "../context/ShoppingCartContext";

export default function Header({ black }) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const navigation = [
        { name: "Home", href: "/" },
        { name: "About Us", href: "/about" },
        { name: "Perfumes", href: "/perfumes" },
        { name: "Contact Us", href: "/contact" },
    ];
    const navi = useNavigate();

    // context 
    const { state } = useContext(ShoppingCartContext);

    // User Links 
    const userNavigation = [
        { name: "Profile", href: "/user/profile", icon: <ImProfile /> },
        { name: "Orders", href: "/user/order/history", icon: <BsMinecartLoaded /> },
        { name: "Wishlist", href: "/user/wishlist", icon: <FaRegBookmark /> },
        { name: "Wallet", href: "/", icon: <IoWalletOutline /> },
    ];
    const token = getCookie("auth-user-token");
    const [show, setShow] = useState(false);

    const logOut = () => {
        removeCookie("auth-user-token");
        swalNotify('info', "Logged out", "You have successfully logged out");
        setShow(false);
    };

    // Handle scroll effect
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header className={`fixed inset-x-0 top-0 z-50 transition-all ${isScrolled ? 'bg-black bg-opacity-70 backdrop-blur-lg' : 'bg-opacity-10 backdrop-blur-md'} text-gray-50 shadow`}>
            <nav
                className="flex items-center justify-between p-6 lg:px-8"
                aria-label="Global"
            >
                <div className="flex lg:flex-1">
                    <a href="/" className="-m-1.5 p-1.5">
                        <span className="sr-only">Your Company</span>
                        <img
                            className="h-8 w-auto"
                            src="/asset/logo.png"
                            alt="Lofinda"
                        />
                    </a>
                </div>
                <div className="flex items-center gap-2 lg:hidden">
                    {token && (
                        <div className="wrap relative flex">
                            <button
                                type="button"
                                className={`-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 ${isScrolled ? 'text-white' : ((black && !isScrolled) ? 'text-neutral-950' : 'text-gray-50')}`}
                            >
                                <span className="sr-only">Open main menu</span>
                                <FaRegCircleUser className="h-7 w-7" aria-hidden="true" onClick={() => setShow(!show)} />
                            </button>
                            {show && (
                                <div className="absolute text-black w-[300px] right-0 top-full p-5 rounded-lg bg-gray-100">
                                    <ul>
                                        {userNavigation.map((i, index) => (
                                            <li className="hover:bg-primary hover:bg-opacity-15 p-3 rounded-lg transition-all" key={index}><Link to={i.href} className="flex gap-2 items-center">{i.icon} {i.name}</Link></li>
                                        ))}
                                        <li className="hover:bg-red-500 hover:bg-opacity-15 p-3 rounded-lg transition-all text-red-600" onClick={logOut}><Link className="flex gap-2 items-center">{<FaSignOutAlt />} {"Logout"}</Link></li>

                                    </ul>
                                </div>
                            )}
                        </div>
                    )}
                    <div className="wrap relative flex">
                        <button
                            type="button"
                            className={`-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 ${isScrolled ? 'text-white' : ((black && !isScrolled) ? 'text-neutral-950' : 'text-gray-50')}`}
                            onClick={() => navi('/perfumes/cart')}
                        >
                            <span className="sr-only">Open main menu</span>
                            <ShoppingBagIcon className="h-7 w-7" aria-hidden="true" />

                            {/* Cart Amount */}
                            <div className="wrap absolute bottom-[50%] left-[60%]">
                                {state.items.length > 0 && (
                                    <span className="bg-primary text-white text-xs rounded-full p-1 px-2">{state.items.length}</span>
                                )}
                            </div>
                        </button>
                    </div>
                    <button
                        type="button"
                        className={`-m-2.5 inline-flex items-center justify-center rounded-md p-2.5  ${isScrolled ? 'text-white' : ((black && !isScrolled) ? 'text-neutral-950' : 'text-gray-50')}`}
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-8 w-8" aria-hidden="true" />
                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-12">
                    {navigation.map((item) => (
                        <NavLink
                            key={item.name}
                            to={item.href}
                            className={`text-sm font-semibold leading-6 ${isScrolled ? 'text-white' : ((black && !isScrolled) ? 'text-neutral-950' : 'text-gray-50')}`}
                        >
                            {item.name}
                        </NavLink>
                    ))}
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-5 items-center">

                    <div className="wrap relative flex">
                        <button
                            type="button"
                            className={`-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 ${isScrolled ? 'text-white' : ((black && !isScrolled) ? 'text-neutral-950' : 'text-gray-50')}`}
                            onClick={() => navi('/perfumes/cart')}
                        >
                            <span className="sr-only">Open main menu</span>
                            <ShoppingBagIcon className="h-7 w-7" aria-hidden="true" />

                            {/* Cart Amount */}
                            <div className="wrap absolute bottom-[50%] left-[60%]">
                                {state.items.length > 0 && (
                                    <span className="bg-primary text-white text-xs rounded-full p-1 px-2">{state.items.length}</span>
                                )}
                            </div>
                        </button>
                    </div>
                    {token && (
                        <div className="wrap relative flex">
                            <button
                                type="button"
                                className={`-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 ${isScrolled ? 'text-white' : ((black && !isScrolled) ? 'text-neutral-950' : 'text-gray-50')}`}
                            >
                                <span className="sr-only">Open main menu</span>
                                <FaRegCircleUser className="h-7 w-7" aria-hidden="true" onClick={() => setShow(!show)} />
                            </button>
                            {show && (
                                <div className="absolute text-black w-[300px] right-0 top-full p-5 rounded-lg bg-gray-100">
                                    <ul>
                                        {userNavigation.map((i, index) => (
                                            <li className="hover:bg-primary hover:bg-opacity-15 p-3 rounded-lg transition-all" key={index}><Link to={i.href} className="flex gap-2 items-center">{i.icon} {i.name}</Link></li>
                                        ))}
                                        <li className="hover:bg-red-500 hover:bg-opacity-15 p-3 rounded-lg transition-all text-red-600" onClick={logOut}><Link className="flex gap-2 items-center">{<FaSignOutAlt />} {"Logout"}</Link></li>

                                    </ul>
                                </div>
                            )}
                        </div>
                    )}

                    {!token && (
                        <>
                            <a
                                href="#"
                                className="text-sm bg-primary p-3 px-6 rounded-full font-semibold leading-6 text-white btn bg-pri"
                                onClick={() => navi("/auth/login")}
                            >
                                Log in <span aria-hidden="true">&rarr;</span>
                            </a>
                            <a
                                href="#"
                                className="text-sm bg-secondary p-3 px-6 rounded-full flex items-center gap-2 font-semibold leading-6 text-white btn bg-pri"
                                onClick={() => navi("/auth/signup")}
                            >
                                Signup <span aria-hidden="true"><FaUser /></span>
                            </a>
                        </>
                    )}
                </div>
            </nav>

            <Dialog
                as="div"
                className="lg:hidden"
                open={mobileMenuOpen}
                onClose={setMobileMenuOpen}
            >
                <div className="fixed inset-0 z-50" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-black bg-opacity-50 backdrop-blur-xl px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-50/10">
                    <div className="flex items-center justify-between">
                        <a href="/" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <img
                                className="h-8 w-auto"
                                src="/asset/logo.png"
                                alt="Lofinda"
                            />
                        </a>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-black"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                {navigation.map((item) => (
                                    <NavLink
                                        key={item.name}
                                        to={item.href}
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-50 hover:text-gray-50 hover:bg-gray-50"
                                    >
                                        {item.name}
                                    </NavLink>
                                ))}
                            </div>
                            {!token && (
                                <div className="py-6">
                                    <a
                                        href="#"
                                        className="-mx-3 btn bg-primary text-center p-3 rounded-full px-6  block py-2.5 text-base font-semibold leading-7 text-white hover:bg-gray-50"
                                        onClick={() => navi("/auth/login")}
                                    >
                                        Log in
                                    </a>
                                </div>
                            )}
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    );
}
