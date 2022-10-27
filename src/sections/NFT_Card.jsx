import ResponsiveCustomCard from '../componentes/ResponsiveCustomCard'
import Equilibrum_img from '../assets/images/NFTCard/image-equilibrium.jpg'
import iconView from '../assets/images/NFTCard/icon-view.svg'
import iconEthereum from "../assets/images/NFTCard/icon-ethereum.svg";
import iconClock from "../assets/images/NFTCard/icon-clock.svg";
import Avatar_img from "../assets/images/NFTCard/image-avatar.png"

const NFT_Card = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center w-full bg-verydarkblue-hard">
      <ResponsiveCustomCard classCard="w-80 max-h-[576px] bg-verydarkblue-mid rounded-xl overflow-hidden p-4 " classCardImgContainer="cursor-pointer group bg-gradient-to-r from-[#00fff780] to-[#00fff7bf] rounded-2xl h-72 w-72 mx-0
      " classCardBody="py-5 px-1 md:py-3" 
      img_container={      
          <>
            <div className="flex flex-col justify-center items-center">
            <img src={iconView} className="absolute invisible group-hover:visible rounded-2xl" alt="img_card" />              
            <img src={Equilibrum_img} className="rounded-2xl group-hover:mix-blend-soft-light" alt="img_card" />
            </div>  
          </>     
      }>
        <h1 className="text-white font-semibold font-Outfit text-2xl py-2">Equilibrium #3429</h1>
        <p className="text-softblue font-normal text-base md:text-base font-Outfit py-2">Our Equilibrium collection promotes balance and calm.</p>
        <div className="flex justify-between items-center text-sm bottom-1 relative py-2 ">
          <p className="text-cyan flex items-center relative font-Outfit bottom-1"><img src={iconEthereum} alt="icon_ethereum" className="w-3 h-5 "/> <span className="font-semibold pl-3">0.041 ETH</span></p>
          <p className="text-softblue flex items-center font-Outfit relative bottom-1"><img src={iconClock} alt="icon_clock" className="w-5 h-5"/><span className="font-semibold pl-3">3 days left</span></p>
        </div>
        <div className="border-b border-solid border-softblue"></div>
        <div className="text-softblue flex pt-6 items-center font-Outfit ">
            <img src={Avatar_img} alt="icon_clock" className="w-8 h-8 border border-white rounded-full"/>
            <p className="flex font-normal text-lg md:text-xl pl-3">Creation of <span className="text-white pl-1">Jules Wyvern</span></p>
      </div>
      </ResponsiveCustomCard>
    </section>
  )
}

export default NFT_Card