import React, { useEffect } from 'react'
import "./Contact.css"
import Header from '../shared/Header'
import Footer from '../shared/Footer'
import ContactDetails from '../shared/ContactDetails';

function Contact() {

  return (
    <div class="no-padding">
        <Header />
        <div class="container-fluid">
            <section class ="py-5" id="contactUs">
                <div class="container-md">
                    <h1>Contact</h1>
                    <h2>Get the best paper, for the best prices</h2>

                    <div class="container my-5">
                        <div class="row mb-4">
                            <div class="col-sm-12 col-md-6 mb-5">
                                <div class="d-flex flex-row">
                                    <div class="contact-icon_offset-bg">
                                        <img src="icons/phone-call.png" class="contact-icon"/>
                                    </div>
                                    <p>03 1234 1234</p>
                                </div>
                            </div>
                            <div class="col-sm-12 col-md-6 mb-5">
                                <div class="d-flex flex-row">
                                    <div class="contact-icon_offset-bg">
                                        <img src="icons/email.png" class="contact-icon"/>
                                    </div>
                                    <p>hello@dundermifflin.com.au</p>
                                </div>
                            </div>
                            <div class="col-sm-12 col-md-6 mb-5">
                                <div class="d-flex flex-row">
                                    <div class="contact-icon_offset-bg">
                                        <img src="icons/location.png" class="contact-icon"/>
                                    </div>
                                    <p>99 Chris Street, Melbourne VIC 3000</p>
                                </div>
                            </div>
                            <p>Operating weekdays 9am-5pm</p>
                        </div>
                    </div>

                    {/* Contact photo */}
                    <div class="container-fluid justify-content-center">
                        <div class="row gx-5">
                            <div class="col-sm-12 col-md-6">
                                <img src="/img/office-xmas-team.jpg" class="w-100" id="contact-img"/>
                            </div>
                            <div class="col-sm-12 col-md-6">
                                <div>
                                    <h1 class="mb-3">Unsure where to begin?</h1>
                                    <h2 class="mb-3">We'll help point you in the right direction!</h2>
                                    <p>We value empowering our clients with to make better informed decisions regarding their paper needs.</p>
                                    <p>Unsure about anything? Give us a call or leave a message below!</p>
                                </div>
                            </div>
                        </div>   
                    </div>
                </div>
            </section>
        </div>
        <Footer />
    </div>
  )
}

export default Contact