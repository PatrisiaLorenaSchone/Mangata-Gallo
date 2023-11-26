import card1 from "../assets/card1.jpg"
import card2 from "../assets/card2.jpg";
import card3 from "../assets/card3.jpg";

const Home =()=>{
    return(
    <main>
        <section className="info-section">
            <div>
            <h3>Secondary title</h3>
            <p>Embrace your natural beauty with our skincare range, designed to enhance and revitalize your complexion. Our hair care products are crafted to cater to diverse hair types and concerns, ensuring a personalized experience for every customer. Whether you seek radiant skin or luscious locks, our online shop is your destination for elevated self-care.</p>
            </div>
            <button className="secondary-btn">About us</button>

        </section>
        <section className="card-container">
            <div>
            <h3>Secondary title</h3>
            <p>Experience the convenience of online shopping paired with the assurance of premium quality. Indulge in the simplicity of browsing through our carefully curated offerings, and let each product transport you to a realm of beauty and well-being. Elevate your self-care journey with our online store – because you deserve the luxury of feeling beautiful, every day.</p>
            </div>
            <button className="secondary-btn">Shop now</button>
        </section>
    </main>
    )
}
export default Home