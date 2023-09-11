import { FC } from 'react'

const Hero: FC = () => {
    return (
        <section id='hero' className='flex flex-col m-4'>
            <div className='text-6xl font-bold tracking-wider'>
                Bhavya Jain
            </div>
            <div className='flex flex-col sm:flex-row text-xl p-5 leading-4 gap-2'>
                <span className='underline'> Software Developer</span> 
                <span className='underline'>Machine Learning Engineer</span>
            </div>
            <div className='text-lg pt-6'>
                Welcome to my digital playground, where technology meets innovation, and code brings ideas to life. A passionate and creative tech enthusiast, on a perpetual journey to explore, experiment, and evolve in the world of computer science and data. I've embarked on a quest to push boundaries and reimagine what's possible in the digital realm. Join me as I take you through my adventures in the ever-evolving landscape of technology.
            </div>
        </section>
    )
}

export default Hero;