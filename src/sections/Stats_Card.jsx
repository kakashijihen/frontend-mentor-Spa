import ResponsiveCustomCard from '../componentes/ResponsiveCustomCard'
import mobileImg from "../assets/images/StatsCard/image-header-mobile.jpg"
import desktopImg from "../assets/images/StatsCard/image-header-desktop.jpg"

const Stats_Card = () => {
  return (
    <section className="min-h-screen py-10 flex flex-col justify-center items-center w-full  bg-Verydarkblue">
      <ResponsiveCustomCard classCard="flex flex-col md:flex-row-reverse overflow-hidden rounded-2xl w-80 md:w-[768px]" 
        classCardBody="w-full h-auto bg-Darkdesaturatedblue py-6 px-8" classCardImgContainer="w-full bg-gradient-to-r from-Softviolet to-[#aa5cdbb3]" img_container={ 
          <> 
            <img src={mobileImg} className="block md:hidden w-full h-full object-cover object-center mix-blend-overlay" alt="mobile_img"/>
            <img src={desktopImg} className="hidden md:block md:h-full object-cover object-center  mix-blend-overlay" alt="desktop_img"/>
          </>
        }>
          <h1 className="text-3xl font-card_sans font-bold text-center text-white my-8 mx-4 md:text-left">Get <span className="text-Softviolet font-bold">insights</span> that help your business grow.</h1>
          <p className="font-normal text-center md:text-left text-sm text-white/75 py-0 px-10 md:px-0 md:mx-4 font-card_sans">Discover the benefits of data analytics and make better decisions regarding revenue, customer experience, and overall efficiency.</p>
          <ul className="flex flex-col md:flex-row mt-5 md:mx-4 md:gap-8 ">
            <li className='flex flex-col justify-center items-center md:items-start uppercase font-normal mb-7 text-white/60 '><span className="font-bold leading-loose text-white text-xl">10K+</span>Companies</li>
            <li className='flex flex-col justify-center items-center md:items-start uppercase font-normal mb-7 text-white/60 '><span className="font-bold leading-loose text-white text-xl">314</span>Templates</li>
            <li className='flex flex-col justify-center items-center md:items-start uppercase font-normal mb-7 text-white/60 '><span className="font-bold leading-loose text-white text-xl">12M+</span>Queries</li>
          </ul>
        </ResponsiveCustomCard>
    </section>
  )
}

export default Stats_Card