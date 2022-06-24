import React from 'react';
import Header from '../shared/Header';
import "./Home.css";
import "../shared/Shared.css";

function Home() {
  return (
    <div>
        <Header />
        <div class="container-fluid no-padding">

        {/* Hero */}

          <section class="home-description" id="description">
            <div class="container-md">
              <h1>The No.1 Paper Company</h1>
              <div class="container-fluid">
                <div class="row">
                  <div class="col col-md-4 gx-4">
                    <div class="text-center">
                      <img src="/icons/contract-paper.png" class="home-description_icon "/>
                    </div>
                    <h2>Quality</h2>
                    <p>Our range of paper products are optimised to perform high-quality printing. We use the latest and most advanced production machinery in the industry.</p>
                  </div>
                  <div class="col col-md-4 gx-4">
                    <div class="text-center">
                      <img src="/icons/customer-experience.png" class="home-description_icon"/>
                    </div>
                    <h2>Customer Service</h2>
                    <p>Our team is committed to finding the perfect product for your needs and budget. We don't simply just sell paper - we provide the smoothest paper experiece ever.</p>
                  </div>
                  <div class="col col-md-4 gx-4">
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

          <section class="home-white" id="history">
            <div class="container-md">
              <div>
                <h1>Over 73 years of paper experience</h1>
                <h3>Paper solutions for over 35,000 offices and households</h3>
                <p>Here are some of our notable clients...</p>
              </div>
              <div class="container">
                <div class="row">
                  <div class="col">
                  <div class="text-center">
                      <img src="/companies/salesforce.png" class="home-description_icon"/>
                    </div>
                  </div>
                </div>

              </div>
            </div>


          </section>



        </div>
    </div>
  )
}

export default Home