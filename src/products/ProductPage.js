import React, { useEffect } from 'react'
import Header from '../shared/Header'
import Footer from '../shared/Footer'

function ProductPage({ product }) {

    const descArray = product.descList; 
    useEffect(()=>{
        console.log(descArray)
    }, [])

  return (
    <div class="no-padding">
        <Header />
        <section class="py-5">
            <div class="container-md">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-sm-12 col-md-6">
                            <img src={product.src} class="product-page_img"/>
                        </div>
                        <div class="col-sm-12 col-md-6">
                            <h1>{product.name}</h1>
                            <p class="mt-5">{product.desc}</p>
                            <ul class="mt-4">
                                {descArray.map((desc)=>{
                                    return <li>{desc}</li>
                                })}
                            </ul>
                            <div class="product-page_pricing">
                                <p>Delivery Australia-wide for small & large orders.</p>
                                <p class="turquoise-font">Get a personalised quote!</p>
                                <a type="button" value={product.name} class="btn btn-dark" href="/contact">Enquire Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Footer />
    </div>
  )
}

export default ProductPage