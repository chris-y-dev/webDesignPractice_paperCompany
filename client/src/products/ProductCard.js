import React from 'react';
import "./Products.css";

function ProductCard({data, reverse}) {
  return (
    <div class="product-card">
        <div>
            <div class={(reverse?"d-flex flex-row-reverse":"d-flex flex-row") + " align-items-center flex-wrap justify-content-center"}>
                <div class="col-sm-12 col-md-6">
                    <a href={data.link}>
                        <img src={data.src} class="w-100 animation-lift"/>
                    </a>
                        
                </div>
                <div class="col-sm-12 col-md-6">
                    <h2>
                        <a href={data.link} class="text-decoration-none black-font">
                            {data.name}
                        </a>
                    </h2>
                    <p>{data.desc}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductCard