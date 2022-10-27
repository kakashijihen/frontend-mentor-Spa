import QRImg from '../assets/images/QRCard/image-qr-code.png'
import ResponsiveCustomCard from '../componentes/ResponsiveCustomCard'

const QR_Card = () => {
  return (
    <section className='min-h-screen py-10 flex flex-col justify-center items-center w-full bg-LightRay'>
      <ResponsiveCustomCard classCard="w-[320px] bg-white rounded-2xl overflow-hidden text-center py-4 px-4" classCardBody="py-3 px-3" 
      img_container={
        <>
          <img src={QRImg} className="max-w-full rounded-xl" alt="img_card" />
        </>
      }>
        <h1 className="py-0 px-3 my-3 mx-0 text-DarkBlue font-Outfit font-bold text-lg">Improve your front-end skills by building projects</h1>
        <p className="text-GrayishBlue text-sm py-0 px-5 font-Outfit my-3 mx-0">Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
      </ResponsiveCustomCard>
    </section>
  )
}

export default QR_Card