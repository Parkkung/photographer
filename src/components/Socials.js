import React, { useContext } from 'react';
import {
  ImFacebook,
  ImTwitter,
  ImPinterest,
  ImInstagram,
  ImYoutube,
} from 'react-icons/im'
import { CursorContext } from '../context/CursorContext';

const Socials = () => {

  const {mouseEnterHandler,mouseLeaveHandler} = useContext(CursorContext);

  return(
  <div
  onMouseEnter={mouseEnterHandler}
  onMouseLeave={mouseLeaveHandler}
  className='hidden xl:flex ml-24'>
    <ul className='flex gap-x-4'>
      <li>
        <a href='http://www.facebook.com'>
          <ImFacebook 
          className=' text-neutral-300' /> 
        </a>
      </li>
      <li>
        <a href='http://www.twitter.com'>
          <ImTwitter 
          className=' text-neutral-300'/> 
        </a>
      </li>
      <li>
        <a href='http://www.pinterest.com'>
          <ImPinterest 
          className=' text-neutral-300'/> 
        </a>
      </li>
      <li>
        <a href='http://www.instagram.com'>
          <ImInstagram 
          className=' text-neutral-300'/> 
        </a>
      </li>
      <li>
        <a href='http://www.youtube.com'>
          <ImYoutube 
          className=' text-neutral-300'/> 
        </a>
      </li>
    </ul>
  </div>
  ) 
};

export default Socials;
