import { FC } from 'react'

import Avatar from '../../assets/images/avatar2.png'
import ShareIcon from '../../assets/images/share-icon.svg'
import GithubIcon from '../../assets/images/github.svg'
import LinkedInIcon from '../../assets/images/linkedin.svg'
import MailSVG from '../../assets/images/mail.svg'

const Footer: FC = () => {
    const SOCIAL_LINKS = [
        { name: 'Github', link: 'https://www.github.com/bjain853', imgSrc: GithubIcon },
        { name: 'LinkedIn', link: 'https://www.linkedin.com/in/bhavyaj99', imgSrc: LinkedInIcon },
        { name: 'Mail', link: 'mailto:jainbhavya375@gmail.com', imgSrc: MailSVG }
    ]

    return (
        <footer className='mt-auto sm:bottom-0'>
            <div className='flex items-center font-light sm:justify-center gap-10 sm:gap-20'>
                <img src={Avatar} height='70rem' width='70rem' />
                {SOCIAL_LINKS.map(({ name, link, imgSrc }, index) => (
                    <div className='hover:translate-x-2 transition ease-in-out duration-100' key={index}>
                        <a href={link} target="_blank" className='flex gap-2'>
                            <img src={imgSrc} height='25rem' width='25rem' className='shadow-sm' />
                            {name}
                            <img src={ShareIcon} height='15rem' width='15rem' className='' />
                        </a>
                    </div>
                ))}
            </div>
        </footer>
    )
}

export default Footer