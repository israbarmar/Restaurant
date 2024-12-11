import '../../styles/MainBody.css';


export default function MainBody({text}){

    return(
    <div className='mainBody-box'>
        <div className='cuadrado'></div>
        <p>{text}</p>
    </div>
    )

}