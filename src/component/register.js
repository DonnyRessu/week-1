import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function Register(props) {
    // const [show, setShow] = useState(false)
    const handleClose = () => props.register(false)
    const handleShow = () => props.register(true)

    const registerToLogin = () => {
        props.register(false)
        props.regist4(true)
    }

    const registerValue = () => {
        let idIncerement = localStorage.length + 1
        const getEmail = document.getElementById("email").value
        const getPassword = document.getElementById("password").value
        const getName = document.getElementById("name").value
        const getGender = document.getElementById("gender").value
        const getPhone = document.getElementById("phone").value
        const getAddress = document.getElementById("address").value

        const valueForm = {
            id: idIncerement,
            email: getEmail,
            password: getPassword,
            name: getName,
            gender: getGender,
            phone: getPhone,
            address: getAddress
        }
        console.log(valueForm)

        
        localStorage.setItem(`${idIncerement}`, JSON.stringify(valueForm))
        Swal.fire({
            icon:'success',
            title: 'Register Successfully',
            showConfirmButton: false,
            timer: 1500
        })
    }

    return (
        <>
        <button onClick={handleShow} className="bg-white px-6 rounded text-red-600">Register</button>
        {props.register2 ? (
        <>
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none" >
            <div className="w-full p-6 m-auto bg-neutral-900 rounded-md shadow-md lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-white">
                   Register
                </h1>
                <div className="mt-6">
                    <div className="mb-2">
                        <input type="email" className="block w-full px-4 py-2 mt-2  bg-neutral-600 border rounded-md" placeholder='Email' id="email"/>
                    </div>
                    <div className="mb-2">
                        <input type="password" className="block w-full px-4 py-2 mt-2  bg-neutral-600 border rounded-md" placeholder='Password' id="password"/>
                    </div>
                    <div className="mb-2">
                        <input type="text" className="block w-full px-4 py-2 mt-2  bg-neutral-600 border rounded-md" placeholder='Full Name' id="name"/>
                    </div>
                    <div className="mb-2">
                        <input type="text" className="block w-full px-4 py-2 mt-2  bg-neutral-600 border rounded-md" placeholder='Gender' id="gender"/>
                    </div>
                    <div className="mb-2">
                        <input type="text" className="block w-full px-4 py-2 mt-2  bg-neutral-600 border rounded-md" placeholder='Phone' id="phone"/>
                    </div>
                    <div className="mb-2">
                        <input type="text" className="block w-full px-4 py-2 mt-2  bg-neutral-600 border rounded-md" placeholder='Adress' id="address"/>
                    </div>
                    <div className="mt-6">
                        <button onClick={registerValue} className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-red-700 rounded-md ">Register</button>
                    </div>
                </div>
                <p className="mt-8 text-xs font-light text-center text-gray-700">Don't have an account?
                    <a href="#"  onClick={() => registerToLogin()} className="font-medium text-zinc-600 hover:underline"> Click Here</a>
                </p>
            </div>
        <div  onClick={handleClose} className=" absolute justify-center items-center flex overflow-x-hidden overflow-y-auto inset-0 -z-50 outline-none focus:outline-none bg-black opacity-70" >
        </div>
        </div>
        </>
        ) : null}
        </>
    );
}