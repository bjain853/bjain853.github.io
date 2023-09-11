import { FC, ReactNode } from 'react'
//import { motion, useAnimation, useInView } from 'framer-motion'

type Props = {
    children?: ReactNode
};

const HoverAnimatedCard: FC<Props> = ({ children}) => {
    // const ref = useRef(null)
    // const isInView = useInView(ref, { once: true })
    // const controls = useAnimation()

    // useEffect(() => {
    //     if (isInView) {
    //         controls.start('visible')
    //     }
    // }, [isInView])
    return (
        <div>
            <div
                // variants={{
                //     initial: { x: '200vw' },
                //     visible: { x: 0 }
                // }}
                // animate={controls}
                // initial='initial'
                // transition={{ type: 'spring', duration: 2, bounce: 0.35, delay: 0.05 }}
            >
                <div className='p-4 m-3 flex flex-col shadow-md ease-in-out duration-300 hover:scale-110 hover:translate-y-2'>
                    {children}
                </div>
            </div>
        </div >
    )
}

export default HoverAnimatedCard