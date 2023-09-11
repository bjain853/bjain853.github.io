import { FC } from "react";
import { AnimatePresence, motion, useMotionValue, useTransform } from "framer-motion";
import { interpolate } from 'flubber'

import { useGlobalContext } from "../../Context";
import { sun, moon } from './paths'



const ThemeSwitch: FC = () => {

  const { darkMode, setDarkMode } = useGlobalContext()

  const paths = [moon, sun]
  const idxs = [0, 1]
  const colors = ["#000", "#fff"]
  const progress = useMotionValue(0);
  const fill = useTransform(progress, idxs, colors);
  const path = useTransform(progress, [0, 1], paths, {
    mixer: (a, b) => interpolate(a, b, { maxSegmentLength: 0.5 })
  })

  // animate(progress, pathIndex, {
  //   duration: 0.8,
  //   ease: "easeInOut",
  //   onComplete: () => {
  //     if (pathIndex === paths.length - 1) {
  //       progress.set(0);
  //       setPathIndex(1);
  //     } else {
  //       setPathIndex(pathIndex + 1);
  //     }
  //   }

  const onClickHandler = () => {
    if (darkMode === 'light') setDarkMode('dark')
    else setDarkMode('light')
  }
  return (
    <AnimatePresence>
      <div onClick={onClickHandler} className='cursor-pointer'>
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 16 16">
          <motion.path d={path} fill={fill} />
        </svg>
      </div>
    </AnimatePresence>
  )
}

export default ThemeSwitch