function JumbotronTv() {
    return(
        <>
            <div className="absolute">
                <img className="mt-40 ml-10" src={require("../img/TextJumbotronTv.png")} />
                <img className="ml-10 mt-5" src={require("../img/text2JumbotronTv.png")} />
                <div className="flex gap-2.5 ml-10 mt-3">
                <p className="text-white">2017</p>
                    <a className="text-white border px-1 rounded" href="#">TV Series</a>
                </div>
                <div className="mt-10">
                    <a className="bg-red-600 border ml-10 px-20 py-2.5 rounded text-white">WATCH NOW!</a>
                </div>
            </div>
            <div className="">
                <img src={require("../img/JumbotronTv.png")}/>
            </div>
        </>
    )
}

export default JumbotronTv