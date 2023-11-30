import React from "react"
import{Link} from "react-router-dom"
import SecondaryTitle from "../components/SecondaryTitle"
import { BiHive } from "react-icons/bi"

const Home =()=>{
    const [sectionChange, setSectionChange] = React.useState(false)
    function changeSection(){
      if(window.scrollY >= 100){
        setSectionChange(true)
      } else{
        setSectionChange(false)
      }
    };
    window.addEventListener("scroll", changeSection)
    return(
    <div className="home-page">
        <div className="hero-section">
            {/* <div className="promotion"><span>20%</span> off with the code beauty</div> */}
        <div>
        <h2>Welcome to our online haven of beauty and selfcare!</h2>
        <p>Discover a curated collection of premium haircare and skincare products that cater to your every need. Dive into a world of transformative hair elixirs, rejuvenating skincare essentials, and pampering delights. From nourishing creams to luxurious oils, our selection is meticulously chosen for quality and effectiveness.</p>
        <small >- Photo by Moose Photos</small>
        </div>
        </div>
    <main>
        <section className="info-section">
            <div>
            <SecondaryTitle text="Reinventing Beauty"/>
            <p>Embrace your natural beauty with our skincare range, designed to enhance and revitalize your complexion. </p>
            <p> Our hair care products are crafted to cater to diverse hair types and concerns, ensuring a personalized experience for every customer. Whether you seek radiant skin or luscious locks, our online shop is your destination for elevated self-care.</p>
            </div>
            <Link className="secondary-btn" to="/about">About us</Link>
        </section>
        <section className="card-container">
            <div>
            <SecondaryTitle text="Enjoy our products"/>
            <p>Experience the convenience of online shopping paired with the assurance of premium quality. </p>
            <p> Indulge in the simplicity of browsing through our carefully curated offerings, and let each product transport you to a realm of beauty and well-being. Elevate your self-care journey with our online store – because you deserve the luxury of feeling beautiful, every day.</p>
            </div>
            <Link className="secondary-btn" to="/products">Shop now</Link>
        </section>
    </main>
    </div>
    )
}
export default Home