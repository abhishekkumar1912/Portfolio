import React from 'react'
import { BallCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { technologies } from '../constants'
import { styles } from '../styles'

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { RightSwiperNavButtons , LeftSwiperNavButtons } from './SwiperNavButton';
import { textVariant, fadeIn } from "../utils/motion";
import { motion } from 'framer-motion'
import  {Tilt}  from 'react-tilt'

 



const Tech = () => {
  return (

    <div className='relative'>

        <h2 className={styles.sectionHeadText}> My Tech Stack </h2>
        
        <div className = 'mt-12'>
  
        <Swiper
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={50}
            slidesPerView={5}
          >

              {technologies.map((technology , index) => (
                (index % 2) ? (
                      <SwiperSlide>
                        <Tilt> 
                            <motion.div className="res-slide w-28 h-28 green-pink-gradient shadow-card p-[1px]" variants={fadeIn("right","spring" ,0.5*index,0.55)} key = {technology.name} >
                              <BallCanvas icon = {technology.icon} />
                            </motion.div>
                        </Tilt>
                      </SwiperSlide>
                ) : (
                    <SwiperSlide>
                        <Tilt> 
                          <motion.div className="res-slide w-28 h-28 black-gradient shadow-card p-[1px]" variants={fadeIn("right","spring" ,0.5*index,0.55)} key = {technology.name} >
                              <BallCanvas icon = {technology.icon} />
                          </motion.div>
                        </Tilt>
                    </SwiperSlide>
                )                   
              ))}

              <div className = 'flex flex-row justify-center mt-5 space-x-10'>
                 <LeftSwiperNavButtons />
                 <RightSwiperNavButtons />
              </div>  

        </Swiper>
    
        </div>
  
    </div>
   
  
)}


export default SectionWrapper(Tech,"");