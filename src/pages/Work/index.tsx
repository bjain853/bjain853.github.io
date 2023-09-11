import { FC } from 'react'

import Card from './Card';
import CommonWealthLogo from '../../assets/images/commonwealth.jpg'
import HTVLogo from '../../assets/images/htv-logo.png'

const Work: FC<any> = ({ref}) => {
    const WorkExperience = [{
        name: 'Common Wealth Retirement',
        position: 'Junior Software Developer',
        link: 'https://www.commonwealthretirement.com/',
        logo: CommonWealthLogo,
        summary: [
        'Optimized the Java based server by removing redundant API endpoints and optimizing the workflow of the existing ones improving run-time efficiency by 20%.',
        'Executed DevOps operations, leveraging AWS and Datadog to optimize the use of cloud resources and minimized operational costs for the company by 10%.',
        'Facilitated the onboarding of new engineering team members by guiding them around the company’s codebase, enabling swift feature delivery by the entire team.',
        'Developed precisely tested features for a mobile-friendly retirement planning web application, serving an extensive client base of over 10,000 businesses and individuals.',
        'Orchestrated the delivery of over 50 features for the platform, driving end-to-end implementation while meeting product owner’s expectations.',
        'Led an AGILE team of 10 software developers and designers in productive scrum meetings, acting as the Scrum Master, fostering seamless collaboration.'
],
        startDate: new Date('2021-09-05'),
        endDate: new Date('2022-08-26'),
    },
    {
        name: 'Hack the Valley 4',
        position: 'On Ground Team Volunteer',
        link: 'https://hack-the-valley-4-9442.devpost.com/',
        logo: HTVLogo,
        startDate: new Date('2020-02-14'),
        endDate: new Date('2020-02-16'),
        summary: [
            'Oversaw and coordinated the organization of Canada\'s largest hackathon, leading the team of 15 on-ground volunteers.',
            'Successfully addressed the event\'s logistical challenges by providing valuable guidance to hundreds of students from around the world, ensuring smooth navigation throughout the event and timely participation in seminars which significantly increased accessibility for over 400 students.'
        ]

    }
    ]

    return (
        <section ref={ref} id='work' className='h-full'>
            <h1 className='md:hidden text-center text-2xl font-bold my-5'>Work</h1>
            <div>
                <ul>
                    {WorkExperience.map((experience, index) => (
                        <li key={index}>
                            <Card {...experience} />
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

export default Work;