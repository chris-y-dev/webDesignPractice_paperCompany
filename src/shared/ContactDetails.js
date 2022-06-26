import React from 'react'

function ContactDetails() {
  return (
    <div>
      <ul>
          <div class="d-flex flex-row my-2">
              <div class="contact-icon_offset-bg">
                  <img src="/icons/phone-call.png" class="contact-icon"/>
              </div>
              <p>03 1234 1234</p>
          </div>
          <div class="d-flex flex-row my-2">
              <div class="contact-icon_offset-bg">
                  <img src="/icons/email.png" class="contact-icon"/>
              </div>
              <p>hello@dundermifflin.com.au</p>
          </div>
          <div class="d-flex flex-row my-2">
              <div class="contact-icon_offset-bg">
                  <img src="/icons/location.png" class="contact-icon"/>
              </div>
              <p>99 Chris Street, Melbourne VIC 3000</p>
          </div>
      </ul>
    </div>
  )
}

export default ContactDetails