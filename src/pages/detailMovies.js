const DetailMovies = () => {
    return(
        <>
        <div>
            <img src={require("../img/PlayerMovies.png")} />
            <div className="flex mt-10 mx-14 mb-5">
                <div className="flex gap-10">
                    <div>
                        <img src={require("../img/jokerkecil.png")} className="h-64"/>
                    </div>
                    <div className="w-1/2">
                        <h1 className="text-white text-3xl font-bold mb-3">Money Heist</h1>
                        <div className="flex gap-7 mb-3">
                            <p className="text-white">2017</p>
                            <a className="text-white border px-1 rounded" href="#">TV Series</a>
                        </div>
                        <p className="text-white text-justify">Money Heist is a crime drama on Netflix - originally called La Casa de Papel. Money Heist season 3 has just been released by the streaming service. The plot reads: "Eight thieves take hostages and lock themselves in the Royal Mint of Spain as a criminal mastermind manipulates the police to carry out his plan."</p>
                    </div>
                </div>
                <div>
                    <img src={require("../img/jokerkanan.png")} className="max-w-sm" />
                    {/* <img> */}
                </div>
            </div>
        </div>
        </>
    )
}

export default DetailMovies;