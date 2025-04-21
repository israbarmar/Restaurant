import { useEffect, useState } from 'react';
import '../styles/FirstView.css';

export default function FirstView({functionEffect}){

const [appearTitle, setTitle] = useState('')  

useEffect(()=>{
  
  const appearText = setTimeout(()=>{
  setTitle('appearTitle')
  }, 2000);

  return ()=>clearTimeout(appearText);

}, [])

window.addEventListener('scroll', ()=>functionEffect('.first_image'));

    return (
        <div className='title-box'>
          <div className='div_main'>
            <h1 className={`title ${appearTitle}`}>
                Canal Street Market is a carefully curated retail market, food hall & community space 
                open year-round at 265 Canal Street. <span id='underline'>Support Small Business</span> this weekend!
            </h1>
          </div>
            <img src = {require("../assets/img0.jpg")} width='100%' className='first_image'/>
        </div>
    )

}