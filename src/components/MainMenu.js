import React, { useEffect, useState} from 'react';
import '../styles/MainMenu.css';
import logo from '../assets/logo.png';
import hamburger from '../assets/hamburger.png';
import close from '../assets/close.png';
import MenuMedia from './MenuMedia';
import Drinks from './categories/Drinks';
import Food from './categories/Food';
import foodImage from '../assets/img1.png';
import retailImage from '../assets/img2.jpg';
import barmenImage from '../assets/barmen.png';
import drinksImage from '../assets/drinks.png';
import fImage from '../assets/food.png';
import AppContext from './context/NewContext';

export function MainMenu({ title, isActive, onActivate, activeMenu }) {

  const [deleteTransform, setTransform] = useState('');
  const [allFoodTotal, setAllFoodTotal] = useState([]);

  useEffect(()=>{

   const timeEffect = setTimeout(()=>{
      setTransform('noTransform')
    }, 2000)

    return ()=>clearTimeout(timeEffect);

  }, []);

  useEffect(() => {
  let showData = true;

  async function mealsC() {
    try {
      const url = 'https://www.themealdb.com/api/json/v1/1/categories.php';
      const connection = await fetch(url);
      const data = await connection.json();

      if (showData) {
        const allDataTotal = data.categories.slice(0, 9);
        console.log('Datos del API cargados:', allDataTotal); // <-- Agrega esto
        setAllFoodTotal(allDataTotal);
      }
    } catch (error) {
      console.error('Los datos no se pueden mostrar', error);
    }
  }

  mealsC();

  return () => {
    showData = false;
  };
}, []);

  return (

    <div
      className={`otherContent ${isActive ? 'active' : ''} ${deleteTransform}`}
      onClick={onActivate}
    >
      <h3 className="category">{title}</h3>

      <div className={`${isActive ? 'showFooter' : 'noFooter'}`}>

        {activeMenu === 1 && 
        <Food name={'The Food Hall'} 
              image={foodImage} 
              miniTitle={'Food Halls Hours: '}
              date={'Mon - Sun: 11:00AM - 8:00PM'}
              cLetter={'餐饮'}
              imageAnimation={barmenImage}
              dataMeals={allFoodTotal}
        />
        }

        {activeMenu === 2 && 
        <Food name={'The Retail Market'} 
              image={retailImage} 
              miniTitle={'Retail Market Hours: '}
              date={'Thurs - Sun: 11:00AM - 7:00PM'}
              cLetter={'購物'}
              imageAnimation={drinksImage}
        />
        }

        {activeMenu === 3 && 
        <Drinks name={'Canal St. Community'} 
              miniTitle={'Our mixed-use space hosts ongoing events, podcasts & artists in residence'}
              cLetter={'文化'}
              imageAnimation={fImage}
        />}

    </div>
    
    </div> 
  );
}

export default function OptionsMenu() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [appear, setAppear] = useState(false);
  const [startLogo, setLogo] = useState('')

  useEffect(()=>{

    const appearLogo = setTimeout(()=>{
      setLogo('startLogo')
    }, 1500);

    return ()=>clearTimeout(appearLogo);

  }, [])

  return (
  <AppContext.Provider value={{ appear, setAppear, activeIndex, setActiveIndex }}> 
    <>
      <img
        src={logo}
        className={`csLogo ${startLogo} ${activeIndex !== null ? 'cLogo' : 'eLogo'}`}
        width={60}
        height={60}
        id="logo"
        onClick={() => setActiveIndex(null)}
        alt='page logo'
      />

      <img
        src={close}
        width={40}
        height={40}
        id='close'
        onClick={()=>setAppear(!appear)}
        className={appear ? 'goClose' : 'backClose'}
        alt='close options'
      />
      
      <img
        src={hamburger}
        width={60}
        height={60}
        onClick={() => setAppear(!appear)}
        id='hamburger'
        className={appear ? 'goHamburger' : 'backHamburger'}
        alt='menu options'
      />

      <div className={`optionsMenu ${activeIndex !== null ? 'widthFull' : ''}`}>
      
      <MainMenu  />

        <MainMenu
          title="Chefs - Barmen"
          isActive={activeIndex === 1}
          onActivate={() => setActiveIndex(1)}
          activeMenu={activeIndex}
        />

        <MainMenu
          title="Drinks"
          isActive={activeIndex === 2}
          onActivate={() => setActiveIndex(2)}
          activeMenu={activeIndex}
        />

        <MainMenu
          title="Food"
          isActive={activeIndex === 3}
          onActivate={() => setActiveIndex(3)}
          activeMenu={activeIndex}
        />
        
      </div>

      <MenuMedia apa={appear ? 'apa' : 'dis'}/>

    </>
    </AppContext.Provider>  
  );
}

