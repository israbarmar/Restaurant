import Footer from './components/Footer';
import OptionsMenu from './components/MainMenu';
import MainBody from './components/mainBody_components/MainBody';
import Main from './components/Main';
import MarkEvents from './components/MarkEvents';
import { Events } from './components/MarkEvents';
import FirstView from './components/FirstView';
import Complement from './components/Complement';
import addEffect from './components/functionEffect';

import './App.css'; /*El archivo .css aplica efectos a elementos de manera global, pero solo los 
                      elementos html, no los selectores que se crean en cada componente.
                      Ahí sí es necesario importar estilos.*/

function App() {

  return (
    <div className="App">

    <div className='first-container'>
      <OptionsMenu />
    </div>

    <div className='second-container'>
      
    <FirstView functionEffect={addEffect}/>

    <Main functionEffect={addEffect}>

      <MainBody 
       width={300}
       height={400}
       text="Merging retail, food, art, and culture, Canal Street Market highlights top retail and design 
       concepts, restaurants, and up-and-coming players in the downtown New York City community."
      /> 

      <MainBody 
       width={300}
       height={400}
       text={
        <>
            Retail Market Hours: <br />
            Thursday – Sun: 11:00AM - 7:00PM
        </>
            }
      /> 

      <MainBody 
       width={300}
       height={400}
       text={
       <>
       Food Hall Hours:<br/>
       Mon – Sun: 11:00AM - 8:00PM
       </>
       }
      /> 
      
    </Main>

    <MarkEvents>

    <Events
      ad="Small Business Retail Pop Up Weekend!"
      date="09/21"
    />

    <Events
     ad="New Balance x Paperboy Paris by Greenhouse @ Canal Street Market"
      date="02/07"
    />

    <Events
    ad="Hack City 12/11"
    date="12/11"
    />

</MarkEvents>

<Complement />

      <Footer />
    </div>
    </div>
  );
}

export default App;
