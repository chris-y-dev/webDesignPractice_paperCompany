import React from 'react'

function Description() {
  return (
    <section class="bg-turquoise py-5 px-2" id="description">
            <div class="container-md">
              <h1>The No.1 Paper Company</h1>
              <div class="container-fluid">
                <div class="row">
                  <div class="col-12 col-sm-4 gx-4">
                    <div class="text-center">
                      <img src="/icons/contract-paper.png" class="home-description_icon "/>
                    </div>
                    <h2>Quality</h2>
                    <p>Our range of paper products are optimised to perform high-quality printing. We use the latest and most advanced production machinery in the industry.</p>
                  </div>
                  <div class="col-12 col-sm-4 gx-4">
                    <div class="text-center">
                      <img src="/icons/customer-experience.png" class="home-description_icon"/>
                    </div>
                    <h2>Customer Service</h2>
                    <p>Our team is committed to finding the perfect product for your needs and budget. We don't simply just sell paper - we provide the smoothest paper experiece ever.</p>
                  </div>
                  <div class="col-12 col-sm-4 gx-4">
                    <div class="text-center">
                      <img src="/icons/trust.png" class="home-description_icon"/>
                    </div>
                    <h2>Advise</h2>
                    <p>We are industry experts and will provide you with extensive information on our paper solutions and help you pick what is most suited for your needs.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
  )
}

export default Description