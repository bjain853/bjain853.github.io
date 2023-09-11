import { FC } from 'react'

import Navlink from './Navlink'
import ResumePdf from '../../assets/files/Bhavya_Jain_Resume.pdf'


const Navbar: FC = () => {

    return (
        <nav
            className='hidden gap-4 md:flex md:flex-col md:justify-between md:items-center md:text-md md:capitalize'
        >
            <Navlink to='about' />
            <Navlink to='skills' />
            <Navlink to='work' />
            <Navlink to='projects' />
            <a href={ResumePdf} target='_blank' className='font-bold text-lg hover:translate-x-5 transition ease-in-out duration-100'>
                Resume
            </a>
        </nav>
    );
}

export default Navbar;