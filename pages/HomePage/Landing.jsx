// import Slider from "./Slider"
import logo from '../../assets/Images/clothes_logo.png'
import Image from "next/image"
export default function LandingPage() {
  let product = [
    {
      img1: logo,
      img2: logo,
      img3: logo,
      Product: 'Samsung watch',
      about: 'Combine smart and beauty',
      price: '199$',
      button: 'BUY NOW'
    },
    {
      img1: logo,
      img2: logo,
      img3: logo,
      Product: 'Samsung watch',
      about: 'Combine smart and beauty',
      price: '199$',
      button: 'BUY NOW'
    },
    {
      img1: logo,
      img2: logo,
      img3: logo,
      Product: 'Samsung watch',
      about: 'Combine smart and beauty',
      price: '199$',
      button: 'BUY NOW'
    },

  ]
  return (
    <>
      {/* <Slider /> */}
      <div className="container">
          {product?.map((v, i) => {
            return (
              <>
              <div className="card-container">
                <input type="radio" name="colors-btn" id="color-1" checked />
                <input type="radio" name="colors-btn" id="color-2" />
                <input type="radio" name="colors-btn" id="color-3" />
                <div className="watch-area">

                  <div className="logo-div">
                    <Image src="" alt="" />
                  </div>
                  <div className="floating-div">
                    <div className="watch-1"><Image src={v?.img1} /></div>
                    <div className="watch-2"><Image src={v?.img2} /></div>
                    <div className="watch-3"><Image src={v?.img3} /></div>
                  </div>

                </div>
                <div className="text-area">
                  <div className="heading-area">
                    <h2>{v?.Product}</h2>
                    <h4>{v?.about}</h4>
                  </div>

                  <p className="paragraph-area">
                    Monitor your health around the clock even at night.
                    Achieve your wellness goal by measuring body composition with Samsung BioActive sensor.
                  </p>

                  <div className="color-selection">
                    <div className="h5-text"><h5>Select Colors: </h5></div>

                    <div className="color-pick-div">
                      <label for="color-1" className="colors color-1"></label>
                      <label for="color-2" className="colors color-2"></label>
                      <label for="color-3" className="colors color-3" ></label>
                    </div>
                  </div>
                  <div className="price-and-buy-btn">
                    <h2 className="price-1">{v?.price},-</h2>
                    <h2 className="price-2">{v?.price},-</h2>
                    <h2 className="price-3">{v?.price},-</h2>
                    <button className="buy-btn">{v?.button}</button>
                  </div>
                </div>
                </div>
              </>
            )
          })
          }
      </div>
    </>
  )
}