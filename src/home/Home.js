import React from 'react';
import Header from '../shared/Header';
import "./Home.css";
import "../shared/Shared.css";
import Footer from '../shared/Footer';
import CompaniesCarousel from './CompaniesCarousel';
import Description from './Description';
import BestSellers from './BestSellers';

function Home() {
  return (
    <div>
        <Header />
        <div class="container-fluid no-padding">

          {/* Hero */} 
          <section class="p-2 pt-5" id="hero" style={{height:"800px"}}>
            <div class="container-md">
              <h2 class="mt-5">Dunder Mifflin</h2>
              <h1>Paper by the people, for the people</h1>
              <button type="button" class="btn btn-outline-dark mx-2 my-4">Our Products</button>
              <button type="button" class="btn btn-dark mx-2 my-4">Get a Quote</button>
            </div>
          </section>
           
          {/* Description */}
          <Description />
          
          {/* Best Sellers */}
          <BestSellers />

          {/* History */}
          <CompaniesCarousel />      
        </div>
        <Footer />
    </div>
  )
}

export default Home