import Image from "next/image"
import { HomeContainer, Product } from "../styles/pages/home"
import tShirt1 from '../assets/t-shirts/1.png'
import tShirt2 from '../assets/t-shirts/2.png'
import tShirt3 from '../assets/t-shirts/3.png'
import tShirt4 from '../assets/t-shirts/4.png'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react' 

export default function Home() {
  const [sliderRef] = useKeenSlider({
    slides:{
      perView: 3,
      spacing: 48,
    }, loop: true,
  })
  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      <Product className="keen-slider__slide">
        <Image src={tShirt1} alt='' width={520} height={480}/>
        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image src={tShirt2} alt='' width={520} height={480}/>
        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image src={tShirt3} alt='' width={520} height={480}/>
        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
    </HomeContainer>
  )
}
