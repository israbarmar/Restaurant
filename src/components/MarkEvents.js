import "../styles/MarkEvents.css"

export function Events({date, ad}){

    return (
        <div>
           <div className={`box_events`}>
             <p className="p_date">{date}</p>
             <p className="ad">{ad}</p>
            </div>
            <div className="box_gradient no_effect"></div>
        </div>
    )
    
}

export default function MarkEvents({children}){

    return (
       
        <div className="main_events div_main">
          <div className="events" id="event_one">

            <h1 className="chinese-letter">活動</h1>
             
            <div className="box_mark">
                <h1 className="mark-part">Market Events</h1>
            </div>
           
            <h1 className="chinese-letter">活動</h1>
            
           </div>
           
           <div className="box_gradient no_effect"></div>
             
        <div className="events">
             {children} 
        </div>
            <div className="see_all-button">
                <button className="button_first white">see all</button>
                <div className="caja"></div>  
            </div>
        </div>
    )

}