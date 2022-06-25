import React from 'react';
import Header from '../shared/Header';
import "./Home.css";
import "../shared/Shared.css";
import Footer from '../shared/Footer';

function Home() {
  return (
    <div>
        <Header />
        <div class="container-fluid no-padding">

        {/* Hero */} 
        <section class=" container-md p-2 pt-5" id="hero" style={{height:"800px"}}>
          <h2 class="mt-5">Dunder Mifflin</h2>
          <h1>Paper by the people, for the people</h1>
          <button type="button" class="btn btn-outline-dark mx-2 my-4">Our Products</button>
          <button type="button" class="btn btn-dark mx-2 my-4">Get a Quote</button>
        </section> 
          {/* Description */}
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
          {/* Best Sellers */}
          <section class="py-5 px-2" id="bestSellers">
            <div class="container-md">
            <h1>Our Best Sellers</h1>
            <p>We have a range of paper for all situations. Here are some of our client's favourite ones...</p>
            <div class="container">
              <div class="row">
                <div class="col-sm-12 col-md-4 my-2">
                <div class="bestSeller-product-container bg-turquoise-light d-flex flex-direction-row flex-wrap justify-content-center">
                    <img src="/products/a4-paper.png" class="bestSeller-product"/>
                    <div class="product-description">
                      <h4>Premium A4</h4>
                      <ul>
                        <li>Versatile 80gsm paper</li>
                        <li>Ideal for B&W printing</li>
                        <li>#1 in popularity!</li>
                      </ul>
                    </div>
                  </div>
                  
                </div>
                
                <div class="col-sm-12 col-md-4 my-2">
                  <div class="bestSeller-product-container bg-turquoise-mid d-flex flex-direction-row flex-wrap justify-content-center">
                    <img src="/products/a3-paper.png" class="bestSeller-product"/>
                    <div class="product-description">
                      <h4>Premium A3</h4>
                      <ul>
                        <li>Large 80gsm paper</li>
                        <li>CIE Whiteness</li>
                        <li>100% Recycled</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div class="col-sm-12 col-md-4  my-2">
                <div class="bestSeller-product-container bg-turquoise-dark d-flex flex-direction-row flex-wrap justify-content-center">
                    <img src="/products/a4-paper-coated.png" class="bestSeller-product"/>
                    <div class="product-description">
                      <h4>Glossy Coated</h4>
                      <ul>
                        <li>200gsm thick</li>
                        <li>Ideal for colour</li>
                        <li>For laser printers only</li>
                      </ul>
                    </div>
                  </div>
                </div>

              </div>
            </div>
            </div>
          </section>

          {/* History */}
          <section class="py-5 px-2" id="history">
            <div class="container-md">
              <div>
                <h1>Over 73 years of paper experience</h1>
                <h3>Helping over 35,000 clients get their hands on the best paper</h3>
                <p>We are about long-term relationships & being flexible with your needs. Take a look at some of our most notable, long-term clients...</p>
              </div>
              {/* Carousel container */}
              <div class="carousel carousel-dark slide carousel-sizing" data-bs-ride="true" id="companiesShowCase">
                <div class="carousel-indicators carousel-sizing">
                  <button type="button" data-bs-target="companiesShowCase" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="companiesShowCase" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="companiesShowCase" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>

                {/* Carousel pages 1*/}
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <div class="container">
                      <div class="row">
                        <div class="col-6">
                          <div class="text-center">
                            <img src="/companies/salesforce.png" class="companies_logo" alt="Salesforce"/>
                          </div>
                        </div>
                        <div class="col-6">
                          <div class="text-center">
                            <img src="/companies/telstra.png" class="companies_logo" alt="Telstra"/>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-6">
                          <div class="text-center">
                            <img src="/companies/afl.png" class="companies_logo" alt="AFL"/>
                          </div>
                        </div>
                        <div class="col-6">
                          <div class="text-center">
                            <img src="/companies/nab.png" class="companies_logo" alt="NAB"/>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-6">
                          <div class="text-center">
                            <img src="/companies/auspost.png" class="companies_logo" alt="Australia Post"/>
                          </div>
                        </div>
                        <div class="col-6">
                          <div class="text-center">
                            <img src="/companies/bp.png" class="companies_logo" alt="BP"/>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* 2nd page */}
                  <div class="carousel-item">
                    <div class="container">
                      <div class="row">
                        <div class="col-6">
                          <div class="text-center">
                            <img src="/companies/costco.png" class="companies_logo" alt="Costco"/>
                          </div>
                        </div>
                        <div class="col-6">
                          <div class="text-center">
                            <img src="/companies/telstra.png" class="companies_logo" alt="Telstra"/>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-6">
                          <div class="text-center">
                            <img src="/companies/asahi.png" class="companies_logo" alt="Asahi"/>
                          </div>
                        </div>
                        <div class="col-6">
                          <div class="text-center">
                            <img src="/companies/anu.png" class="companies_logo" alt="ANU"/>
                          </div>
                        </div>
                      </div>

                      <div class="row">
                        <div class="col-6">
                          <div class="text-center">
                            <img src="/companies/ausopen.png" class="companies_logo" alt="Aus Open"/>
                          </div>
                        </div>
                        <div class="col-6">
                          <div class="text-center">
                            <img src="/companies/boeing.png" class="companies_logo" alt="BOEING"/>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* 3rd page */}
                  <div class="carousel-item">
                    <div class="container">
                      <div class="row">
                        <div class="col-6">
                          <div class="text-center">
                            <img src="/companies/cisco.png" class="companies_logo" alt="CISCO"/>
                          </div>
                        </div>
                        <div class="col-6">
                          <div class="text-center">
                            <img src="/companies/ford.png" class="companies_logo" alt="Ford"/>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-6">
                          <div class="text-center">
                            <img src="/companies/holden.png" class="companies_logo" alt="Holden"/>
                          </div>
                        </div>
                        <div class="col-6">
                          <div class="text-center">
                            <img src="/companies/seek.png" class="companies_logo" alt="Seek"/>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-6">
                          <div class="text-center">
                            <img src="/companies/telecom.png" class="companies_logo" alt="Telecom"/>
                          </div>
                        </div>
                        <div class="col-6">
                          <div class="text-center">
                            <img src="" class="companies_logo" alt=""/>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Buttons */}
                  <button class="carousel-control-prev" type="button" data-bs-target="#companiesShowCase" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button class="carousel-control-next" type="button" data-bs-target="#companiesShowCase" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </div>


          </section>



        </div>
        <Footer />
    </div>
  )
}

export default Home