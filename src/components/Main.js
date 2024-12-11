import "../styles/Main.css";

export default function Main ({children, functionEffect}){

    window.addEventListener('scroll', ()=>functionEffect('.mainStructure'))

    return(
        <div className="div_main">
            <h1 className="title-main">A New Kind of Market</h1>
            <div className="mainStructure">
                {children}
            </div>
        </div>
    )
}