import { FC } from "react";


import HoverAnimatedCard from "../../components/HoverAnimatedCard"


const Card: FC<any> = ({ name, summary, link, logo, startDate, endDate }) => {
    const formatDate = (date: Date) => `${date.getMonth()}/${date.getDate()}/${date.getFullYear()}`
    return (
        <HoverAnimatedCard>
            <a href={link} target="_blank" className="p-2">
                <div className="text-md sm:text-xl font-bold flex p-6 gap-4">
                    <img src={logo} className='w-20 h-20' />
                    <div className="flex flex-col">
                        <span>
                            {name}
                        </span>
                        <span>
                            {`${formatDate(startDate)} - ${formatDate(endDate)}`}
                        </span>
                    </div>
                </div>
                <div className="">
                    <ul>
                        {summary.map((point: string, index: number) => (
                            <li key={index} className="list-disc">
                                {point}
                            </li>
                        ))}
                    </ul>
                </div>
                <br />
            </a>
        </HoverAnimatedCard>
    )
}

export default Card