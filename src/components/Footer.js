import ContactFooter from "./footer_components/ContactFooter";
import "../styles/Footer.css";

export default function Footer(){
    return (
      
      <div className="footer div_main">

       <div className="ad_footer gradient_y">
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
      <h3>Stay up to date with our newsletter</h3>
      <div id="email">
        <input type="email" placeholder="Email"/>
        <div className="arrow"></div>
      </div>
    </div>

<div className="last_box">

  <div className="last_info">
     <p>Copyright Canal Street Market 2024</p>
     <a href="#">Privacy Policy</a>
     <a href="#">Vendor Login</a>
  </div>

  <div className="site">
     <a>Site by Zero</a>
  </div>

</div>

      </div>
    )
}