// import Slider from "./Slider"
import logo from '../../assets/Images/clothes_logo.png'
import Image from "next/image"
export default function LandingPage() {
  let product = [
    {
      img: {logo},
      Product: 'name',
      price: '200$',
      button: 'Add To Cart'
    },
    {
      img: {logo},
      Product: 'name',
      price: '200$',
      button: 'Add To Cart'
    },
    {
      img: {logo},
      Product: 'name',
      price: '200$',
      button: 'Add To Cart'
    },
    {
      img: {logo},
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
      </main>
    </>
  )
}