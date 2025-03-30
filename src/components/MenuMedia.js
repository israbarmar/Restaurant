import '../styles/MenuMedia.css';
import Drinks from './categories/Drinks';
import { useState, useEffect } from 'react';
import Food from './categories/Food';
import foodImage from '../assets/img1.png';
import barmenImage from '../assets/barmen.png';
import retailImage from '../assets/img2.jpg';
import drinksImage from '../assets/drinks.png';
import fImage from '../assets/food.png';
import dImage from '../assets/img3.jpg';

export default function MenuMedia({apa}){
    const [wDiv, setWDiv] = useState(null);
    const [changeProp, setProp] = useState(apa);
    const d = document;

     useEffect(() => {
        setProp(apa);
    }, [apa]); 

    function windowDis() {

        setTimeout(() => {
            setProp('dis');
        }, 2300);

    }

    return (

        <>
        <div className={`fixedMenu ${changeProp}`}>

        <div className='mediaGrid'>
                <div onClick={()=>{setWDiv(1); windowDis()}} 
                className={wDiv === null ? 'initialState' : wDiv === 1 ? 'borderColor' : 'noBorderColor'}>
                    <h4>Canal Street</h4>
                </div>
                <div onClick={()=>{setWDiv(2); windowDis()}} 
                className={wDiv === null ? 'initialState' : wDiv === 2 ? 'borderColor' : 'noBorderColor'}>
                    <h4>Food</h4>
                </div>
                <div onClick={()=>{setWDiv(3); windowDis()}} 
                className={wDiv === null ? 'initialState' : wDiv === 3 ? 'borderColor' : 'noBorderColor'}>
                    <h4>Drinks</h4>
                </div>
                <div onClick={()=>{setWDiv(4); windowDis()}} 
                className={wDiv === null ? 'initialState' : wDiv === 4 ? 'borderColor' : 'noBorderColor'}>
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
        
        <div className={wDiv === null ? 'noMenu' : wDiv === 2 ? 'newMenu' : 'noMenu'}>
        <Food name={'The Food Hall'} 
              image={foodImage} 
              miniTitle={'Food Halls Hours: '}
              date={'Mon - Sun: 11:00AM - 8:00PM'}
              cLetter={'餐饮'}
              imageAnimation={barmenImage}
        />
        </div>

        <div className={wDiv === null ? 'noMenu' : wDiv === 3 ? 'newMenu' : 'noMenu'}>
        <Food name={'The Retail Market'} 
              image={retailImage} 
              miniTitle={'Retail Market Hours: '}
              date={'Thurs - Sun: 11:00AM - 7:00PM'}
              cLetter={'購物'}
              imageAnimation={drinksImage}
        />
        </div>

        <div className={wDiv === null ? 'noMenu' : wDiv === 4 ? 'newMenu' : 'noMenu'}>
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