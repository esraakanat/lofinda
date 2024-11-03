import React from "react";
import Header from "../../ui/Header";
import Footer from "../../ui/Footer";
import Container from "../../ui/Container";
import {
  FaLinkedin,
  FaLocationPin,
  FaMapLocation,
  FaXTwitter,
} from "react-icons/fa6";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaMobile,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa";
import { purpleBtnClass } from "../../utils/classes";

export default function Contact() {
  return (
    <>
      <Header black={true} />
      <div className="wrap perfume-intro">
        <div className="crumbs bg-black bg-opacity-10 my-24 py-16 text-center text-3xl font-bold scroll-m-10 text-black">
          Home / <span className="text-primary">Contact Us</span>
        </div>
        <Container>
          <div className="grid lg:grid-cols-2 py-10 gap-10">
            <div className="wrap leading-10 font-thin text-2xl">
              <h1 className="text-3xl font-bold text-black">Contact Page</h1>
              <div className="grid grid-cols-2 gap-10 mt-5">
                <div className="flex gap-3 items-center">
                  <FaLocationPin size={40} className="text-primary" />
                  <p>Aba ibeji odo Ona kekere arapaja ibadan</p>
                </div>
                <div className="flex gap-3 items-center">
                  <FaEnvelope size={40} className="text-primary" />
                  <a href="mailto:lofindang@zohomail.com">
                    lofindang@zohomail.com
                  </a>
                </div>
                <div className="flex gap-3 items-center">
                  <FaWhatsapp size={40} className="text-primary" />
                  <a href="https://wa.me/8127340974">+2348127340974</a>
                </div>
                <div className="flex gap-3 items-center">
                  <FaFacebook size={40} className="text-primary" />
                  <a href="https://www.facebook.com/share/ncTZyUwZVi367VHV/">
                    LofindaNg
                  </a>
                </div>
                <div className="flex gap-3 items-center">
                  <FaInstagram size={40} className="text-primary" />
                  <a href=" https://www.instagram.com/lofindang?igsh=YjgyeTNpNG5xdG14">
                    @Lofindang
                  </a>
                </div>
                <div className="flex gap-3 items-center">
                  <FaXTwitter size={40} className="text-primary" />
                  <a href="https://x.com/Lofindang?t=lPvRXEsbADt4H-CZyUfwCg&s=09">
                    @Lofindang
                  </a>
                </div>
                <div className="flex gap-3 items-center">
                  <FaLinkedin size={40} className="text-primary" />
                  <a href="https://www.linkedin.com/company/lofinda-ng/">
                    Lofinda-ng
                  </a>
                </div>
                <div className="flex gap-3 items-center">
                  <FaTiktok size={40} className="text-primary" />
                  <a href="https://www.tiktok.com/@lofindang?_t=8qnRoU996QQ&_r=1">
                    @lofindang
                  </a>
                </div>
              </div>
            </div>

            <div className="form-wrap">
              <form className="p-10 shadow-xl bg-white lg:bg-transparent">
                <input
                  type="text"
                  className="border border-gray-800 p-3 bg-transparent mb-5 w-full"
                  placeholder="Name"
                />
                <input
                  type="text"
                  className="border border-gray-800 p-3 bg-transparent mb-5 w-full"
                  placeholder="Email"
                />
                <input
                  type="text"
                  className="border border-gray-800 p-3 bg-transparent mb-5 w-full"
                  placeholder="Subject"
                />
                <textarea
                  rows={6}
                  type="text"
                  className="border border-gray-800 p-3 bg-transparent mb-5 w-full"
                  placeholder="Type your message..."
                />

                <div className="btn-wrap">
                  <button className={`${purpleBtnClass}`}> Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </Container>
      </div>
      <Footer />
    </>
  );
}
