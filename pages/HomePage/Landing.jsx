// import Slider from "./Slider"
import logo from '../../assets/Images/clothes_logo.png'
import Image from "next/image"
export default function LandingPage() {
  let product = [
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
      <main>
        {product?.map((v, i) => {
          return (
            <>
              <div class="product">
                <Image src={v?.img} alt="Product 1" />
                <h2>{v?.Product}</h2>
                <p>{v?.price}</p>
                <button>{v?.button}</button>
              </div>
            </>
          )
        })
        }
        <div class="container">

          <div class="card-container">
            <input type="radio" name="colors-btn" id="color-1" checked />
            <input type="radio" name="colors-btn" id="color-2" />
            <input type="radio" name="colors-btn" id="color-3" />
            <div class="watch-area">

              <div class="logo-div">
                <Image src="" alt="" />
              </div>
              <div class="floating-div">
                <div class="watch-1"><Image src={logo} alt="samsung purple" /></div>
                <div class="watch-2"><Image src={logo} width="" height="" alt="samsung pink" /></div>
                <div class="watch-3"><Image src={logo} width="" height="" alt="samsung black" /></div>
              </div>

            </div>
            <div class="text-area">
              <div class="heading-area">
                <h2>Samsung watch</h2>
                <h4>Combine smart and beauty</h4>
              </div>

              <p class="paragraph-area">
                Monitor your health around the clock even at night.
                Achieve your wellness goal by measuring body composition with Samsung BioActive sensor.
              </p>

              <div class="color-selection">
                <div class="h5-text"><h5>Available Colors: </h5></div>

                <div class="color-pick-div">
                  <label for="color-1" class="colors color-1"></label>
                  <label for="color-2" class="colors color-2"></label>
                  <label for="color-3" class="colors color-3" ></label>
                </div>
              </div>
              <div class="price-and-buy-btn">
                <h2 class="price-1">€ 279,-</h2>
                <h2 class="price-2">€ 279,-</h2>
                <h2 class="price-3">€ 279,-</h2>
                <button class="buy-btn">BUY NOW</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}