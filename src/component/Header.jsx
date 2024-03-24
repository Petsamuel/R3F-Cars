import React from 'react'

const Header = () => {
    const Nav = ["Home", "About", "Contact"]
    return (
        <>
            <div className='fixed w-screen h-16 bg-tranparent flex justify-between items-center z-20'>
                <nav className='flex items-center justify-between w-full mx-5 text-black  font-semibold'>
                    <div className="brand font-sans font-black text-xs ">AutoBiz</div>
                    <ul className='flex text-sm cursor-Pointer'>{Nav.map((items, index) => (
                        <li key={index} className="mx-4 cursor-pointer">{items}</li>
                    ))}</ul>
                </nav>
            </div>
        </>
    )
}

export default Header