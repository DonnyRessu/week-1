const UpgradePlan = () => {
    return (
        <>
        <div className="w-1/2 m-auto mt-20">
            <h1 className="text-white text-center text-3xl font-bold">Premium</h1>
            <p className="text-white mt-7 text-center">Bayar sekarang dan nikmati film-film yang kekinian dari <span className="text-red-600 font-bold">DUMBFLIX</span></p>
            <p className="text-white text-center"><span className="text-red-600 font-bold">DUMBFLIX</span> : 0981231321</p>
            <div className="text-center mt-5 mb-5">
                <input type="text" placeholder="Input your account number" className="w-80 text-zinc-200 bg-zinc-800 py-1 rounded left-1" />
            </div>
            <div className="flex justify-center">
                <label className="w-1/4 h-8 absolute flex" for="input" >
                    <p className="text-red-600 absolute z-10 bg-white ml-20 w-80 p-1 right-0 rounded bolder font-medium ">Attach proof of transfer</p>
                    <input type="file" className="bg-black ml-4" id="input"/>
                    <img src={require("../img/fileupload.png")}  className="absolute z-20 left-72" for="input"/>
                </label>
            </div>
            <div className="text-center">
                <button className="px-36 mt-14 p-1 bg-red-700 rounded text-white">Kirim</button>
            </div>
        </div>
        </>
    )
}

export default UpgradePlan