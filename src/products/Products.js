import React, { useEffect } from 'react'
import ProductCard from './ProductCard';
import Header from '../shared/Header';
import Footer from '../shared/Footer';
import "../shared/Shared.css";


function Products({productsData}) {

    useEffect(()=>{
        console.log(productsData);
    }, []);

  return (
    <div class="no-padding">
        <Header />
        <section class="py-5">
            <div class="container-md">
                <h1>Our Product Range</h1>
                <p>We absolute experts in our small range of products.</p>
                <div>
                    <ProductCard data={productsData.a4Paper}/>
                    <ProductCard data={productsData.a3Paper} reverse={true}/>
                    <ProductCard data={productsData.a4PaperCoated}/>
                </div>
            
            </div>
        </section>
        <Footer />
    </div>
  )
}

export default Products