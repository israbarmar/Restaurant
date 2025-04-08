import { useEffect, useState } from 'react';
import '../../styles/Food.css';
import Footer from '../Footer';

export default function Food({name, image, miniTitle, date, cLetter, imageAnimation }){

const [allFood, setAllFood] = useState([]);

useEffect(()=>{
    let showData = true;

    async function mealsC(){
    try{
        const url = 'https://www.themealdb.com/api/json/v1/1/categories.php';
        const connection = await fetch(url);
        const data = await connection.json();

        if(showData){
            const allData = data.categories.map((dat)=>dat).slice(0, 9);
            setAllFood(allData);
        }

    } catch (error) {
        console.error('Los datos no se pueden mostrar')
    }
 }
 mealsC();

 return ()=>{
    showData = false;
 }
}, [])

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
        
        <ul className='food_list'>
           {allFood.map((data)=>{
             return <li>
                        <p>{data.strCategoryDescription}</p><br></br>
                        <h4>{data.strCategory}</h4>
                        <img src={data.strCategoryThumb} alt='meal category'/>
                    </li>
           })}
        </ul>

    <div className='center_div'>
        <div className='effect_triangle'></div>
        <div className='grid_middle_content'>
            <div style={{backgroundImage: `url(${imageAnimation})`}} className='imageAnimation'></div>
            <div id='middle_content'>
                <h3>The Best of NYC</h3>
                <p>All under one same roof!</p>
            </div>
            <div style={{backgroundImage: `url(${imageAnimation})`}} className='imageAnimation'></div>
        </div>
        <div className='effect_triangle'></div>
    </div>
       <Footer />
       </>
    )
}