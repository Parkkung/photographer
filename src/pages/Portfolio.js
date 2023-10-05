import React, { useContext, useState } from 'react';
import Image1 from '../img/portfolio/1.png'
import Image2 from '../img/portfolio/2.png'
import Image3 from '../img/portfolio/3.png'
import Image4 from '../img/portfolio/4.png'
import Image5 from '../img/portfolio/5.png'
import Image6 from '../img/portfolio/6.png'
import Image7 from '../img/home/woman.png'
import Image8 from '../img/about/woman.png'

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { transition1 } from '../transitions';
import { CursorContext } from '../context/CursorContext';

const Portfolio = () => {

  const {mouseEnterHandler, mouseLeaveHandler} = useContext(CursorContext);

  const portfolioVariant = {
    all: {
      image1: Image1,
      image2: Image2,
      image3: Image3,
      image4: Image4,
    },

    studio: {
      image1: Image5,
      image2: Image6,
      image3: Image7,
      image4: Image8,
    },
    portrait: {
      image1: Image1,
      image2: Image2,
      image3: Image3,
      image4: Image4,
    },
    commencement: {
      image1: Image5,
      image2: Image6,
      image3: Image7,
      image4: Image8,
    },
  }

  const [genrePortfolio, setgenrePortfolio] = useState(portfolioVariant.all)

  return(
    <motion.section
    initial={{opacity: 0, y: '100%'}}
    animate={{opacity: 1, y: 0}}
    exit={{opacity: 0, y: '100%'}}
    transition={transition1}
    className="section">
      <div className='container mx-auto h-full relative'>
        <div className='flex flex-col lg:flex-col lg:items-start h-full items-center justify-start gap-x-24 text-center lg:text-left pt-24 lg:pt-36 pb-8'>
          {/* text */}
          <motion.div
            initial={{opacity: 0, y: '-80%'}}
            animate={{opacity: 1, y: 0}}
            exit={{opacity: 0, y: '-80%'}}
            transition={transition1}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
          className='flex flex-col items-center lg:flex-row lg:betw lg:gap-8 lg:w-full lg:justify-between'>
            <h1 className='h1 padding lg:text-[40px]'>Portfolio</h1>
            {/* <p className='mb-12 max-w-sm'>
              Studio Portrait Landscape Street Commencement
            </p> */}
            <ul className='flex flex-wrap gap-4 pt-4 pb-4 lg:mr-auto'>
              <li onClick={ () => setgenrePortfolio(portfolioVariant.all)} className='cursor-pointer'>
                <p>All</p>
              </li>
              <li onClick={ () => setgenrePortfolio(portfolioVariant.studio)} className='cursor-pointer'>
                <p>Studio</p>
              </li>
              <li onClick={ () => setgenrePortfolio(portfolioVariant.portrait)} className='cursor-pointer'>
                <p>Portrait</p>
              </li>
              <li onClick={ () => setgenrePortfolio(portfolioVariant.commencement)} className='cursor-pointer'>
                <p>Commencement</p>
              </li>
            </ul>
            <Link to={'/contact'} className='btn mb-[30px] mx-auto lg:mx-0 lg:justify-between'>Hire me</Link>
          </motion.div>
          {/* image grid */}
          <motion.div
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
          initial={{opacity: 0, y: '-80%'}}
          animate={{opacity: 1, y: 0}}
          transition={transition1}
          className='grid grid-cols-2 lg:gap-2'>
            {/* images */}
            <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
              <img className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500' src={genrePortfolio.image1} alt='' />
            </div>
            <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
              <img className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500' src={genrePortfolio.image2} alt='' />
            </div>
            <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
              <img className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500' src={genrePortfolio.image3} alt='' />
            </div>
            <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
              <img className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500' src={genrePortfolio.image4} alt='' />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
};

export default Portfolio;
