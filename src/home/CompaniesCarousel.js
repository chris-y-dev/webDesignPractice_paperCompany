import React from 'react'

function CompaniesCarousel() {
  return (
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
  )
}

export default CompaniesCarousel