import { NavLink as Link } from "react-router-dom";


export function Header (){


    return <nav className="Header bg-gray-500 flex justify-center items-center text-[37px]">
        <Link className='m-2' to='/'>Home</Link>
        <Link className='m-2' to='/about'>About</Link>
        <Link className='m-2' to='/contact'>Contact</Link>
    </nav>
}