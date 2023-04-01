import React, {useState} from 'react';
import Swal from 'sweetalert2';

export default function Login(props) {
    // const [show, setShow] = useState(false)
    // const[status, setStatus] = useState(false)
    const handleClose = () => props.signin2(false)
    const handleShow = () => props.signin2(true)

    // const loginHandle = () => {
    //     props.signin(true) 
    //     handleShow()
    // }

    const loginToRegister = () => {
        props.signin2(false)
        props.signin5(true)
    }
    
    const loginValidate = () => {
        let getEmail = JSON.parse(localStorage.getItem(`1`)) 
        console.log(getEmail.password)
        const getEmailLogin = document.getElementById("emaillogin").value   
        const getPasswordLogin = document.getElementById("passwordlogin").value

        console.log(getEmailLogin, getPasswordLogin)
        
        let valuelength = localStorage.length
        for(let i = 1 ; i <= valuelength ; i++) {
            let getEmail = JSON.parse(localStorage.getItem(`${i}`))
            let getPass = JSON.parse(localStorage.getItem(`${i}`))
            console.log(getEmail)
            
            if(getEmail.email === getEmailLogin && getPass.password === getPasswordLogin){
                props.signin4(true) 
                props.signin(true)
                Swal.fire({
                    icon:'success',
                    title: 'MANTAP ANJING !!!',
                    showConfirmButton: false,
                    timer: 1500
                })
            }else if(getEmailLogin === ""  && getPasswordLogin=== ""){
                Swal.fire({
                    icon:'error',
                    title: 'WAJIB DIISI SATTT !!!',
                    showConfirmButton: false,
                    timer: 1500
                })
            }else{
                props.signin4(false)
                Swal.fire({
                    icon:'error',
                    title: 'SALAH KONTOL !!!',
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        }
        
        
        }
        const Execution = () => {
            loginValidate();
            // loginHandle();
        }
        
        return (
        <>
        <button onClick={handleShow} className="bg-red-700 px-6 rounded text-white">Login</button>
        {props.signin1 ? (
        <>
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none" >
            <div className="w-full p-6 m-auto bg-neutral-900 rounded-md shadow-md lg:max-w-xl">

                <h1 className="text-3xl font-semibold text-white">
                   Login
                </h1>
                <div className="mt-6" >
                    <div className="mb-2">
                        <input type="email" className="block w-full px-4 py-2 mt-2  bg-neutral-600 border rounded-md" placeholder='Email' id="emaillogin" />
                    </div>
                    <div className="mb-2">
                        <input type="password" className="block w-full px-4 py-2 mt-2 te bg-neutral-600  border rounded-md" placeholder='Password' id="passwordlogin" />
                    </div>
                    <div className="mt-6">
                        <button onClick={() => {Execution()}} className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-red-700 rounded-md ">Login</button>
                    </div>
                </div>
                <p className="mt-8 text-xs font-light text-center text-gray-700">Don't have an account?
                    <a href="" onClick={() => loginToRegister()} className="font-medium text-zinc-600 hover:underline"> Click Here</a>
                </p>
            </div>
        
        
        <div  onClick={handleClose} className=" absolute justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 -z-50 outline-none focus:outline-none bg-black opacity-70" >
        </div>
        </div>
        </>
        ) : null}
        </>
    );
}