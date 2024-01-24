"use client"
import{usePathname} from "next/navigation"
import{HiHome} from "react-icons/hi"
import{BiSearch} from "react-icons/bi"

import { useMemo } from "react";

interface SidebarProps{
    children:React.ReactNode;
}


const Sidebar:React.FC<SidebarProps>=({children})=>{
    const pathname=usePathname();
    const routes= useMemo(()=>[
        {
        icon:HiHome,
        label:'Home',
        actice: pathname!=="/search",
        href:"/"
    },
    {
        icon:BiSearch,
        label:'Search',
        actice: pathname!=="/search",
        href:"/search"
    }

],[pathname])
    return (<div>Sidebar!</div>)

}
export default Sidebar