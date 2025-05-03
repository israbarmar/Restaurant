import '../styles/MenuMedia.css';
import Drinks from './categories/Drinks';
import { useState, useEffect, useContext } from 'react';
import Food from './categories/Food';
import foodImage from '../assets/img1.png';
import barmenImage from '../assets/barmen.png';
import retailImage from '../assets/img2.jpg';
import drinksImage from '../assets/drinks.png';
import fImage from '../assets/food.png';
import dImage from '../assets/img3.jpg';
import AppContext from './context/NewContext';

export default function MenuMedia({apa}){
    const [wDiv, setWDiv] = useState(null);
    const [changeProp, setProp] = useState(apa);
    const [inState, setInState] = useState(null)
    const { setAppear, appear, activeIndex, setActiveIndex } = useContext(AppContext);

     useEffect(() => {
        setProp(apa);
    }, [apa]); 

    /*useEffect(() => {
        if (wDiv === null || appear === true) {
          setInState(false);
        } else if (wDiv === 2 || wDiv === 3 || wDiv === 4) {
          setInState(true);
        } else {
          setInState(false);
        }
      }, [wDiv, appear]);
    */

    useEffect(() => {
        const aDelay = setTimeout(()=>{
        if (wDiv !== null) {
            // Cuando wDiv deja de ser null, cerrar menú
            setAppear(!appear);
          }
        }, 2000);
    return ()=>clearTimeout(aDelay);
      }, [wDiv]);

    function windowDis() {
        setTimeout(() => {
            setProp('dis');
        }, 2300);
    }

    useEffect(()=>{
      const setW = setTimeout(()=>{
        if (wDiv != null) {
        setWDiv(null);
        }
      }, 5000);
    
      return ()=>clearTimeout(setW);
    }, [wDiv])

    const getClass = (target) => {
        if (appear === true || activeIndex === null) return 'noMenu';
        return inState === target ? 'newMenu' : 'noMenu';
      };

    return (

        <>
        <div className={`fixedMenu ${changeProp}`}>

        <div className='mediaGrid'>
                <div onClick={()=>{setWDiv(1); windowDis(); setInState(1)}} 
                className={`${wDiv === null ? 'initialState' : wDiv === 1 ? 'borderColor' : 'noBorderColor'}
                ${changeProp === 'apa' ? 'appearDiv' : ''}`}>
                    <h4>Canal Street</h4>
                </div>
                <div onClick={()=>{setWDiv(2); windowDis(); setInState(2); setActiveIndex(1)}} 
                className={`${wDiv === null ? 'initialState' : wDiv === 2 ? 'borderColor' : 'noBorderColor'}
                ${changeProp === 'apa' ? 'appearDiv' : ''}`} 
                >
                    <h4>Food</h4>
                </div>
                <div onClick={()=>{setWDiv(3); windowDis(); setInState(3); setActiveIndex(2)}} 
                className={`${wDiv === null ? 'initialState' : wDiv === 3 ? 'borderColor' : 'noBorderColor'}
                ${changeProp === 'apa' ? 'appearDiv' : ''}`}>
                    <h4>Drinks</h4>
                </div>
                <div onClick={()=>{setWDiv(4); windowDis(); setInState(4); setActiveIndex(3)}} 
                className={`${wDiv === null ? 'initialState' : wDiv === 4 ? 'borderColor' : 'noBorderColor'}
                ${changeProp === 'apa' ? 'appearDiv' : ''}`}>
                    <h4>Chefs-Barmen</h4>
                </div>
        </div>

        <div className='secondMG'>
                <button className="button_first white"  id='baChef'>buy food here</button>
                <p>265 Canal Street <br />
                   New York, New York
                </p>
                <p>Food Hall Hours: <br />
                   Mon – Sun: 11AM- 8PM
                   </p>
                <p>Retail Market Hours: <br />
                   Thurs – Sun: 11AM- 7PM
                </p>
                <a>Email us</a>
            <div className='socialMedia'>
                <div className='sm-one'></div>
                <div className='sm-two'></div>
            </div>
        </div>

        </div>

    <div className='containerMenus'>
        
    <div className={getClass(2)}>
  <Food name={'The Food Hall'} 
        image={foodImage} 
        miniTitle={'Food Halls Hours: '}
        date={'Mon - Sun: 11:00AM - 8:00PM'}
        cLetter={'餐饮'}
        imageAnimation={barmenImage}
        onClick={()=>setActiveIndex(1)}
  />
</div>

<div className={getClass(3)}>
  <Food name={'The Retail Market'} 
        image={retailImage} 
        miniTitle={'Retail Market Hours: '}
        date={'Thurs - Sun: 11:00AM - 7:00PM'}
        cLetter={'購物'}
        imageAnimation={drinksImage}
        onClick={()=>setActiveIndex(2)}
  />
</div>

<div className={getClass(4)}>
  <Drinks name={'Canal St. Community'} 
        miniTitle={'Our mixed-use space hosts ongoing events, podcasts & artists in residence'}
        cLetter={'文化'}
        imageAnimation={fImage}
        imageDrink={dImage}
  />
</div>

    </div>

        </>

    )
    
}