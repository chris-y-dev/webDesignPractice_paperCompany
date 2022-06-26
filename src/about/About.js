import React from 'react'
import Header from '../shared/Header'
import Footer from '../shared/Footer'


function About() {
  return (
    <div class="no-padding">
        <Header />
        <section class="py-5">
            <div class="container-md">
                <div>
                    <h1>About Dunder Mifflin</h1>
                    <h2>Providing paper solutions since 1949</h2>
                    <div class="pt-5">
                        <h3>How did we get here?</h3>
                        <div class="container">
                            <div class="row">
                                <div class="col-sm-12 col-md-6">
                                    <p>The company was founded by Robert Dunder and Robert Mifflin in 1949, in the USA.</p>
                            
                                    <p>"Dunder Mifflin Inc. (stock symbol DMI) is a mid-cap regional paper and office supply distributor with an emphasis on servicing small-business clients.</p>

                                    <p>For years, Dunder Mifflin was a paper company that was unable to compete with modern chains such as Staples and Office Depot. The company still used calls rather than the Internet, causing most customers to leave for the nation-wide chains, and is unable to adapt to an increasingly paperless world. 
                                    </p>
                                </div>
                                <div class="col-sm-12 col-md-6">
                                    <p>Ryan Howard, a new employee of the Scranton branch, predicts the company will be obsolete by 2017. In 2007, Ryan Howard became Vice President of Sales and begins a massive restructuring of the entire company, including a new website that would help make sales more efficient. However, his website was a failure (due to an ill-advised social networking feature) and he is later arrested for fraud when it is discovered that he is double-counting sales transactions into the website that were already made by salesmen over the phone.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="pt-5">
                    <h2>Our Values</h2>
                    <p>For years, we have stuck by our core values, and created a lovely community of employees and clients.</p>
                    <div class="container py-3">
                        <div class="row">
                            <div class="col-sm-12 col-md-6">
                                <h3>Empower</h3>
                                <p>DUNDER MIFFLIN, Inc. is committed to providing its customers quality office and information technology products, furniture, printing values and the experience required for making informed buyer decisions.</p>
                            </div>
                            <div class="col-sm-12 col-md-6">
                                <h3>People first</h3>
                                <p>We provide our Customers with the highest standard of integrity and quality, to enable them to develop long-term professional relationships with our employees and staff.</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-12 col-md-6">
                                <h3>Equality</h3>
                                <p>We crusade to create a stable working environment and corporate spirit and to give unlimited opportunity to women, and to afford ordinary folk the chance to buy the same things as rich people. We are also committed to nurturing and promulgating wholesome American values.</p>
                            </div>
                            <div class="col-sm-12 col-md-6">
                                <h3>Standards</h3>
                                <p>We strive to become the company most known for changing the worldwide poor quality image of cheap products.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <img src="/img/office-building.png" class="w-100"/>
            </div>
        </section>
        <Footer />
    </div>
  )
}

export default About