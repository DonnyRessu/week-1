import { useState } from "react"
import Login from "./Login"
import Register from "./register.js"
import { Link } from "react-router-dom"
import DropdownProfile from "./dropdownprofile"

function Header(props) {
    const [show, setShow] = useState(false)

    // const [show, setShow] = useState(false)
    const[status, setStatus] = useState(false)

    const[regist, setRegist] = useState(false)

    const[dropdown, setDropdown]= useState(false)

    const RegisterLogin = () => {
        return(
            <>
            <Register register={setRegist} register2={regist} regist3={show} regist4={setShow}/>
            <Login signin={props.masuk} signin1={show} signin2={setShow} signin3={status} signin4={setStatus} signin5={setRegist} />
            </>
        )
    }

    const Profile = () =>{
        return(
            <>
                <img onClick={() => setDropdown(!dropdown)} className="w-8" src={require("../img/logoProfil.png")} />
                {dropdown ? <DropdownProfile profil1={dropdown} profil2={setDropdown}/> : null}
            </>
        )
    }
    

    return(
        <>
            <nav className="flex h-12 bg-neutral-900 justify-between items-center"> 
                <ul className="flex text-white gap-5 ml-6">
                    <Link to={"/"}><li>Home</li></Link>
                    <Link to={"/tvshows"}><li>Tv Shows</li></Link>
                    <Link to={"/movies"}><li>Movies</li></Link>
                </ul>
                <div>
                    <img src= {require("../img/logo.png")} />
                </div>
                <div className="flex gap-5 mr-6">
                    {props.login ? <Profile /> : <RegisterLogin /> }
                </div>
            </nav>
        </>
    )
}

export default Header