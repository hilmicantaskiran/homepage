function HomePage() {
  return (
    <>
      <div className="site-container font-sans">
        <div className="container mx-auto mb-1 flex px-5 py-6 md:py-24 md:flex-row flex-col items-center">
          <div className="center mb-10 md:mb-0">
            <img className="object-cover object-center rounded-2xl bg-blue-800" alt="" src="/photos/IMG.png"></img>
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-5xl text-4xl mb-4 font-bold">Hi! I am Hilmi Can.</h1>
            <p className="mb-10 leading-relaxed">I am developing web applications with React.js and Next.js. I also work on machine learning and natural language processing. I do open source developments on  
                <a href="https://www.github.com/hilmicantaskiran/" className="hover px-1 font-bold">Github</a>.
            </p>
            <div>
              <p className="font-bold">Reach me at:</p>
              <p className="flex space-x-2">
                <a href="mailto: hlmtaskiran76@gmail.com" className="hover">email</a>
                <a href="https://www.linkedin.com/in/hilmicantaskiran/" className="hover">linkedin</a>
                <a href="https://twitter.com/hlmcntskrn" className="hover">twitter</a>
                <a href="https://www.instagram.com/hilmicantas/?hl=tr" className="hover">instagram</a>
              </p>
            </div>
          </div>  
        </div>
        <div className="text-gray-400 body-font lg:absolute sm:relative absolute inset-x-0 bottom-4 md:bottom-6">
            <div className="site-4xl-container mx-auto center flex flex-row items-center justify-center text-xs">
                <p>Designed in</p>
                <a href="https://www.figma.com/file/hYD084Uab2OxUkxz7II3WK/portfolio?node-id=0%3A1">
                    <img className="p-1" alt="" src="/icons/figma.svg"></img> 
                </a>
                <p>built with</p>
                <a href="https://nextjs.org/">
                    <img className="p-1" alt="" src="/icons/next-white.svg"></img> 
                </a>
                <p>deployed using</p>
                <a href="https://vercel.com/">
                    <img className="p-1" alt="" src="/icons/vercel-white.svg"></img>
                </a>
            </div>
        </div>
      </div>
    </>
  )
}

export default HomePage
