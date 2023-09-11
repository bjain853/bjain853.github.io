import { FC } from 'react'

// type Props = {
//     ref:RefObject<HTMLLIElement>|undefined
// }

const About:FC = ()=>{
    return (
        <section id='about' className='text-lg font-semibold block sm:flex flex-col gap-2'>
            <h1 className='sm:hidden text-center text-2xl font-bold my-5'>About me</h1>
            <div className=''>
                Hey 👋🏼 I'm Bhavya Jain, a Software Developer and Statistician based in Canada 🍁. Born with a natural curiosity for all things tech, I've always been drawn to the magic that happens when lines of code come to life. My educational journey at the University of Toronto equipped me with a solid foundation in Computer Science and Statistics, it was here that I honed my skills,in creating a SOLID website as well as investigating the relationship between the X's and Y's. I thrive on challenges, and I'm constantly seeking opportunities to learn, grow, and innovate be it in my work or other aspects of my life.
            </div>
            <div>
                Beyond my technical skills, I'm a firm believer in collaboration and leadership. In my world, it's not just about writing code; it's about creating solutions that make a difference. I'm committed to delivering excellence and pushing the boundaries of what technology can achieve.
            </div>
            <div>
                So, if you're looking for a tech enthusiast who's as comfortable with algorithms as with team leadership, you've come to the right place. Let's connect and explore how we can innovate and create together.
            </div>
        </section>
    );
}

export default About