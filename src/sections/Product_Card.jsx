import ResponsiveCustomCard from '../componentes/ResponsiveCustomCard'
import mobileProduct from "../assets/images/ProductCard/image-product-mobile.jpg"
import desktopProduct from "../assets/images/ProductCard/image-product-desktop.jpg"
import iconcart from "../assets/images/ProductCard/icon-cart.svg"

const Product_card = () => {
  return (
    <section className="min-h-screen py-10 flex flex-col justify-center items-center w-full  bg-cream">
      <ResponsiveCustomCard classCard="w-[320px] h-auto md:w-[576px] md:h-[26rem] overflow-hidden rounded-lg md:flex" classCardImgContainer="w-full h-64"
        classCardBody="w-full h-auto p-5 bg-white"
        img_container={
          <>
            <img src={mobileProduct} alt="mobile_logo" className="block md:hidden w-full  h-full object-cover object-center" />
            <img src={desktopProduct}alt="desktop_logo" className="hidden md:block" />
          </>
        }>
          <h2 className="uppercase font-Montserrat font-light  text-sm pb-4 text-darkgrayishblue tracking-[4px] ">Preview</h2>

          <h3 className="text-3xl text-verydarkblue font-Fraunces font-bold leading-none">Gabrielle Essence Eau De Parfum</h3>
          <p className="pt-5 pb-9 font-Montserrat font-medium text-sm text-darkgrayishblue leading-relaxed">A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.</p>

          <h3 className="text-darkcyan text-3xl font-Fraunces font-bold w-full relative ">$149.99 
          <span className="text-darkgrayishblue line-through font-Montserrat font-bold  text-sm absolute top-1/2 left-1/2 md:left-[60%] -translate-x-1/2 -translate-y-1/2
          md:justify-self-center">$169.99</span>
          </h3>

          <button className="bg-darkcyan rounded-lg py-3 px-0 inline-flex justify-center items-center w-full font-bold font-Montserrat text-white mt-6 text-sm ">
            <span className="text-sm"><img src={iconcart} className="pr-1" alt="icon_cart" /></span>       
            Add to Cart
          </button>
        </ResponsiveCustomCard>
    </section>
  )
}

export default Product_card