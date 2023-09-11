import { FC } from 'react'


const Navlink: FC<any> = ({ to }) => {

    return (
        <li className='list-none hover:translate-x-5 transition ease-in-out duration-100'>
            <a href={`#${to}`}>
                <span className='font-bold text-lg'>
                    {to}
                </span>
            </a>
        </li >
    )
}


export default Navlink