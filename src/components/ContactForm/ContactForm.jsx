import { MdMessage } from "react-icons/md"
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Button from "../Button/Button"
import styles from "./Contact.module.css"
import { useState } from "react";

const ContactForm = () => {

    const [name, setName] = useState("Aditya");
    const [email, setEmail] = useState("adi@gmail.com");
    const [text, setText] = useState("hii");


    const onSubmit = (event) =>{
        event.preventDefault();

        setName(event.target[0].value);
        setEmail(event.target[1].value);
        setText(event.target[2].value);

        console.log({
            name,
            email,
            text
        });
    };
  return (
    <section className={`${styles.container}`}>
        <div className={`${styles.contact_form}`}>
            <div className={`${styles.top_btn}`}>
                <Button text="VIA SUPPORT CHAT" icon={<MdMessage fontSize="24px"/>}/>
                <Button text="VIA CALL" icon={<FaPhoneAlt fontSize="24px"/>}/>
            </div>
            <Button isOutline={true} text="VIA EMAIL FORM" icon={<MdEmail fontSize="24px"/>}/>

            <form onSubmit={onSubmit}>
            <div className={styles.form_control}>
                <label htmlFor="name">Name</label>
                <input type = "text" name = "name"></input>
            </div>

            <div className={styles.form_control}>
                <label htmlFor="email">email</label>
                <input type = "email" name = "email"></input>
            </div> 

            <div className={styles.form_control}>
                <label htmlFor="text">text</label>
                <textarea name="text" rows="3"/>
            </div>
            <div style={{display:"flex",
                justifyContent: "end",
            }}>
                <Button 
                text = "SUBMIT"/>
            </div>
              <div>{name+" "+email+" "+text}</div>  
            </form> 
        </div>
        <div className={`${styles.contact_form}`}>
            <img src="./images/contact.svg" alt="contact images"/>
        </div>
    </section>
    
  )
}

export default ContactForm