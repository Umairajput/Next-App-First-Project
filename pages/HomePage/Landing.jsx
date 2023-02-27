// import Slider from "./Slider"
import logo from '../../assets/Images/clothes_logo.png'
import pic1 from '../../assets/Images/peach.png'
import pic2 from '../../assets/Images/pink.png'
import pic3 from '../../assets/Images/black.png'
import Image from "next/image"
export default function LandingPage() {
  let product = [
    {
      img1: logo,
      img2: logo,
      img3: logo,
      Product: 'name',
      price: '200$',
      button: 'Add To Cart'
    },
    {
      img: logo,
      Product: 'name',
      price: '200$',
      button: 'Add To Cart'
    },
    {
      img: logo,
      Product: 'name',
      price: '200$',
      button: 'Add To Cart'
    },
    {
      img: logo,
      Product: 'name',
      price: '200$',
      button: 'Add To Cart'
    },



  ]
  return (
    <>
      {/* <Slider /> */}
        <div className="container">
          <div className="card-container">
            <input type="radio" name="colors-btn" id="color-1" checked />
            <input type="radio" name="colors-btn" id="color-2" />
            <input type="radio" name="colors-btn" id="color-3" />
            <div className="watch-area">

              <div className="logo-div">
                <Image src="" alt="" />
              </div>
              <div className="floating-div">
                <div className="watch-1"><Image src={pic1}  /></div>
                <div className="watch-2"><Image src={pic2}/></div>
                <div className="watch-3"><Image src={pic3}/></div>
              </div>

            </div>
            <div className="text-area">
              <div className="heading-area">
                <h2>Samsung watch</h2>
                <h4>Combine smart and beauty</h4>
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
                <h2 className="price-1">€ 279,-</h2>
                <h2 className="price-2">€ 279,-</h2>
                <h2 className="price-3">€ 279,-</h2>
                <button className="buy-btn">BUY NOW</button>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}