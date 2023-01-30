import Image from 'next/image'
import { FaFacebookF } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaLinkedinIn } from 'react-icons/fa'
import { FaPinterest } from 'react-icons/fa'
import ReactTypingEffect from 'react-typing-effect'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'
import Link from 'next/link'
import Typewriter from 'typewriter-effect'
import GraphemeSplitter from 'grapheme-splitter'

const words = [
  'Check For you, everything has its design...',
  'We build the design with you in mind...',
  //   'We are a community of designers, creating experiences that inspire people productively',
  //   'Leverage on our creative expertise to communicate your values',
  //   'Let’s make something amazing together...',
  // ]
]

function Hero() {
  return (
    <div className="flex flex-col items-center w-screen min-h-screen px-4 py-3 mx-auto font-bold transition-all duration-300 hero h-96 justify-evenly md:px-8">
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
      <div className="z-0 self-start max-w-md text-4xl leading-normal transition-all duration-300 hero__title md:max-w-screen-xl md:px-5 md:text-5xl md:leading-normal lg:px-9 lg:text-5xl lg:leading-relaxed">
        <h1>
          {/* We {`${words[index].substring(0, subIndex)}${blink ? '|' : ' '}`} */}
          {
            // <ReactTypingEffect
            //   text={words}
            //   speed="50"
            //   eraseSpeed="50"
            //   eraseDelay="2500"
            //   typingDelay="1800"
            // />
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString(
                    'For <strong style="color: #FF8000">you</strong>, everything has its <strong style="color: #FF8000">design</strong>...'
                  )
                  .pauseFor(2500)
                  .deleteAll()
                  .typeString(
                    'We build the <strong style="color: #FF8000">design</strong> with <strong style="color: #FF8000">you</strong> in mind...'
                  )
                  .pauseFor(2500)
                  .deleteAll()
                  .start()
              }}
              options={{
                loop: true,
              }}
            />
          }
        </h1>
      </div>
      <div className="z-0 flex flex-col self-start w-full mb-10 text-sm hero__categories md:text-md space-y-7 md:flex-row md:items-center md:justify-between md:gap-0 md:space-y-0 md:space-x-8 md:px-5 lg:-mt-10 lg:max-w-screen-lg lg:px-9 lg:font-medium">
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
      <div className="z-0 flex flex-row self-start w-full max-w-md hero__socialLinks gap-9 md:px-5 lg:px-9">
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
      {/* <div className="absolute w-3/5 h-auto mt-8 ml-auto opacity-50 about-img -top-12 left-72 -z-50 md:right-6 md:max-w-sm md:opacity-90">
        <img src="https://i.ibb.co/52XGnzj/protaroom-icon-img.png" alt="" />
      </div> */}
    </div>
  )
}

export default Hero
