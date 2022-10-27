import {navbarItems} from '../js/lista'
import DropdownMenu from './DropdownMenu';

const NavItems = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4 flex-wrap relative">  
      {navbarItems.map((menu)=>{
          return <DropdownMenu items={menu} key={menu.id} styleDrop="bg-CleanWhite text-md font-light" styleItems="font-bold font-Barrow" styleDropLink="hover:border-b-4 hover:border-frontendmentor-red"/>             
      })}
    </div>
      
  )
}

export default NavItems