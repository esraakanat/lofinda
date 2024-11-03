import React, { useEffect, useState } from 'react';
import Header from '../../../ui/Header';
import { FaClipboard, FaEnvelope, FaHome, FaUser } from 'react-icons/fa';
import { purpleBtnClass } from '../../../utils/classes';
import Footer from '../../../ui/Footer';
import Container from '../../../ui/Container';
import userApiReq from '../../../utils/userApiWithAuth';
import swalNotify from '../../../utils/swal';
import { BarLoader } from 'react-spinners';

export default function Profile() {
    const [loading, setLoading] = useState(false)
    const [userData, setUserData] = useState({});
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [address, setAddress] = useState('');
    const [address2, setAddress2] = useState('');

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        try {
            const response = await userApiReq('/api/user/data', 'GET');
            setUserData(response.message);
            setUsername(response.message.username);
            setEmail(response.message.email);
            setFirstname(response.message.firstname);
            setLastname(response.message.lastname);
            setAddress(response.message.address);
            setAddress2(response.message.address2);
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    };

    const handleSave = async () => {
        // Logic to save the updated data
        try {
            setLoading(true)
            const data = {
                username,
                email,
                firstname,
                lastname,
                address,
                address2,
            }
            const response = await userApiReq('/api/user/data/update', "POST", data)
            console.log(response)
            swalNotify('success', "Updated", "Your info has been updated successfully")
        } catch (error) {
            console.log(error)
            swalNotify('error', "Error", error.response.data.message)

        }
        finally { setLoading(false) }
    };

    return (
        <div className="wrap mt-[130px]">
            <Header black={true} />

            <Container>
                <div className="profile-wrap py-10">
                    <div className="md:w-1/2 rounded-3xl text-sm bg-primary bg-opacity-10 p-10 mx-auto flex flex-col gap-5 ">

                        <div className="input-wrap">
                            <label>Username</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
                                    <FaUser className="text-primary" />
                                </div>
                                <input
                                    type="text"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    className="bg-gray-50 border text-gray-800 text-sm rounded-full block w-full ps-10 p-3 dark:bg-transparent border-primary placeholder-gray-400 focus:scale-110 transition-all focus:bg-primary focus:text-white outline-none"
                                    placeholder="Username"
                                    required
                                />
                            </div>
                        </div>

                        <div className="input-wrap">
                            <label>Email</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
                                    <FaEnvelope className="text-primary" />
                                </div>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="bg-gray-50 border text-gray-800 text-sm rounded-full block w-full ps-10 p-3 dark:bg-transparent border-primary placeholder-gray-400 focus:scale-110 transition-all focus:bg-primary focus:text-white outline-none"
                                    placeholder="Email"
                                    readOnly
                                    required
                                />
                            </div>
                        </div>

                        <div className="flex gap-5">
                            <div className="input-wrap">
                                <label>Firstname</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
                                        <FaClipboard className="text-primary" />
                                    </div>
                                    <input
                                        type="text"
                                        value={firstname}
                                        onChange={(e) => setFirstname(e.target.value)}
                                        className="bg-gray-50 border text-gray-800 text-sm rounded-full block w-full ps-10 p-3 dark:bg-transparent border-primary placeholder-gray-400 focus:scale-110 transition-all focus:bg-primary focus:text-white outline-none"
                                        placeholder="First Name"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="input-wrap">
                                <label>Lastname</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
                                        <FaClipboard className="text-primary" />
                                    </div>
                                    <input
                                        type="text"
                                        value={lastname}
                                        onChange={(e) => setLastname(e.target.value)}
                                        className="bg-gray-50 border text-gray-800 text-sm rounded-full block w-full ps-10 p-3 dark:bg-transparent border-primary placeholder-gray-400 focus:scale-110 transition-all focus:bg-primary focus:text-white outline-none"
                                        placeholder="Last Name"
                                        required
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="input-wrap">
                            <label>Address 1</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
                                    <FaHome className="text-primary" />
                                </div>
                                <input
                                    type="text"
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                    className="bg-gray-50 border text-gray-800 text-sm rounded-full block w-full ps-10 p-3 dark:bg-transparent border-primary placeholder-gray-400 focus:scale-110 transition-all focus:bg-primary focus:text-white outline-none"
                                    placeholder="Address 1"
                                    required
                                />
                            </div>
                        </div>
                        <div className="input-wrap">
                            <label>Address 2</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
                                    <FaHome className="text-primary" />
                                </div>
                                <input
                                    type="text"
                                    value={address2}
                                    onChange={(e) => setAddress2(e.target.value)}
                                    className="bg-gray-50 border text-gray-800 text-sm rounded-full block w-full ps-10 p-3 dark:bg-transparent border-primary placeholder-gray-400 focus:scale-110 transition-all focus:bg-primary focus:text-white outline-none"
                                    placeholder="Address 2"
                                    required
                                />
                            </div>
                        </div>

                        <div className="btn-wrap">
                            <button onClick={handleSave} className={`${purpleBtnClass} hover:scale-110 transition-all hover:bg-opacity-85`}>
                            {loading ? <BarLoader color="#36d7b7" /> : "Save"}
                            </button>
                        </div>
                    </div>
                </div>
            </Container>
            <Footer />
        </div>
    );
}
