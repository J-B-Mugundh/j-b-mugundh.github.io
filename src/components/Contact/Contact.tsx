import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"
import { Form } from "../Form/Form";


export function Contact(){

  return(
    <Container id="contact">
      <header>
        <h2>Contact</h2>
        <p></p>
      </header>
      <div className="contacts">
        <div>
        <a href="mailto:mugundhjb@gmail.com"><img src={emailIcon} alt="Email" /></a> 
          <a href="mailto:mugundhjb@gmail.com">mugundhjb@gmail.com</a>
        </div>
        <div>
        <a href="tel:+919080024186"><img src={phoneIcon} alt="Phone No" /></a>
          <a href="tel:+919080024186">9080024186</a>
        </div>  
      </div>
      <Form></Form>
    </Container>
  )
}