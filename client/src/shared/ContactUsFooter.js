import React, {useState} from 'react';
import ContactDetails from './ContactDetails';

function ContactUsFooter() {

    const [nameInput, setNameInput] = useState("");
    const [emailInput, setEmaiInput] = useState("");
    const [phoneInput, setPhoneInput] = useState("");
    const [messageInput, setMessageInput] = useState("");

    const [nameValue, setNameValue] = useState("");
    const [emailValue, setEmailValue] = useState("");
    const [phoneValue, setPhoneValue] = useState("");
    const [messageValue, setMessageValue] = useState("");

    const [formData, setFormData] = useState({});

    function handleNameInput(e){
        console.log(e.target.value);
        setNameInput(e.target.value)
    }

    function handleEmailInput(e){
        console.log(e.target.value);
        setEmaiInput(e.target.value)
    }

    function handlePhoneInput(e){
        console.log(e.target.value);
        setPhoneInput(e.target.value)
    }

    function handleMessageInput(e){
        console.log(e.target.value);
        setMessageInput(e.target.value)
    }

    async function handleSubmit(e){
        e.preventDefault();

        setNameValue(nameInput);
        setEmailValue(emailInput);
        setPhoneValue(phoneInput);
        setMessageValue(messageInput);
        
        try{
            const response = await fetch('http://localhost:3001/form', {
                method: "POST",
                headers:{
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(
                    {   "name": nameInput, 
                        "email": emailInput, 
                        "phone": phoneInput, 
                        "message": messageInput})
            })

            const result = await response.json();

            if(result){
                alert(`Message submitted successfully.\nThank you for getting in touch with us ${result.name}.\nOur team of paper experts will respond as soon as we can!`)
            }

           
            
        } catch(err){
            console.error(err);
        }
         
        


    }



  return (
    <div class="container-fluid pt-5" id="contactUsFooter">
        <section id="contactUsFooter">
            <div class="container-md">
                <h1>Contact Us</h1>
                <div class="row gx-6 justify-content-center">
                    <div class="col-12 col-md-6">
                        <h3 class="p-4">Send us a message, ask us anything!</h3>
                        <ContactDetails />
                    </div>
                    <div class="col-sm-12 col-md-6">
                        <form onSubmit={handleSubmit}>
                            <div class="mb-3">
                                <label for="contactUsForm_name" class="form-label visually-hidden">Name</label>
                                <input type="text" class="form-control" id="name_contactUsForm" placeholder="Name" 
                                onChange={handleNameInput} value={nameInput}/>
                            </div>
                            <div class="mb-3">
                                <label for="contactUsForm_email" class="form-label visually-hidden">Email</label>
                                <input type="email" class="form-control" id="email_contactUsForm" placeholder="Email"
                                    onChange={handleEmailInput} value={emailInput}
                                />
                            </div>
                            <div class="mb-3">
                                <label for="contactUsForm_phone" class="form-label visually-hidden">Phone</label>
                                <input type="text" class="form-control" id="phone_contactUsForm" placeholder="Phone"
                                    onChange={handlePhoneInput} value={phoneInput}
                                />
                            </div>
                            <div class="mb-3">
                                <label for="contactUsForm_message" class="form-label visually-hidden">Message</label>
                                <textarea class="form-control" id="contactUsForm_message" placeholder="Message" rows="4" 
                                onChange={handleMessageInput} value={messageInput}/>
                            </div>
                            <div class="text-center">
                                <input type="submit" class="btn btn-dark" value="Send"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default ContactUsFooter