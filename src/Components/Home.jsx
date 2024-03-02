import React from 'react'
import {Hero,Fotter,CustomerReviews,Services,PropularProduct,SpecialOffer} from '../sections/index'
import Nav from './Nav';

export const Home = () => {
  return (
    <main className="relative">
    <Nav/>
 <section className="xl:padding-1 wide:padding-r padding-b">
    <Hero/>
 </section>
  <section className="padding">
    <PropularProduct />
  </section>
  <section className="padding-x py-10">
    <Services/>
  </section>
  <section className="padding">
    <SpecialOffer/>
  </section>
  <section className="bg-pale-blue padding">
    <CustomerReviews/>
  </section>
  <section >
    <Fotter/>
  </section>
</main>
  )
}
