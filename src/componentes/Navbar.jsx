import {useState } from "react";
import NavItems from "./NavItems";
import { Link } from "react-router-dom";

function Navbar() {
  const [open,setOpen] = useState(false)  
 
  return (
    <nav className={`w-full left-0 top-0 z-[999]`}>
        <div className="flex items-center justify-between">
            <div className="mx-7 flex items-center gap-2 ">
            <svg role="img" className="h-9 w-9 fill-[#3F54A3]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Frontend Mentor</title><path d="M12.1706 1.2719a.732.732 0 00-.7186.732v13.914a.732.732 0 00.732.732.732.732 0 00.7318-.732V2.004a.732.732 0 00-.7452-.732zm11.0741 4.1685a.7339.7339 0 00-.2764.063L16.686 8.307a.7329.7329 0 000 1.3361l6.2823 2.8134a.7378.7378 0 00.2993.0648.732.732 0 00.2973-1.401l-4.786-2.1443 4.786-2.1366a.7339.7339 0 00.3698-.9664.7339.7339 0 00-.69-.4327zm-22.499 5.032a.7316.7316 0 00-.7223.9149c1.736 6.677 7.7748 11.341 14.6822 11.341a.732.732 0 000-1.464 13.7055 13.7055 0 01-13.266-10.2449.7316.7316 0 00-.6939-.547z"/></svg>
                <h4 className="text-4xl font-sans uppercase font-bold">
                    <Link to="/">DEV<span>/JL</span></Link>
                </h4>
            </div>
            <div className="md:block hidden px-7 py-2 font-medium ">
               <ul className="py-2 text-lg">
                    <NavItems/>
               </ul>
            </div>
            <div onClick={()=>setOpen(!open)} className={`z-[999] md:hidden m-5`}>
                {open? <box-icon name='x' size="md"></box-icon>: <box-icon name='menu' size="Md"></box-icon>}
            </div>
            <div className={`md:hidden fixed w-1/2 h-screen px-7 py-2 font-medium bg-CleanWhite top-0 duration-300 ${open ? "right-0":"right-[-100%]"} z-[1] `}>
                <ul className="flex flex-col justify-center h-full gap-10 py-2 text-lg">
                    <NavItems/>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar