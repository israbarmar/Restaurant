import '../styles/Complement.css';
import map from '../assets/map.jpg';

export default function Complement(){
    
    return (

    <div className="grid_complement div_main">

        <div className='address_number effect_dotted'>
            <h3>265 Canal St. New York, NY</h3>
        </div>

        <div className='map_img effect_dotted'>
            <img src={map} width={370} 
            /*La manera de mostrar imagenes en React es importando la ruta de la imagen*//> 
        </div>

    </div>

    )

}