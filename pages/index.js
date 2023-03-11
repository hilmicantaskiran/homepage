import Link from 'next/link'

function HomePage() {
  return (
    <>
      <div className="site-container font-sans">
        <div className="container mx-auto mb-1 flex px-5 py-6 md:py-24 md:flex-row flex-col items-center">
          <div className="center mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded-2xl bg-[#575757]"
              alt=""
              src="/photos/IMG.png"
            ></img>
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-5xl text-4xl mb-10 font-bold">
              Hilmi Can Taşkıran
            </h1>
            <div className="mb-10 leading-relaxed">
              <p className="mb-1">
                Hey, I'm Hilmi Can. I'm the Software Engineer at
                <Link href="https://www.eteration.com" className="font-bold">
                  {' '}
                  Eteration
                </Link>
                .
              </p>
              <p>
                I develop web applications using React and Next.js, and mobile
                applications using React Native. I do open source developments
                on
                <Link
                  href="https://www.github.com/hilmicantaskiran/"
                  className="hover px-1 font-bold"
                >
                  Github
                </Link>
                .
              </p>
            </div>
            <div>
              <p className="font-bold">Reach me at:</p>
              <div className="flex gap-4 mt-2">
                <Link href="mailto: hilmicantaskiran@gmail.com">
                  <img alt="Send email" src="/icons/email.svg"></img>
                </Link>
                <Link href="https://www.linkedin.com/in/hilmicantaskiran/">
                  <img alt="LinkedIn" src="/icons/linkedin.svg"></img>
                </Link>
                <Link href="https://twitter.com/hlmcntskrn">
                  <img alt="Twitter" src="/icons/twitter.svg"></img>
                </Link>
                <Link href="https://www.instagram.com/hilmicantas/?hl=tr">
                  <img alt="Instagram" src="/icons/instagram.svg"></img>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden sm:block text-gray-400 body-font lg:absolute relative inset-x-0 bottom-4 md:bottom-6">
          <div className="site-4xl-container mx-auto center flex flex-row items-center justify-center text-xs">
            <p>Designed in</p>
            <Link href="https://www.figma.com/file/hYD084Uab2OxUkxz7II3WK/portfolio?node-id=0%3A1">
              <img
                className="p-2"
                alt="Figma Design"
                src="/icons/figma.svg"
              ></img>
            </Link>
            <p>built with</p>
            <Link href="https://nextjs.org/">
              <img
                className="p-2"
                alt="Next.js Website"
                src="/icons/next-white.svg"
              ></img>
            </Link>
            <p>deployed using</p>
            <Link href="https://vercel.com/">
              <img
                className="p-2"
                alt="Vercel Website"
                src="/icons/vercel-white.svg"
              ></img>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage
