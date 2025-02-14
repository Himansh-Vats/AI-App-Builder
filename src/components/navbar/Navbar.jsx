import React from 'react'

const Navbar = () => {
    return (
        <div className="text-white">

            <div className='flex justify-between items-center h-20 mx-34'>
                <div className='h-full'>
                    <img src="/logo.png" alt="Logo" className='h-full' />
                </div>
                <div className='font-extralight text-xs'>
                    Documents
                </div>
            </div>

        </div>
    )
}

export default Navbar