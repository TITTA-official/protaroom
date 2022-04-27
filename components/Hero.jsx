import Image from 'next/image'
import { FaFacebookF } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaLinkedinIn } from 'react-icons/fa'
import { FaPinterest } from 'react-icons/fa'
import ReactTypingEffect from 'react-typing-effect'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'
import Link from 'next/link'

const words = [
  'We are all about the gladness of people',
  'We create experiential designs...',
  'We are a community of designers, creating experiences that inspire people productively',
  'Leverage on our creative expertise to communicate your values',
  'Let’s make something amazing together...',
]

function Hero() {
  return (
    <div className="hero min-h-custom mx-auto  flex w-screen flex-col items-center justify-evenly py-3 px-4 font-bold md:px-8">
      <div className="hero-bg-img -z-50">
        {/* <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          stopOnHover={false}
          swipeable
          emulateTouch
          showArrows={false}
          showIndicators={false}
          showStatus={false}
        >
          <div>
            <img src="https://i.ibb.co/jRNS3Hv/D3.jpg" />
          </div>
          <div>
            <img src="https://i.ibb.co/L6JQxDC/T11.png" />
          </div>
         
        </Carousel> */}
        {/* <img src="https://i.ibb.co/V2nGY7t/hero-art1.jpg" alt="hero" /> */}
      </div>
      <div className="hero__title z-0 max-w-md self-start text-4xl leading-normal  md:max-w-screen-xl md:px-5 md:text-5xl md:leading-normal  lg:px-9 lg:text-5xl lg:leading-relaxed">
        <h1>
          {/* We {`${words[index].substring(0, subIndex)}${blink ? '|' : ' '}`} */}
          {
            <ReactTypingEffect
              text={words}
              speed="50"
              eraseSpeed="50"
              eraseDelay="2500"
              typingDelay="1800"
            />
          }
        </h1>
      </div>
      <div className="hero__categories md:text-md  z-0 mb-10  flex w-full flex-col gap-8 self-start text-sm md:flex-row md:items-center md:justify-between md:gap-0 md:px-5 lg:-mt-10 lg:max-w-screen-lg lg:px-9 lg:font-medium">
        <span>
          <Link href="/service-page">
            <a>Artworks Design and Installation</a>
          </Link>
        </span>
        <span>
          <Link href="/service-page">
            <a>Branding</a>
          </Link>
        </span>
        <span>
          <Link href="/service-page">
            <a>Digital Design</a>
          </Link>
        </span>
        <span>
          <Link href="/service-page">
            <a>Interior Design</a>
          </Link>
        </span>
        <span>
          <Link href="/service-page">
            <a>Motion Design</a>
          </Link>
        </span>
        <span>
          <Link href="/service-page">
            <a>Print Design</a>
          </Link>
        </span>
      </div>
      <div className="hero__socialLinks z-0 flex w-full max-w-md flex-row gap-9 self-start md:px-5 lg:px-9">
        <span>
          <a href="https://www.facebook.com/Protaroom-109300285088378/">
            <FaFacebookF />
          </a>
        </span>

        <span>
          <a href="https://www.linkedin.com/company/protaroom">
            <FaLinkedinIn />
          </a>
        </span>
      </div>
      {/* <div className="about-img absolute -top-12 left-72 -z-50 mt-8 ml-auto h-auto w-3/5 opacity-50 md:right-6 md:max-w-sm md:opacity-90">
        <img src="https://i.ibb.co/52XGnzj/protaroom-icon-img.png" alt="" />
      </div> */}
    </div>
  )
}

export default Hero
