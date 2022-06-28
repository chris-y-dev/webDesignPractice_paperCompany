import React from 'react'
import ContactUsFooter from './ContactUsFooter'
import "./Footer.css"

function Footer() {
  return (
    <div class="container-fluid no-padding">
        <ContactUsFooter />
        <div class="bg-footer py-4">
            <footer class="container text-center">
                <div>
                    <p>Copyright Dunder Mifflin 2022</p>
                    <p>Developed by Chris Yuen</p>
                    <p><a href="https://chrisyuen.info/">chrisyuen.info</a></p>
                </div>
                <div class="d-flex flex-row flex-wrap justify-content-center mb-0">
                        <a class="p-2" href="/">Home</a>
                        <a class="p-2" href="/products">Products</a>
                        <a class="p-2" href="/team">Our Team</a>
                        <a class="p-2" href="/about">About</a>
                        <a class="p-2" href="/contact">Contact</a>

                </div>
            </footer>
        </div>
    </div>
  )
}

export default Footer