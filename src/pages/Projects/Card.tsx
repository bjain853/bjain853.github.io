import { FC } from "react";
import { Tag } from '@chakra-ui/react'

import HoverAnimatedCard from "../../components/HoverAnimatedCard/index.js";
import { Project } from '../../types.js'

const Card: FC<Project> = ({ name, summary, link, techStack }) => {
    return (
        <HoverAnimatedCard>
            <a href={link} target="_blank" className="p-2">
                <div>
                    <span className="text-xl font-bold">
                        {name}
                    </span>

                    <br />
                    <span className="">
                        {summary}
                    </span>
                    <br />
                    <div className="sm:flex">
                        {techStack.map((technology, index) => (
                            <Tag key={index} className="m-2" colorScheme="blue">
                                {technology}
                            </Tag>
                        ))
                        }
                    </div>
                </div>
                <br />
            </a>
        </HoverAnimatedCard>
    )
}

export default Card 