const Services = () => {
  return (
    <div > <p className="font-mono text-lg flex justify-center mb-9"><b>At a Glance</b></p>
    <section className="flex justify-between max-lg:flex-col ">
    <div className="card lg:card-side bg-base-100 shadow-xl w-[600px] max-lg:mb-12 ml-4">
  <div className="card-body">
    <h2 className="card-title "><b className="text-[120px] mb-10  ">43%</b></h2>
    <p className="font-sans">of NIKE’s leadership positions are held by women.</p>
  </div>
</div>
<div className="card lg:card-side bg-base-100 shadow-xl w-[600px] ml-4 max-lg:mb-12">
  <div className="card-body">
    <h2 className="card-title"><b className="text-[120px] mb-10  ">$97.7M</b></h2>
    <p className="font-sans">invested in NIKE, Inc.'s fiscal year 2021 to drive positive impact in communities around the world.</p>
  </div>
</div>
<div className="card lg:card-side bg-base-100 shadow-xl w-[600px]  h-[200px] ml-4 max-lg:mb-12">
  <div className="card-body ">
    <h2 className="card-title"><b className="text-[120px] mb-10  "> 78%</b></h2>
    <p className="font-sans">renewable energy in owned or operated facilities, up from 48% in FY20.</p>
  </div>
</div>
</section>
</div>
  )
}

export default Services