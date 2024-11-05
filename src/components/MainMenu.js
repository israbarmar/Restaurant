import React from 'react';
import '../styles/MainMenu.css';
import { useState } from 'react';
import logo from '../assets/logo.png'

export function MainMenu({anColor, cl, name}){

function dropMenus(){
  setTimeout(()=>{
    const d = document;
    const menus = d.querySelectorAll('.otherContent');
    menus.forEach(menu=>{
      menu.style.transform = 'none';
      menu.style.transition = '2s';
    })
  }, 1000)
}

function efecto(){
    const d = document;
    const menus = d.querySelectorAll('.otherContent');
    menus.forEach(menu=>{
      menu.addEventListener('click', ()=>{
        menu.style.transition = '0.5s';
      });
    })
  }

window.addEventListener('load', dropMenus);
window.addEventListener('load', efecto)

    return(
        <div className={`otherContent ${cl}`} onClick={anColor}> 
           <h3 className='category'>
            {name}
            </h3>
        </div>
    )
}

export default function OptionsMenu(){
  const [inColor, setInColor] = useState(0);
  let clase = '';

  return (
<>
    <img src={logo} 
    className={inColor !== 0 ? 'cLogo' : 'eLogo'} 
    width={60} height={60} id='logo' 
    onClick={()=>setInColor(0)}/>    
    
       <div className='optionsMenu'>
        <div className='options'>
          <MainMenu 
            name="Chefs - Barmen" 
            anColor={()=>setInColor(1)}
            cl={inColor===1 ? clase='size' : clase='noSize'}
          />

            <MainMenu 
            name="Drinks"  
            anColor={()=>setInColor(2)}
            cl={inColor===2 ? clase='size' : clase='noSize'}
          />

            <MainMenu 
            name="Food"  
            anColor={()=>setInColor(3)}
            cl={inColor===3 ? clase='size' : clase='noSize'}
          />
          </div>
       </div>
       </>
  );
}
