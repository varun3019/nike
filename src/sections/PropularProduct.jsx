import {bigShoe1} from '../assets/images'
import {bigShoe2} from '../assets/images'
import {bigShoe3} from '../assets/images'
import {shoe4} from '../assets/images'

const PropularProduct = () => {
  return (
    <section>
      <h3 className="flex justify-center align-center text-[20px] font-mono max-lg:mt-40">Popular Choices</h3>
    <div className="card lg:card-side bg-base-100 shadow-xl ">
    <figure><img src={bigShoe1} alt="Album"/></figure>
    <div className="card-body">
      <h2 className="card-title">Nike Dunk High Unlocked By You</h2>
      <p>MRP : ₹ 15 295.00</p>
      <div className="card-actions justify-end">
        <button className="btn btn-primary">Add To Cart</button>
      </div>
    </div>
    <div className="card lg:card-side bg-base-100 shadow-xl ">
    <figure><img src={bigShoe2} alt="Album"/></figure>
    <div className="card-body">
      <h2 className="card-title">Nike Dunk Low Retro SE</h2>
      <p>MRP:₹10 795.00</p>
      <div className="card-actions justify-end">
        <button className="btn btn-primary">Add To Cart</button>
      </div>
    </div>
  </div>
  <div className="card lg:card-side bg-base-100 shadow-xl ml-4">
    <figure><img src={bigShoe3} alt="Album"/></figure>
    <div className="card-body">
      <h2 className="card-title">Nike Cortez Platform Unlocked By You</h2>
      <p>MRP : ₹ 11 895.00</p>
      <div className="card-actions justify-end">
        <button className="btn btn-primary">Add To Cart</button>
      </div>
    </div>
  </div>
  </div>
  </section>
  )
}

export default PropularProduct