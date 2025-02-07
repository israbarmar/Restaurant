import Footer from "../Footer";
import '../../styles/Drinks.css';

export default function Drinks({name, miniTitle, cLetter, imageAnimation}){
    return (
 <>
    <div className='drinkSide'>

        <div className='drinkDes'>
            <p>{miniTitle}</p>
            <p className="dLetter">{cLetter}</p>
        </div>

        <div>
            <h1 className='drink_title'>{name}</h1>
        </div>
        
    </div>

    <div className='grid_middle_content'>
        <div style={{backgroundImage: `url(${imageAnimation})`}} className='imageAnimation'></div>
        <div id='middle_content'>
            <h3>The Best of NYC</h3>
            <p>Podcasted from the market</p>
        </div>
        <div style={{backgroundImage: `url(${imageAnimation})`}} className='imageAnimation'></div>
    </div>

       <Footer />
</>
    )
}