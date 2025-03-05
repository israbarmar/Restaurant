import '../styles/MenuMedia.css';
import Drinks from './categories/Drinks';
import { useState, useEffect } from 'react';

export default function MenuMedia({apa}){
    const [wDiv, setWDiv] = useState(null);
    const [changeProp, setProp] = useState(apa);
    const [appearComponente, setComponent] = useState('');
    const d = document;

     // Sincronizar el estado con los cambios del prop apa
     useEffect(() => {
        setProp(apa);
    }, [apa]); // Se ejecuta cada vez que apa cambia

    function windowDis() {

        setTimeout(() => {
            setProp('dis');
        }, 2300);


    }

    return (
       
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
    )
    
}