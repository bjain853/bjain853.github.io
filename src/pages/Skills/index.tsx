import { FC } from "react";
import { Tooltip } from '@chakra-ui/react'
import { motion } from 'framer-motion'

import SVGProviderFunctionComponent from "./SVGComponnetProvider";


const Skills: FC<any> = ({ ref }) => {
    const SkillStack = [
        {
            Group: 'Front-end',
            TechnologyStack: ['react', 'html', 'css', 'typescript', 'javascript', 'material-ui', 'tailwindcss', 'responsive design']
        },
        {
            Group: 'Back-end',
            TechnologyStack: ['sql', 'java', 'rest-api', 'graphql', 'postgresql', 'springboot', 'nodejs']
        },
        {
            Group: 'Machine Learning & DevOps',
            TechnologyStack: ['python', 'numpy', 'scikit', 'r', 'aws', 'jira', 'bash']
        }
    ]

    return (
        <div ref={ref} className='md:pt-10' id='skills'>
            <h1 className='text-center text-2xl font-bold my-5 md:hidden'>Skills</h1>
            <div className="sm:grid sm:grid-cols-2 sm:grid-rows-2 gap-5">
                {SkillStack.map(({ Group, TechnologyStack }, idx) => (
                    <motion.div className="sm:shadow-md sm:p-5" key={idx}
                    // initial={{ opacity: 0, y: '200vh' }}
                    // animate={{ opacity: 1, y: 0 }}
                    // transition={{ type: 'tween', duration: 1.5 }}
                    >
                        <h4 className="hidden text-blue-600 font-bold text-center text-xl sm:block ">
                            {Group}
                        </h4>
                        <ul className='grid grid-cols-2 sm:grid-cols-3 gap-4'>
                            {TechnologyStack.map((technology, index) => (
                                <li key={index}>
                                    <Tooltip label={technology} placement="bottom" className="capitalize" bg="blue.400">
                                        <div className="h-15 w-15 sm:h-14 sm:w-14 m-4 hover:-translate-y-2 ease-in-out duration-200 hover:scale-75" aria-label={technology}>
                                            <SVGProviderFunctionComponent skill={technology} />
                                        </div>
                                    </Tooltip>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </div >
    )
}

export default Skills