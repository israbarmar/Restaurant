import ContactFooter from "./footer_components/ContactFooter";
import "../styles/Footer.css";

export default function Footer(){
    return (
      
      <div className="footer div_main">

       <div className="ad_fter gradient_y">
          <h3>Interested in becoming a chef ?</h3>
          <button className="button_first">click here</button>
        </div>

        <div className="contact_box">

          <ContactFooter
          text="Email us"
          type="mail"
          />

          <ContactFooter
          text="Follow us on facebook"
          type="facebook"
          />
          
          <ContactFooter
          text="Follow us on instagram"
          type="instagram"
          />

        </div> 

    <div className="email_box effect_dotted">
      <div className="h3_contain appears"><h3>Stay up to date with our newsletter</h3></div>
      <div className="aEmailText"><h4>Get updates in your inbox</h4></div>
      <div id="email">
        <input type="email" placeholder="Email" id='rEmail'/>
        <div className="arrow"></div>
      </div>
    </div>

<div className="last_box">
     <p>Copyright Canal Street Market 2024</p>
     <a href="#">Privacy Policy</a>
     <a href="#">Vendor Login</a>
     <a>Site by <span className="site">Zero</span></a>
</div>

      </div>
    )
}