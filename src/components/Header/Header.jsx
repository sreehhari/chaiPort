import React from 'react'
import {Link,NavLink} from 'react-router-dom'
export default function Header() {
  return (
    <>
    <header className='shadow sticky z-50 top-0'>
    <nav className='bg-white  border-gray-200 px-4 lg:px-6 py-2.5'>
        <div className='flex flex-wrap justify-between items-centre mx-auto max-w-screen-xl'>
            <Link to="/" className='flex items-centre' >
                <img src="https://in.pinterest.com/offsite/?token=900-267&url=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F9b%2F21%2F8b%2F9b218bf3e61d817874338c5bb8c6ccde.png&pin=2462974790144754&client_tracking_params=CwABAAAAEDEyNTg2MDI2OTI4MzEwMTYKAAIAAAGQiGnlMwYAAwAACgAGAAAAAAAAAFkLAAcAAAAKbmdhcGkvcHJvZAsACAAAACAxMjVmMDkzY2VhZTQwNzJmMjQ5NGVmZTllZTNhOTM3MAA&aux_data=%7B%22commerce_data%22%3A%7B%7D%7D" alt="geto suguru" 
                className='mr-3 h-12'
                />
            </Link>
            <div className='flex items-center lg:order-2'>
                <Link to="#" className='text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-offset-gray-300 font-medium rounded-lg  text-sm  px-4  lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none'>
                Log in
                </Link>
                <Link to="#" className='text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg  text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none'>
                Get Started
                </Link>
            </div>
            <div className='hidden justify-between  items-center w-full lg:flex lg:w-auto lg:order-1' id='mobile-menu-2'>
                <ul className='flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0'>
                    <li>
                        <NavLink className={({isActive})=>
                            `block py-2 pr-4 pl-3 duration-200 ${isActive?"text-orange-700":"text-gray-700"} border-b border-gray-100 hover:bg-gray-500 lg:hover:bg-transparent lg:border-0  hover:text-orange-700  lg:p-0 `
                        }
                        >
                            Home
                            </NavLink>
                    </li>

                </ul>
            </div>
            
        </div>
    </nav>



    </header>
    </>
)
}
