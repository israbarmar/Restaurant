import "../../styles/ContactFooter.css";

export default function ContactFooter({text, type}){
  return(
    <div className="bFooter">
      <div className="footer_box effect_dotted" id={type}>
          <p className="pFText">{text}</p>
      </div>
    </div>
  )
}