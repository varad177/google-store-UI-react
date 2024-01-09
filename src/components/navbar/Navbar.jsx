import React, { useState } from 'react'
import './navbar.css'
import { Link, Outlet } from 'react-router-dom'


import logo from '../../assets/logo.svg'
import nav_movile from '../../assets/nav_mobile.webp'
import nav_earphone from '../../assets/nav_earbuds.webp'
import nav_acce from '../../assets/nav._acce.webp'
import nav_watches from '../../assets/nav_watch.webp'


const Navbar = () => {



    const [show, setShow] = useState(false)

    let myimg = "https://varad177.github.io/portfolio/assets/hero.jpg"

    return (
        <>
            <nav className='flex py-2 justify-center max-w-[1440px] mx-auto'>


                <i onClick={() => setShow(preval => !preval)} className={"fa-solid fa-"+(show ? "xmark" : "bars") +" text-2xl hidden max-md:block m-3"}></i>
                <nav className="nav_wrapper items-center  flex w-full justify-between md:mx-20">
                    <div className="logoAndLinks items-center flex gap-3">
                        <div className="logo">
                            <img className='w-6 h-6' src={logo} alt='loading' />

                        </div>
                        <div className={"links text-[16px] flex gap-4   max-md:absolute max-md:flex-col max-md:top-20 max-md:text-xl  " + (show ? "max-md:opacity-100 max-md:bg-white max-md:w-full max-md:right-0 max-md:h-full " : "max-md:opacity-0 max-md:pointer-events-none")}>
                            <div className=' flex gap-2 items-center'><img className='w-20 h-20 object-fill md:hidden' src={nav_movile} alt="loading" srcset="" /><Link to={"#"}>Phones</Link></div>
                            <div className='flex gap-2 items-center'><img className='w-20 h-20 object-fill md:hidden' src={nav_earphone} alt="loading" srcset="" /><Link to={"#"}>Earbuds</Link></div>
                            <div className=' flex gap-2 items-center'><img className='w-20 h-20 object-fill md:hidden' src={nav_watches} alt="loading" srcset="" /><Link to={"#"}>Watches</Link></div>
                            <div className=' flex gap-2 items-center'><img className='w-20 h-20 object-fill md:hidden' src={nav_acce} alt="loading" srcset="" /><Link to={"#"}>Accessories</Link></div>
                        </div>
                    </div>

                    <div className="navLogos flex items-center text-[16px]  gap-2 md:gap-4  md:text-[18px] text-gray-500 max-md:text-2xl  ">
                        <i className="fa-solid fa-magnifying-glass"></i>
                        <i className="fa-solid fa-circle-question max-md:hidden"></i>
                        <i className="fa-solid fa-cart-shopping"></i>
                        <div className="navmyimg">
                            <img src={myimg} alt='loading' className='rounded-full w-8 h-8 mr-2 ' />

                        </div>
                    </div>
                </nav>


            </nav>
            <Outlet/>
        </>
    )
}

export default Navbar
