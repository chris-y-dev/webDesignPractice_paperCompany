import React from 'react'
import Footer from '../shared/Footer'
import Header from '../shared/Header';
import Profile from './Profile';

function Team() {
  return (
    <div>
        <Header />
        <section>
            <div class="container-md">
                <h1>Our team</h1>
                <h2>Meet the dedicated & friendliest experts that make our paper story possible!</h2>
                <div>
                    {/* team photo */}
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col">
                            <Profile source={"/team/ms.jpg"} name={"Michael Scott"} pos="Regional Manager"/>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <Profile source={"/team/ds.jpg"} name={"Dwight S."} pos="Assistant Manager"/>
                        </div>
                        <div class="col">
                            <Profile source={"/team/jh.jpg"} name={"Jim H."} pos="Sales Expert"/>
                        </div>
                        <div class="col">
                            <Profile source={"/team/ab.jpg"} name={"Andy B."} pos="Sales Expert"/>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <Profile source={"/team/sh.jpg"} name={"Stanley H."} pos="Sales Expert"/>
                        </div>
                        <div class="col">
                            <Profile source={"/team/pv.jpg"} name={"Phyllis V."} pos="Sales Expert"/>
                        </div>
                        <div class="col">
                            <Profile source={"/team/pb.jpg"} name={"Pam B."} pos="Office Administrator"/>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <Profile source={"/team/om.jpg"} name={"Oscar M."} pos="Accounting"/>
                        </div>
                        <div class="col">
                            <Profile source={"/team/am.jpg"} name={"Angela M."} pos="Accounting"/>
                        </div>
                        <div class="col">
                            <Profile source={"/team/km.jpg"} name={"Kevin M."} pos="Accounting"/>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <Profile source={"/team/kk.jpg"} name={"Kelly K."} pos="Accounting"/>
                        </div>
                        <div class="col">
                            <Profile source={"/team/mp.jpg"} name={"Meredith P."} pos="Accounting"/>
                        </div>
                        <div class="col">
                            <Profile source={"/team/cb.jpg"} name={"Creed B."} pos="Accounting"/>
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
