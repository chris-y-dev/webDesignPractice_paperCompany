import React from 'react'

function BestSellers() {
  return (
        <section class="py-5 px-2" id="bestSellers">
            <div class="container-md">
            <h1>Our Best Sellers</h1>
            <p>We have a range of paper for all situations. Here are some of our client's favourite ones...</p>
            <div class="container">
              <div class="row gx-3">
                <div class="col-sm-12 col-md-4 my-2">
                  <a href="/a4-paper">
                  <div class="bestSeller-product-container bg-turquoise-light d-flex flex-direction-row flex-wrap justify-content-center">
                      <img src="/products/a4-paper.png" class="bestSeller-product"/>
                      <div class="product-description">
                        <h4>Premium A4</h4>
                        <ul>
                          <li>Versatile 80gsm paper</li>
                          <li>Ideal for B&W printing</li>
                          <li>#1 Best Seller!</li>
                        </ul>
                      </div>
                    </div>
                    
                  </a>
                </div>
                
                <div class="col-sm-12 col-md-4 my-2">
                  <a href="/a3-paper">
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
                  </a>
                </div>
                
                <div class="col-sm-12 col-md-4  my-2">
                  <a href="/a4-paper-coated">
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
                  </a>
                </div>

              </div>
            </div>
            </div>
          </section>
  )
}

export default BestSellers