import '../../styles/Food.css';
import Footer from '../Footer';

export default function Food({name, image, miniTitle, date, cLetter, imageAnimation }){
    return(
        <>

    <div className='foodSide'>

        <div className='headMenu'>
            <p>{miniTitle}<br />
                    {date}<br />
            </p>
        </div>

       <div className='firstFood'>
       <div>
             <h1 className='title_menu'>{name}</h1>
        </div>

        <div className='secondFood' style={{backgroundImage: `url(${image})`}}>
           <p className='cLetter'>{cLetter}</p>
        </div>
        
       </div> 
    </div>
    
    <div className='grid_middle_content'>
        <div style={{backgroundImage: `url(${imageAnimation})`}} className='imageAnimation'></div>
        <div id='middle_content'>
            <h3>The Best of NYC</h3>
            <p>All under one same roof!</p>
        </div>
        <div style={{backgroundImage: `url(${imageAnimation})`}} className='imageAnimation'></div>
    </div>
       <Footer />
       </>
    )
}