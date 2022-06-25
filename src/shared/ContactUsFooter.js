import React from 'react'

function ContactUsFooter() {
  return (
    <div class="container-fluid pt-5" id="contactUsFooter">
        <section id="contactUsFooter">
            <div class="container-md">
                <h1>Contact Us</h1>
                <div class="row gx-6 justify-content-center">
                    <div class="col-12 col-md-6">
                        <h3 class="p-4">Send us a message, ask us anything!</h3>
                        <ul>
                            <li class="p-2">03 1234 1234</li>
                            <li class="p-2">hello@dundermifflin.com.au</li>
                            <li class="p-2">99 Chris Street, Melbourne VIC 3000</li>
                        </ul>
                    </div>
                    <div class="col-sm-12 col-md-6">
                        <form>
                            <div class="mb-3">
                                <label for="contactUsForm_name" class="form-label visually-hidden">Name</label>
                                <input type="text" class="form-control" id="name_contactUsForm" placeholder="Name" />
                            </div>
                            <div class="mb-3">
                                <label for="contactUsForm_email" class="form-label visually-hidden">Email</label>
                                <input type="email" class="form-control" id="email_contactUsForm" placeholder="Email"/>
                            </div>
                            <div class="mb-3">
                                <label for="contactUsForm_phone" class="form-label visually-hidden">Phone</label>
                                <input type="text" class="form-control" id="phone_contactUsForm" placeholder="Phone"/>
                            </div>
                            <div class="mb-3">
                                <label for="contactUsForm_message" class="form-label visually-hidden">Message</label>
                                <textarea class="form-control" id="contactUsForm_message" placeholder="Message" rows="4"/>
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