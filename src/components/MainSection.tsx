import mainDesktop from '../assets/images/image-web-3-desktop.jpg'
import mainMobile from '../assets/images/image-web-3-mobile.jpg'

export function MainSection() {
  return (
    <section className="flex flex-col ">
      <picture className="md:w-full">
        <source media="(max-width: 768px)" srcSet={mainMobile} />
        <source media="(min-width: 768px)" srcSet={mainDesktop} />
        <img src={mainDesktop} alt="Splash Image" />
      </picture>

      <article className="flex w-full flex-col items-center justify-center space-y-4 py-4 md:flex-row">
        <h1 className="text-5xl  font-[800]">The Bright Future of Web 3.0?</h1>
        <div className="flex h-full flex-col place-content-between items-start space-y-4 ">
          <p>
            We dive into the evolution of the web that claims to put the power
            of the platforms back into tht hands of the people. But is it really
            fulfilling its promise?
          </p>
          <button className="bg-softRed py-2 px-8 text-white hover:bg-darkPurple">
            READ MORE
          </button>
        </div>
      </article>
    </section>
  )
}
