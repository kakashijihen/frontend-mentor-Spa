import { useState,useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const DropdownMenu = ({items,styleDrop,styleItems,styleDropLink}) => {
  const [dropdown, setDropdown] = useState(false);
  const menuRef=useRef();
  const btnRef=useRef();

  useEffect(() => {

    const handler=(e)=>{
      if (e.target !==menuRef.current && e.target !==btnRef.current) {
        setDropdown(false);
      }
    }
    document.addEventListener("click",handler)
  
    return () => {
      document.removeEventListener("click",handler)
    }
  }, [])
  
  
  return (
    <li className={styleItems}>
      {items.submenu ? (
        <>
          <button type="button" aria-expanded={dropdown ? "true":"false"} onClick={()=>setDropdown((prev)=>!prev)} ref={btnRef}>
            {items.title}{''}
          </button>
          <ul ref={menuRef} className={`${dropdown ? "block":"hidden"} md:absolute md:w-28 md:shadow-lg rounded-md md:right-auto md:left-0 md:z-[9999] py-2 px-0 ${styleDrop}`}>
            {items.submenu.map(submenuItem=>(
              <li key={submenuItem.id} className={styleDropLink}><Link to={submenuItem.url}>{submenuItem.title}</Link></li>
            ))}
          </ul>
        </>
      ):( 
        <a href={items.url}>{items.title}</a>
      )}
    </li>
  )
}

export default DropdownMenu