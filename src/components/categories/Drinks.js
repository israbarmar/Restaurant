import Footer from "../Footer";
import '../../styles/Drinks.css';

export default function Drinks({name, miniTitle, cLetter, imageAnimation, imageDrink}){
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

        <div className='secondFood comDiv' style={{backgroundImage: `url(${imageDrink})`}}>
           <p className='cLetter'>{cLetter}</p>
        </div>
        
    </div>

<div className='center_div'>
  <div className='effect_triangle noMargin'></div>
    <div className='grid_middle_content'>
        <div style={{backgroundImage: `url(${imageAnimation})`}} className='imageAnimation'></div>
        <div id='middle_content'>
            <h3>Market Radio</h3>
            <p>Podcasted from the market</p>
        </div>
        <div style={{backgroundImage: `url(${imageAnimation})`}} className='imageAnimation'></div>
    </div>
</div>

       <Footer />
</>
    )
}