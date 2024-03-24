

export default function TotalValueLocked (){
    return(
        <section className="w-[100%] h-[60vh] bg-[#0a0a10]">
            <div className="w-[100%] h-[100%] relative ">
                <div className="w-[100%] h-[100%] absolute top-0 flex justify-center overflow-hidden backdropBlur">
                    <div className="w-[30vw] h-[30vw] border rounded-full translate-y-96 colorBackground opacity-80 blur-[200px]"></div>
                </div>
                <div className="w-[100%] h-[100%] absolute top-0 flex justify-center content-center flex-wrap">
                    <h3 className="w-[100%] text-[2rem] font-medium text-white flex justify-center ">
                        Total Value Locked
                        </h3>
                        <p className="w-[100%] text-[5rem] font-extrabold text-white flex justify-center">
                            $-
                        </p>
                </div>
            </div>
        </section>
    )
}