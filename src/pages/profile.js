const Profile = () => {
    return(
        <>
        <div className="w-1/2 h-80 bg-zinc-800 m-auto mt-20 flex justify-between items-center rounded">
            <div className="mx-7">
                <h1 className="text-white mb-3">Personal Info</h1>
                <div className="flex mb-3">
                    <img src={require("../img/logonama.png")} className="w-8 h-8" />
                    <div className="mx-5">
                        <p className="text-white text-xs">Sayang</p>
                        <p className="text-gray-600 text-xs">Full Name</p>
                    </div>
                </div>
                <div className="flex mb-3">
                    <img src={require("../img/logoemail.png")} className="w-8 h-8" />
                    <div className="mx-5">
                        <p className="text-white text-xs">sayangkamu@gmail.com</p>
                        <p className="text-gray-600 text-xs">Email</p>
                    </div>
                </div>
                <div className="flex mb-3">
                    <img src={require("../img/logovip.png")} className="w-8 h-8" />
                    <div className="mx-5">
                        <p className="text-white text-xs">Active</p>
                        <p className="text-gray-600 text-xs">Status</p>
                    </div>
                </div>
                <div className="flex mb-3">
                    <img src={require("../img/loggender.png")} className="w-8 h-8" />
                    <div className="mx-5">
                        <p className="text-white text-xs">Netral</p>
                        <p className="text-gray-600 text-xs">Gender</p>
                    </div>
                </div>
                <div className="flex mb-3">
                    <img src={require("../img/logotelpon.png")} className="w-8 h-8" />
                    <div className="mx-5">
                        <p className="text-white text-xs">0821-8922-1068</p>
                        <p className="text-gray-600 text-xs">Mobile Phone</p>
                    </div>
                </div>
                <div className="flex mb-3   ">
                    <img src={require("../img/logoalamat.png")} className="w-8 h-8" />
                    <div className="mx-5">
                        <p className="text-white text-xs">Di hatimu</p>
                        <p className="text-gray-600 text-xs">Adress</p>
                    </div>
                </div>
            </div>
            <div className="mx-7">
                <img src={require("../img/fotoprofile.png")} className="h-56 mb-2 rounded"  />
                <button className="bg-red-800 px-4 py-3 text-white rounded" >Change Photo Profile</button>
            </div>
        </div>
        </>
    )
}

export default Profile