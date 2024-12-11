import React from 'react';
import '../styles/MainMenu.css';
import { useState } from 'react';
import logo from '../assets/logo.png'
import Footer from './Footer';

export function MainMenu({anColor, name}){

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
        menu.style.transition = '2s';
      });
    })
  }

window.addEventListener('load', dropMenus);
window.addEventListener('load', efecto);

    return(

        <div className={`otherContent`} onClick={anColor}> 
           <h3 className='category'>
            {name}
            </h3>
            
        </div>
    )
}

export default function OptionsMenu(){
  const [inColor, setInColor] = useState(0);
  let cl = '';

  switch(inColor) {
    case 1 : cl = 'uno';
    break;
    case 2 : cl = 'dos';
    break;
    case 3 : cl = 'tres';
    break;
    default : cl = '';
  }


  return (
<>
    <img src={logo} 
    className={inColor !== 0 ? 'cLogo' : 'eLogo'} 
    width={60} height={60} id='logo' 
    onClick={()=>setInColor(0)}/>    
    
       <div className={`optionsMenu ${cl}`}>
        
          <MainMenu/>

          <MainMenu 
            name="Chefs - Barmen" 
            anColor={()=>setInColor(1)}
          />

            <MainMenu 
            name="Drinks"  
            anColor={()=>setInColor(2)}
          />

            <MainMenu 
            name="Food"  
            anColor={()=>setInColor(3)}
          />

       </div>
       </>
  );
}
