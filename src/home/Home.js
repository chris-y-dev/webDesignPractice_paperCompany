import React, { useEffect, useState } from 'react';
import Header from '../shared/Header';
import "./Home.css";
import "../shared/Shared.css";
import Footer from '../shared/Footer';
import CompaniesCarousel from './CompaniesCarousel';
import Description from './Description';
import BestSellers from './BestSellers';

function Home() {

  const [offsetY, setOffsetY] = useState(0); //


  function handleScroll(){
    setOffsetY(window.scrollY);
  }

  useEffect(()=>{
    window.addEventListener('scroll', handleScroll);

    //need to remove event listener when component gets unmounted. (other wise EL will continue to be active when component is gone -> security leak.)

    return ()=> window.removeEventListener("scroll", handleScroll); //remove when unmount
  }, [])


  return (
    <div>
        <Header />
        <div class="container-fluid no-padding">

          {/* Hero */} 
          <img src="/parallex/flying-paper-1.png" id="parallex-paper"
            style={{ transform: `translateY(${offsetY * -0.9}px)`}}
          />
           
         
            <div id="hero-bg">
              <section id="hero" >
                  <div id="hero-content" style={{ transform: `translateY(${offsetY * 0.4}px)`}}>
                    <div class="container-md pt-5">
                      <h2>Dunder Mifflin</h2>
                      <h1>Paper by the people, for the people</h1>
                      <a href="/products" class="btn btn-outline-dark mx-2 my-4">Our Products</a>
                      <a href="/contact" class="btn btn-dark mx-2 my-4 animation-vibrate">Get a Quote</a>
                    </div>
                  </div>
              </section>
              <img src="/img/the-office-banner-2.png" id="parallex-team" />
            </div>

          {/* Description */}
          <Description />
          <div id="parallex-paper-2-container" style={{ transform: `translateY(${offsetY * 0.3}px)`}}/>
          

          {/* Best Sellers */}
          <BestSellers />

         

          {/* History */}
          <CompaniesCarousel />
          {/* <img src="/parallex/flying-paper-1.png" id="parallex-paperplane"
            style={{ transform: `translateY(${offsetY * -0.4}px)`}}
          />       */}
        </div>
        <Footer />
    </div>
  )
}

export default Home