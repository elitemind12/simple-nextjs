import Hero from './componets/Hero';
import Instagram from './componets/Instagram';
import Slider from './componets/Slider';
import { sliderData } from './componets/SliderData';

export default function Home() {
  return (
    <div>
      <Hero Heading="Makyao Photography" Message="I capture moments in nature and keep them alive" />
      <Slider slides={sliderData} />
      <Instagram />
    </div>
  )
}
