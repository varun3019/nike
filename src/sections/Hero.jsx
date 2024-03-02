const Hero = () => {
  return (
    <section className ="relative w-full h-full max-lg:hidden max-md:hidden ">
      <div className=" absolute mt-20 ml-[850px] max-lg:ml-[240px] mb-[200px]"> <p className="font-mono ml-8 max-md:text-[40px] mt-3 italic  max-lg:text-[50px] ">Save Up to 40%</p>
      <h3 className=" mt-1 font-mono"><a href="/" className="  text-black-0 max-md:text-[25px] text-center  max-lg:text-[30px]  ">Shop All Our New Markdowns</a></h3>
      <h3 className=" mt-1 font-mono"><a href="/" className=" underline ml-14 text-black-0 max-lg:text-[45px] italic ">Join Us</a></h3>
      </div>
    </section>
  )
}

export default Hero