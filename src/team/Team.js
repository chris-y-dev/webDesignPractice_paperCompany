import React from 'react'
import Footer from '../shared/Footer'
import Header from '../shared/Header';
import Profile from './Profile';

function Team() {
  return (
    <div>
        <Header />
        <section>
            <div class="container-md pt-5">
                <h1>Our team</h1>
                <h2>Meet the dedicated & friendliest experts that make our paper story possible!</h2>
                <div>
                    {/* team photo */}
                </div>
                <div class="container py-5">
                    <div class="row d-flex flex-row justify-content-between">
                        <div class="col d-flex justify-content-center text-center">
                            <Profile source={"/team/ms.jpg"} name={"Michael Scott"} pos="Regional Manager"/>
                        </div>
                    </div>
                    <div class="row d-flex flex-row justify-content-between">
                        <div class="col-sm-6 col-lg-3 d-flex justify-content-center text-center">
                            <Profile source={"/team/ds.jpg"} name={"Dwight S."} pos="Assistant Manager"/>
                        </div>
                        <div class="col-sm-6 col-lg-3 d-flex justify-content-center text-center">
                            <Profile source={"/team/jh.jpg"} name={"Jim H."} pos="Sales Expert"/>
                        </div>
                        <div class="col-sm-6 col-lg-3 d-flex justify-content-center text-center">
                            <Profile source={"/team/ab.jpg"} name={"Andy B."} pos="Sales Expert"/>
                        </div>
                        <div class="col-sm-6 col-lg-3 d-flex justify-content-center text-center">
                            <Profile source={"/team/sh.jpg"} name={"Stanley H."} pos="Sales Expert"/>
                        </div>
                    </div>
                    <div class="row d-flex flex-row justify-content-between"> 
                        <div class="col-sm-6 col-lg-3 d-flex justify-content-center text-center">
                            <Profile source={"/team/pv.jpg"} name={"Phyllis V."} pos="Sales Expert"/>
                        </div>
                        <div class="col-sm-6 col-lg-3 d-flex justify-content-center text-center">
                            <Profile source={"/team/pb.jpg"} name={"Pam B."} pos="Office Administrator"/>
                        </div>
                        <div class="col-sm-6 col-lg-3 d-flex justify-content-center text-center">
                            <Profile source={"/team/om.jpg"} name={"Oscar M."} pos="Accounting"/>
                        </div>
                        <div class="col-sm-6 col-lg-3 d-flex justify-content-center text-center">
                            <Profile source={"/team/am.jpg"} name={"Angela M."} pos="Accounting"/>
                        </div>
                    </div>
                    <div class="row d-flex flex-row justify-content-between">
                        <div class="col-sm-6 col-lg-3 d-flex justify-content-center text-center">
                            <Profile source={"/team/km.jpg"} name={"Kevin M."} pos="Accounting"/>
                        </div>
                        <div class="col-sm-6 col-lg-3 d-flex justify-content-center text-center">
                            <Profile source={"/team/kk.jpg"} name={"Kelly K."} pos="Customer Service"/>
                        </div>
                        <div class="col-sm-6 col-lg-3 d-flex justify-content-center text-center">
                            <Profile source={"/team/mp.jpg"} name={"Meredith P."} pos="Supplier Relationships"/>
                        </div>
                        <div class="col-sm-6 col-lg-3 d-flex justify-content-center text-center">
                            <Profile source={"/team/cb.jpg"} name={"Creed B."} pos="Quality Assurance"/>
                        </div>
                    </div>
                    
                    <div class="row d-flex flex-row justify-content-between">
                        <div class="col-sm-6 col-lg-3 d-flex justify-content-center text-center">
                            <Profile source={"/team/dp.jpg"} name={"Darryl P."} pos="Shipping/Distribution"/>
                        </div>
                        <div class="col-sm-6 col-lg-3 d-flex justify-content-between text-center">
                        </div>
                    </div>
                    
                    {/* Individual faces */}
                </div>

            </div>
        </section>
        <Footer />
    </div>
  )
}

export default Team
