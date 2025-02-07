import '../styles/MenuMedia.css';
import { useState } from 'react';

export default function MenuMedia({apa}){
    const [wDiv, setWDiv] = useState(0);

    return (
       
        <div className={`fixedMenu ${apa}`}>

        <div className='mediaGrid'>
                <div onClick={()=>setWDiv(1)} className={wDiv === 1 ? 'borderColor' : 'noBorderColor'}>
                    <h4>Canal Street</h4>
                </div>
                <div onClick={()=>setWDiv(2)} className={wDiv === 2 ? 'borderColor' : 'noBorderColor'}>
                    <h4>Food</h4>
                </div>
                <div onClick={()=>setWDiv(3)} className={wDiv === 3 ? 'borderColor' : 'noBorderColor'}>
                    <h4>Drinks</h4>
                </div>
                <div onClick={()=>setWDiv(4)} className={wDiv === 4 ? 'borderColor' : 'noBorderColor'}>
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