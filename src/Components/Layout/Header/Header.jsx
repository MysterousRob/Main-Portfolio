import React from "react";
import Nav from "./Nav";


function Header(){
    return(
        <>
            <header className="m-0 pl-25 pt-3.5 bg-black text-white">
                <div className="flex items-center justify-between">
                    <h1 className="m-[10px]">Robert Gasior</h1>
                    <div className="hover:border hover:border-white hover:transition hover:duration-500 hover:rounded hover:px-4 hover:py-2 flex p-2.5 mr-5 items-baseline bg-transparent border-none text-white text-lg gap-2.5 no-underline">
                        <Nav />
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;