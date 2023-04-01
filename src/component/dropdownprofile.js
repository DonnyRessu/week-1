import { Link } from "react-router-dom"

const DropdownProfile = (props) => {
    return(
        <>
        <div className="bg-stone-900 w-44 m-auto rounded mt-5 absolute z-20 right-12 top-10 p-4">
        <image src={require("../img/Polygon 1.png")} className=" absolute z-50 bg-red-500"/>
            <div className="flex mt-1">
                <img src={require("../img/logouser.png")} />
                <Link to={"/profile"}> <p className="text-white ml-2">Profile</p> </Link>
            </div>
            <div className="flex mt-2">
                <img src={require("../img/logopayment.png")} />
                <Link to={"/upgradeplan"}><p className="text-white ml-2">Pay</p></Link>
            </div>
            <div className="flex mt-3">
                <img src={require("../img/logout 1.png")} />
                <p className="text-white ml-2">Logout</p>
            </div>
        </div>
        </>
    )
}

export default DropdownProfile